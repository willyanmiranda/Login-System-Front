import { React, useReducer } from 'react'
import './signUpForm.css'
import Button from '../../../common/button/Button';
import { register } from '../../../../api/authService';

const initialValues = {
  name: '',
  username: '',
  email: '',
  phone_number: '',
  password: '',
  confirm_password: '',
}

const reducer = (state, action) => {
  switch (action.type) {
      case 'SET_FIELD':
          return {
              ...state,
              [action.field]: action.value
          }
      case 'SET_USERNAME': 
          return {
              ...state,
              username: action.value
          }
      default:
          return state
  }
}

const SignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const handleChange = (e) => {
      const { name, value } = e.target;
      
      dispatch({ type: 'SET_FIELD', field: name, value });

      if (name === 'name') {
          dispatch({ type: 'SET_USERNAME', value });
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmptyField = Object.values(state).some((value) => value === '');
    if (isEmptyField) {
      console.error("Todos os campos devem ser preenchidos");
      return;
    }

    if (state.password !== state.confirm_password) {
      console.error("As senhas não batem");
      return;
    }

    const userData = await register(state);
    console.log('Usuário registrado:', userData);
    console.log(state);
  }

  return (
    <section className='sign-up-section'>
        <header>
            <h1>Crie sua conta</h1>
            <p>Já possui conta? <a href="/login">Login</a></p>
        </header>
        <form>
            <input onChange={handleChange} name='name' value={state.name} type="text" placeholder="Nome" />
            <input onChange={handleChange} name='email' value={state.email} type="email" placeholder="Email" />
            <input onChange={handleChange} name='phone_number' value={state.phone_number} type="tel" placeholder="Telefone"/>
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

            <Button handleClick={handleSubmit} text="Criar conta" />
        </form>
    </section>
  )
}

export default SignUpForm;
