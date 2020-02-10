import React, { useEffect, useState } from "react";
import {
  ProfileGallery,
  ProfileTabs,
  ProfileHeaderInfo,
  StyledProfileHeader
} from "../features/profile";
import { SettingsModal } from "../features/modals/SettingsModal";
import useApi from "../hooks/useApi";
import Api from "../services/agent";

function ProfileContainer({ handle }) {
  console.log("Profile Container Rendered");
  const [{ status, response }, types, handleRequest] = useApi(Api.getProfile);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    handleRequest(handle).then(data => {
      // console.log("PROFILE CONTAINER HANDLE REQUEST");
      // console.log(data);
    });
  }, [handleRequest, handle]);

  if (status === types.FETCHING) {
    return <p>Loading...</p>;
  }

  if (status === types.SUCCESS && response.username) {
    return (
      <>
        <StyledProfileHeader>
          <div className="profile-image">
            <img
              src={response.avatar || "/assets/defaultUser.jpg"}
              alt=""
            />
          </div>
          <ProfileHeaderInfo
            username={response.username}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          >
            <SettingsModal setIsModalOpen={setIsModalOpen} />
          </ProfileHeaderInfo>
        </StyledProfileHeader>
        <ProfileTabs />
        <ProfileGallery pictures={response.posts || []} />
      </>
    );
  } else {
    return (
      <>
        <h1>Sorry, this page isn't available.</h1>
        <p>
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </p>
      </>
    );
  }
}

export default ProfileContainer;
