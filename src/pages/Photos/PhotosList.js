import { Link } from "react-router-dom";
import BackHome from "../../components/buttonBackHome";
import appPaths from "../../constants/appPaths";
import useGetListPhotos from "../../hooks/photos/useGetListPhotos";
const PhotosList = () => {
  const { data, loading } = useGetListPhotos();
  if (loading) {
    return "Loading";
  }
  return <>
  <BackHome />
    {data.map((el) => (
        <div key={el.id}>
            <Link to={appPaths.photos.detailWithId(el.id)}>
                {el.title}
            </Link>
        </div>
    ))}
  </>;
};
export default PhotosList;
