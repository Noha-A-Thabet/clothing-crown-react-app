import { signInWithGooglePopup } from "../../Utils/Firebase/Firebase.utils";
import { createUserDocumentFromAuth } from "../../Utils/Firebase/Firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </>
  );
};
export default SignIn;
