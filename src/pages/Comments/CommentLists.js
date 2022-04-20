import { Link } from "react-router-dom";
import BackHome from "../../components/buttonBackHome";
import appPaths from "../../constants/appPaths";
import useGetListComment from "../../hooks/comments/useGetListComment";
const CommentsList = () => {
  const { data, loading } = useGetListComment();
  if (loading) {
    return "Loading";
  }
  return <>
    <BackHome />
    {data.map((el) => (
        <div key={el.id}>
            <Link to={appPaths.comment.detailWithId(el.id)}>
                {el.title}
            </Link>
        </div>
    ))}
  </>;
};
export default CommentsList;
