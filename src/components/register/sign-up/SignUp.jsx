import React, { useReducer } from 'react';
import './SignUp.css';
import SignUpForm from './signUpForm/SignUpForm';
import { initialValues, reducer } from './formReducer';
import { handleSubmit } from './formHelpers';
import { useValue } from '../../../context/contextProvider';

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const { dispatch: dispatchAlert } = useValue();

  return (
    <section className='sign-up-section'>
      <header>
        <h1>Crie sua conta</h1>
        <p>Já possui conta? <a href="/login">Login</a></p>
      </header>
      <SignUpForm state={state} dispatch={dispatch} handleSubmit={(e) => handleSubmit(e, state, dispatchAlert)} />
    </section>
  );
};

export default SignUp;