import { register } from '../../../api/authService';

export const handleSubmit = async (e, state, dispatchAlert) => {
  e.preventDefault();

  const isEmptyField = Object.values(state).some((value) => value === '');
  if (isEmptyField) {
    dispatchAlert({
      type: 'UPDATE_ALERT',
      payload: { open: true, severity: 'error', message: 'Todos os campos devem ser preenchidos' },
    });
    return;
  }

  if (state.password !== state.confirm_password) {
    dispatchAlert({
      type: 'UPDATE_ALERT',
      payload: { open: true, severity: 'error', message: 'As senhas não batem' },
    });
    return;
  }

  try {
    const userData = await register(state);
    dispatchAlert({
      type: 'UPDATE_ALERT',
      payload: { open: true, severity: 'success', message: 'Usuário registrado com sucesso!' },
    });
    console.log('Usuário registrado:', userData);
  } catch (error) {
    dispatchAlert({
      type: 'UPDATE_ALERT',
      payload: { open: true, severity: 'error', message: 'Erro ao registrar usuário' },
    });
  }
};