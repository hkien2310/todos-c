import { useParams } from "react-router";
import useGetDetailTodo from "../../hooks/todos/useGetDetailTodo";

const ShowDetail = () => {
  const param = useParams();
  //! State
  const id = param.id;
  const { data: todoDetail, loading: loadingDetail } = useGetDetailTodo(id);
  
  //! Render
  return (
    <>
      {loadingDetail ? (
        "loading"
      ) : (
        <div>
          <p>ID: {todoDetail.id}</p>
          <p>USER ID: {todoDetail.userId}</p>
          <p>TITLE: {todoDetail.title}</p>
          <p>COMPLETED: {todoDetail.completed ? "done" : "doing"}</p>
        </div>
      )}
    </>
  );
};
export default ShowDetail;
