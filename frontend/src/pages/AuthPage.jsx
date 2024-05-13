import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/Signupcard";
import authScreenAtom from "../atoms/authAtom";

function AuthPage() {
  const authScreenState = useRecoilValue(authScreenAtom);
  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
}

export default AuthPage;
