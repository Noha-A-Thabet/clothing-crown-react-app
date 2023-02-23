import SignUpForm from "../../Components/sign-up-form/signUpForm";
import SignInForm from "../../Components/sign-in-form/signInForm";
import "./Authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
