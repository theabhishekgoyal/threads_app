import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Box, Container } from "@chakra-ui/react";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
// import LogoutButton from "./components/LogoutButton";
import UpdateProfile from "./pages/UpdateProfile";
import CreatePost from "./components/CreatePost";
import ChatPage from "./pages/ChatPage";
function App() {
  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <>
      <Box postion={"relative"}>
        <Container maxW="620px">
          <Header />
          <Routes>
            <Route
              path="/"
              element={user ? <HomePage /> : <Navigate to={"/auth"} />}
            />
            <Route
              path="/auth"
              element={!user ? <AuthPage /> : <Navigate to={"/"} />}
            />
            <Route
              path="/update"
              element={user ? <UpdateProfile /> : <Navigate to={"/auth"} />}
            />
            <Route
              path="/:username"
              element={
                user ? (
                  <>
                    <UserPage />
                    <CreatePost />
                  </>
                ) : (
                  <UserPage />
                )
              }
            />
            <Route path="/:username/post/:pid" element={<PostPage />} />
            <Route path="/chat" element={user ? <ChatPage /> : <Navigate />} />
          </Routes>
          {/* {user && <LogoutButton/>} */}
          {/* {user && <CreatePost />} */}
        </Container>
      </Box>
    </>
  );
}

export default App;
