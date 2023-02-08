import { io } from "socket.io-client";
import { useAuth } from "./hooks/useAuth";
import { StyledContainer, StyledDivider } from "./App.styles";
import { Checkmark } from "./components/Checkmark";
import { Cancel } from "./components/Cancel";
import {
  globalStyles,
  Loader,
  Flex,
  Header,
  Avatar,
  Text,
  Button,
} from "@adp/common";

const socket = io(import.meta.env.VITE_ADP_SERVER_URL);

function App() {
  globalStyles();

  const { user, isAuthenticated, isLoading, logout } = useAuth(socket);

  if (isLoading || !isAuthenticated || !user) {
    return <Loader fullScreen />;
  }

  return (
    <>
      <Header
        profile={{
          username: user.name,
          avatarUrl: user.picture,
          profileUrl: "/",
          onLogout: () => {
            socket.emit("logout", user.email);
            logout();
          },
        }}
      />

      <StyledContainer direction="column" align="center" justify="flex-start">
        <Flex
          stretchx
          justify="center"
          align="center"
          direction="column"
          gap="1.5rem"
        >
          <Avatar src={user.picture} title={user.name} size="large" />

          <Flex justify="center" align="center" direction="column" gap="0.7rem">
            <Text variant="h1">{user.nickname}</Text>
            <Text size="$lg" weight={500}>
              {user.email}
            </Text>

            <Flex align="center" gap="0.4rem">
              <Text variant="body1">
                {user.email_verified ? "Email verified" : "Email unverified"}
              </Text>
              {user.email_verified ? (
                <Checkmark width="1.2rem" />
              ) : (
                <Cancel width="1.2rem" />
              )}
            </Flex>
          </Flex>
        </Flex>

        <StyledDivider />

        <Button
          size="large"
          onClick={() =>
            window.open(import.meta.env.VITE_MAIN_APP_URL, "_blank")
          }
        >
          Open Meeting App
        </Button>
      </StyledContainer>
    </>
  );
}

export default App;
