import React from 'react';
import Button from '../../../common/button/Button';
import FormFields from '../formFields/FormFields';
import './SignUpForm.css'

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
    <form onSubmit={handleSubmit}>
      <FormFields state={state} handleChange={handleChange} />
      <Button text="Criar conta" type="submit" />
    </form>
  );
};

export default SignUpForm;
