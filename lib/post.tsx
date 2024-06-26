import { compileMDX } from "next-mdx-remote/rsc";

type Filetree = {
  tree: [{ path: string }];
};

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/Ikendu/blogpost/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-Github-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) return undefined;
  const rawMDX = await res.text();
  if (rawMDX === `404: Not Found`) return undefined;

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
  }>({
    source: rawMDX,
    options: { parseFrontmatter: true },
  });

  const id = fileName.replace(/\.mdx$/, ``);

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };
  return blogPostObj;
}

export async function getPostMeta(): Promise<Meta[] | undefined> {
  console.log(`Calling post fetcher`);
  const res = await fetch(
    "https://api.github.com/repos/ikendu/blogpost/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) return undefined;
  const repoFileTree: Filetree = await res.json();

  const filesArray = repoFileTree.tree.map((obj) => obj.path);
  filesArray.filter((path) => path.endsWith(`.mdx`));
  console.log(`REPO FILE TREE`, filesArray);

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) posts.push(post.meta);
  }
  console.log(posts);
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
