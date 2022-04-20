import { useParams } from "react-router";
import useGetDetailComment from "../../hooks/comments/useGetDetailComment";
import useGetDetailPhoto from "../../hooks/photos/useGetDetailPhoto";

const PhotoDetail = () => {
  const param = useParams();
  //! State
  const id = param.id;
  const { data: photoDetail, loading: loadingDetail } = useGetDetailPhoto(id);
  //! Render
  return (
    <>
      {loadingDetail ? (
        "loading"
      ) : (
        <div>
          <p>ID: {photoDetail.id}</p>
          <p>ALBUM ID: {photoDetail.albumId}</p>
          <p>TITLE: {photoDetail.title}</p>
          <img src={photoDetail.url} alt={photoDetail.id} />
          <img src={photoDetail.thumbnailUrl} alt={photoDetail.id} />
        </div>
      )}
    </>
  );
};
export default PhotoDetail;
