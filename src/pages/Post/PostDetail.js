import { useParams } from "react-router";
import useGetDetailPost from "../../hooks/posts/useGetDetailPost";

const PostDetail = () => {
  const param = useParams();
  //! State
  const id = param.id;
  const { data: postDetail, loading: loadingDetail } = useGetDetailPost(id);
  //! Render
  return (
    <>
      {loadingDetail ? (
        "loading"
      ) : (
        <div>
          <p>ID: {postDetail.id}</p>
          <p>USER ID: {postDetail.userId}</p>
          <p>TITLE: {postDetail.title}</p>
        </div>
      )}
    </>
  );
};
export default PostDetail;
