import React from "react";
import { useState } from "react";
import FormInput from "./../form-input/formInput";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase/Firebase.utils";
import "./signUpForm.styles.scss";
import Button from "./../button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // for distructuring values:
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //  for handling input:
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  // for handling submit
  const submitHandler = async (e) => {
    e.preventDefault();

    // matching password & confirm password
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />

        <FormInput
          label="email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}
