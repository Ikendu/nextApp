type Filetree = {
  tree: [{ path: string }];
};

export async function getPostMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    `https://api.github.com/repos/Ikendu/blogpost/git/trees/main?recursive=1`,
    {
      headers: {
        Accept: "application/vnd-github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-Github-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) return undefined;
  const repoFileTree: Filetree = await res.json();
  console.log(`REPO FILE TREE`, repoFileTree);

  const filesArray = repoFileTree.tree.map((obj) => obj.path);
  filesArray.filter((path) => path.endsWith(`.mdx`));
}
