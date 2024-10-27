import './signUpForm.css'
import Button from '../../../common/button/Button';

const SignUpForm = () => {
  return (
    <section className='sign-up-section'>
        <header>
            <h1>Crie sua conta</h1>
            <p>Já possui conta? <a href="/login">Login</a></p>
        </header>
        <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Telefone"/>
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme a Senha" />

            <div className='terms-container'>
              <input type="checkbox" id="terms" name="terms" />
              <label for="terms">
                  I agree with 
                  <a href="/privacy-policy" target="_blank">Privacy Policy</a> 
                  and 
                  <a href="/terms-of-use" target="_blank">Terms of Use</a>
              </label>
            </div>

            <Button text="Criar conta" />
        </form>
    </section>
  )
}

export default SignUpForm;