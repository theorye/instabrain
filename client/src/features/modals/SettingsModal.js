import React from "react";
import Modal from "./Modal";

export const SettingsModal = ({ setIsModalOpen, logout }) => {
    console.log('Settings Modal rendered...')
  return (
    <Modal onClose={() => setIsModalOpen(false)}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button>Change Password</button>
        <button onClick={() => logout()}>Log Out</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </div>
    </Modal>
  );
};
