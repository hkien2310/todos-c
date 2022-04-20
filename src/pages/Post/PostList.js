import BackHome from "../../components/buttonBackHome";
import useGetListTodos from "../../hooks/posts/useGetListPosts";
import PostItem from "./component/PostItem"
const PostList = () => {
  const { data, loading } = useGetListTodos();
  if (loading) {
    return "Loading";
  }
  return <>
    <BackHome/>
    {data.map((el) => (
        <div key={el.id}>
            <PostItem el={el}/>
        </div>
    ))}
  </>;
};
export default PostList;
