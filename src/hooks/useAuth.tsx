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

  return {
    user,
    logout,
    isLoading,
    isAuthenticated,
  };
};
