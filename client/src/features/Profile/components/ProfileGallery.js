import React from "react";
import ProfileGalleryItem from "./ProfileGalleryItem";

import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledProfileGallery = styled.div`
    background: blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProfileGallery = ({ pictures }) => {
  const location = useLocation();
  return (
    <StyledProfileGallery>
      {pictures.map(({ id, url }) => (
        <Link
          key={id}
          to={{
            pathname: `/p/${id}`,
            state: { background: location }
          }}
        >
          <ProfileGalleryItem url={url} />
        </Link>
      ))}

      <div className="loader"></div>
    </StyledProfileGallery>
  );
};

export default ProfileGallery;
