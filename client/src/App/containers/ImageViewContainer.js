import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { Posts } from "../services/agent";

const ImageViewContainer = () => {
    console.log('Image View Container rendered...')
  let { id } = useParams();
  const [{ status, response }, types, handleRequest] = useApi(Posts.getOne);

  useEffect(() => {
    handleRequest(id).then(console.log);
  }, [handleRequest, id]);

  return <div></div>;
};

export default ImageViewContainer;
