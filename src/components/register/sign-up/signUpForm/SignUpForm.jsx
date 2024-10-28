import React from 'react';
import Button from '../../../common/button/Button';
import FormFields from '../formFields/FormFields';
import './signUpForm.css'

const SignUpForm = ({ state, dispatch, handleSubmit }) => {
  console.log(state)
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });

    if (name === 'name') {
      dispatch({ type: 'SET_USERNAME', value });
    }
  };

  return (
    <form>
      <FormFields state={state} handleChange={handleChange} />
      <Button handleClick={handleSubmit} text="Criar conta" />
    </form>
  );
};

export default SignUpForm;
