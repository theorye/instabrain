import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import Api from "../services/agent";

const ImageViewContainer = props => {
  console.log("Image View Container rendered...");
  let { id } = useParams();
  const [{ status, response }, types, handleRequest] = useApi(Api.getPost);

  useEffect(() => {
    handleRequest(id).then(console.log);
  }, [handleRequest, id]);

  console.log(props);
  return (
    <div>
      {status === types.SUCCESS && (
        <div style={{ display: "flex" }}>
          <div
            style={{ backgroundColor: "black", height: "30rem", width: "30rem" }}
          >
            <img
              style={ { width: '100%', height: '100%', objectFit: 'contain'}}
              src={response[0].url}
              alt=""
            ></img>
          </div>
          <div>Other side</div>
        </div>
      )}

      {status === types.FETCHING && <p>Loading</p>}
    </div>
  );
};

export default ImageViewContainer;
