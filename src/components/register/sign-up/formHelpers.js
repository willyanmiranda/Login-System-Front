import { register } from '../../../api/authService';

export const handleSubmit = async (e, state, dispatch) => {
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
};
