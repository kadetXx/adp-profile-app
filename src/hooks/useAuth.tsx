import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Socket } from "socket.io-client";

export const useAuth = (socket: Socket) => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  useEffect(() => {
    if (!user?.email) return;

    /**
     * websocket events to emit login to server
     * and to listen for logout from meeting app
     */
    socket.emit("login", user.email);
    socket.on("logout", logout);

    return () => {
      socket.off(user.email);
    };
  }, [user]);

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
