import { useParams } from "react-router";
import useGetDetailComment from "../../hooks/comments/useGetDetailComment";

const CommentDetail = () => {
  const param = useParams();
  //! State
  const id = param.id;
  const { data: commentDetail, loading: loadingDetail } = useGetDetailComment(id);
  
  //! Render
  return (
    <>
      {loadingDetail ? (
        "loading"
      ) : (
        <div>
          <p>ID: {commentDetail.id}</p>
          <p>USER ID: {commentDetail.userId}</p>
          <p>TITLE: {commentDetail.title}</p>
          <p>BODY: {commentDetail.body}</p>
          <p>COMPLETED: {commentDetail.completed ? "done" : "doing"}</p>
        </div>
      )}
    </>
  );
};
export default CommentDetail;
