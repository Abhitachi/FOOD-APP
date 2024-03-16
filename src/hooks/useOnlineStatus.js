import { useState } from "react";

export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if user is online
  window.addEventListener("online", (e) => {
    setOnlineStatus(true);
  });
  window.addEventListener("offline", (e) => {
    setOnlineStatus(false);
  });
  // return online status

  return onlineStatus;
};
