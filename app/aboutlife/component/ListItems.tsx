type Props = {
  posts: BlogPost;
};
const ListItems = ({ posts }: Props) => {
    const {id, title, date} = posts
  return <div>ListItems</div>;
};
export default ListItems;
