import React from "react";
import StyledProfileHeader from "./StyledProfileHeader";
import ProfileHeaderInfo from "./ProfileHeaderInfo";

const ProfileHeader = ({username}) => {
  return (
    <StyledProfileHeader>
      <div className="profile-image">
        <img
          src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
          alt=""
        />
      </div>

      <ProfileHeaderInfo username={username} />
    </StyledProfileHeader>
  );
};

export default ProfileHeader;
