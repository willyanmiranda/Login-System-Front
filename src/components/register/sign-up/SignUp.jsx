import React, { useReducer } from 'react';
import './SignUp.css';
import SignUpForm from './signUpForm/SignUpForm';
import { initialValues, reducer } from './formReducer';
import { handleSubmit } from './formHelpers';

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <section className='sign-up-section'>
      <header>
        <h1>Crie sua conta</h1>
        <p>Já possui conta? <a href="/login">Login</a></p>
      </header>
      <SignUpForm state={state} dispatch={dispatch} handleSubmit={(e) => handleSubmit(e, state, dispatch)} />
    </section>
  );
};

export default SignUp;