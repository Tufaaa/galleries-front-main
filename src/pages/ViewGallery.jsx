import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Carousels from "../components/Carousels";
import { getGalleryById } from "../services/galleriesService";

const ViewGallery = () => {
  const [gallery, setGallery] = useState({});
  const { id } = useParams();
  const formattedDate = new Date(gallery.created_at).toLocaleString();
  const urls = JSON.parse(gallery.urls || "[]");

  useEffect(() => {
    if (id) {
      getGalleryById(id).then(({ data }) => {
        setGallery(data);
      });
    }
  }, [id]);

  return (
    <div>
      <div
        className="row row-cols-1 justify-content-center"
        style={{ margin: "auto" }}
      >
        <div
          className="col m-5"
          style={{ width: "700px", borderRadius: "5px", opacity: "80%" }}
        >
          <div className="card shadow-sm">
            <div className="card-body bg-light border rounded border">
              <h3 className="card-text">{gallery.name}</h3>
              <a
                href={`/authors/${gallery.user?.id}`}
                style={{
                  textDecoration: "none",
                  color: "darkslategrey",
                }}
              >
                <div className="mb-1 text-body-secondary">
                  Author: {gallery.user?.first_name} {gallery.user?.last_name}
                </div>
              </a>
              <p className="card-text mb-2">Release date: {formattedDate}</p>
              <p className="card-text mb-3">
                Description: {gallery.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ margin: "auto", width: "700px" }}
      >
        <Carousels urls={urls} />
      </div>
    </div>
  );
};

export default ViewGallery;
