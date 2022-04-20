import { Link } from "react-router-dom";
import appPaths from "../../../constants/appPaths";


const PostItem = ({ el }) => {
  return <Link to={appPaths.post.detailWithId(el.id)}>{el.title}</Link>;
};
export default PostItem;
