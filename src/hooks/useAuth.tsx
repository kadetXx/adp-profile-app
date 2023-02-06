import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

export const useAuth = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  useEffect(() => {
    const shouldRedirect = !isLoading && !isAuthenticated;

    if (!shouldRedirect) return;

    const mainApp = import.meta.env.VITE_MAIN_APP_URL;
    const callbackUrl = window.location.origin;

    window.location.replace(`${mainApp}?callbackUrl=${callbackUrl}`);
  }, [isLoading, isAuthenticated]);

  useEffect(() => {
    console.log(user, ">>");
  }, [user]);

  /**
   * email: "techkadet@gmail.com"
     email_verified: false
     name: "techkadet@gmail.com"
     nickname: "techkadet"
     picture: "https://s.gravatar.com/avatar/d0c3a56efd206edc5c3d004def2efefc?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png"
     updated_at: "2023-02-06T02:23:35.846Z"
   */

  return {
    user,
    logout,
    isLoading,
    isAuthenticated,
  };
};
