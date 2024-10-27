import './signInForm.css'
import Button from '../../../common/button/Button';

const SignInForm = () => {
  return (
    <section className='sign-in-section'>
        <header>
            <h1>Login</h1>
            <p>Não possui conta? <a href="/register">Cadastre-se</a></p>
        </header>
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />

            <div className='terms-container'>
              <label for="terms">
                  <a href="/terms-of-use" target="_blank">Esqueceu a senha?</a>
              </label>
            </div>

            <Button text="Criar conta" />
        </form>
    </section>
  )
}

export default SignInForm;