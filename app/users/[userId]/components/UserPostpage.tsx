type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPostpage({ promise }: Props) {
  const posts = await promise;
  return (
    <div>
      <article>
        {posts.map((post) => (
          <div className="m-5" key={post.id}>
            <h2 className=" text-2xl">{post.title}</h2>
            <p>{post.body}</p>
            <br />
          </div>
        ))}
      </article>
    </div>
  );
}
