import React from "react";
import styled from "styled-components";

const StyledProfileGalleryItem = styled.div`
  background: red;
  width: 19rem;
  flex: 0 0 calc(100%/3 - 1rem);
  height: 19rem;
  // flex-basis: 0;

  margin-bottom: 1.5rem;

  .gallery-image {
    background: black;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const ProfileGalleryItem = ({ url }) => {
  return (
    <StyledProfileGalleryItem>
      <img src={url} className="gallery-image" alt="" />

      {/* <div class="gallery-item-info">
        <ul>
          <li class="gallery-item-likes">
            <span class="visually-hidden">Likes:</span>
            <i class="fas fa-heart" aria-hidden="true"></i> 56
          </li>
          <li class="gallery-item-comments">
            <span class="visually-hidden">Comments:</span>
            <i class="fas fa-comment" aria-hidden="true"></i> 2
          </li>
        </ul>
      </div> */}
    </StyledProfileGalleryItem>
  );
};

export default ProfileGalleryItem;
