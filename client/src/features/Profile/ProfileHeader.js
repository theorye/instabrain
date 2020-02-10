import React from "react";
import StyledProfileHeader from "./StyledProfileHeader";

export const ProfileHeader = ({avatar=null, children}) => {
  return (
    <StyledProfileHeader>
      <div className="profile-image">
        <img
          src={avatar || '/assets/defaultUser.jpg'}
          alt=""
        />
        {children}
      </div>

    </StyledProfileHeader>
  );
};