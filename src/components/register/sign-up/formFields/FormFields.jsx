import React from 'react';
import './FormFields.css'

const FormFields = ({ state, handleChange }) => {
  return (
    <>
      <input onChange={handleChange} name='name' value={state.name} type="text" placeholder="Nome" />
      <input onChange={handleChange} name='email' value={state.email} type="email" placeholder="Email" />
      <input onChange={handleChange} name='phone_number' value={state.phone_number} type="tel" placeholder="Telefone" />
      <input onChange={handleChange} name='password' value={state.password} type="password" placeholder="Senha" />
      <input onChange={handleChange} name='confirm_password' value={state.confirm_password} type="password" placeholder="Confirme a Senha" />

      <div className='terms-container'>
        <input type="checkbox" id="terms" name="terms" />
        <label htmlFor="terms">
          I agree with 
          <a href="/privacy-policy" target="_blank">Privacy Policy</a> 
          and 
          <a href="/terms-of-use" target="_blank">Terms of Use</a>
        </label>
      </div>
    </>
  );
};

export default FormFields;