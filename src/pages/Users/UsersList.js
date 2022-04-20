import { Link } from "react-router-dom";
import BackHome from "../../components/buttonBackHome";
import appPaths from "../../constants/appPaths";
import useGetListUsers from "../../hooks/users/useGetListUsers"

const UsersList = () => {
  const { data, loading } = useGetListUsers();
  console.log(data)
  if (loading) {
    return "Loading";
  }
  return <>
  <BackHome />
    {data.map((el) => (
        <div key={el.id}>
            <Link to={appPaths.users.detailWithId(el.id)}>
                {el.name}
            </Link>
        </div>
    ))}
  </>;
};
export default UsersList;
