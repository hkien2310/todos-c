import { useParams } from "react-router";
import useGetDetailUser from "../../hooks/users/useGetDetailUser";

const UserDetail = () => {
  const param = useParams();
  //! State
  const id = param.id;
  const { data: userDetail, loading: loadingDetail } = useGetDetailUser(id);
  //! Render
  return (
    <>
      {loadingDetail ? (
        "loading"
      ) : (
        <div>
          <p>ID: {userDetail.id}</p>
          <p>ADDRESS: {JSON.stringify(userDetail.address)}</p>
          <p>company: {JSON.stringify(userDetail.company)}</p>
          <p>EMAIL: {userDetail.email}</p>
          <p>NAME: {userDetail.name}</p>
          <p>PHONE: {userDetail.phone}</p>
          <p>USER NAME: {userDetail.username}</p>
          <p>WEBSITE: {userDetail.website}</p>
        </div>
      )}
    </>
  );
};
export default UserDetail;
