import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase/Firebase.utils";
import SignUpForm from "./../../Components/sign-up-form/signUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm />
    </>
  );
};
export default SignIn;
