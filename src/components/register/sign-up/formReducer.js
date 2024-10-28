export const initialValues = {
    name: '',
    username: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: '',
};
  
export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FIELD':
        return { ...state, [action.field]: action.value };
      case 'SET_USERNAME':
        return { ...state, username: action.value };
      default:
        return state;
    }
};