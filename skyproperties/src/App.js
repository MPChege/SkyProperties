import React from "react";
import * as Components from './Components';
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";

function App() {
  const [signIn, toggle] = React.useState(true);
  const [userType, setUserType] = React.useState('');

  const handleSignUp = () => {
    console.log("Sign up button clicked");
    toggle(true); // Set signIn to true to slide to the sign-in side
  };

  let welcomeMessage = '';

  if (userType === 'buyer') {
    welcomeMessage = "Welcome! Come and get some houses!";
  }

  return (
    <>
    <Navbar/>

    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type='text' placeholder='Name' />
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <Components.UserTypeSelect onChange={(event) => setUserType(event.target.value)}>
            <option value=''>Select user type</option>
            <option value='buyer'>Buyer</option>
            <option value='seller'>Seller</option>
          </Components.UserTypeSelect>
          <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To stay connected with us, please login with your personal info.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start your journey with us.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
      {welcomeMessage && (
        <Components.Paragraph>{welcomeMessage}</Components.Paragraph>
      )}
    </Components.Container>
    </>
  );
}

export default App;
