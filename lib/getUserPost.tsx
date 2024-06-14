export default async function getUserPost(userId:string) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return <div>getUserPost</div>;
}
