import React, { useEffect } from "react";
import {
  StyledProfile,
  ProfileGallery,
  ProfileHeader,
  ProfileTabs
} from "../../features/Profile";
import useApi from "../hooks/useApi";
import { Profiles } from "../services/agent";
import StyledPage from "./StyledPage";



function ProfileContainer({handle}) {
  console.log('Profile Container Rendered');
  const [{ status, response }, types, handleRequest] = useApi(Profiles.get);

  useEffect(() => {
    handleRequest(handle)
      .then( data => {
        console.log('PROFILE CONTAINER HANDLE REQUEST')
        console.log(data)});
      
  }, [handleRequest, handle]);

  return (
    <StyledPage>
      { status === types.SUCCESS && response.username && (
        <>
          <ProfileHeader username={response.username} />
          <ProfileTabs />
          <ProfileGallery pictures={response.posts || []} />
        </>
      ) }

      { status === types.FETCHING && (<p>Loading...</p>)}

      { status === types.SUCCESS && !response.username &&  (
        <>
          <h1>Sorry, this page isn't available.</h1>
          <p>
            The link you followed may be broken, or the page may have been
            removed. Go back to Instagram.
          </p>
        </>
      )}
    </StyledPage>
  );
}

export default ProfileContainer;
