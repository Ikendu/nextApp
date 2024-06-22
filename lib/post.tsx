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
}
