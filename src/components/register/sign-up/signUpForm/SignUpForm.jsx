import './signUpForm.css'
import Button from '../../../common/button/Button';

const SignUpForm = () => {
  return (
    <section className='sign-up-section'>
        <header>
            <h1>Crie sua conta</h1>
            <p>Adicione seus dados abaixo...</p>
        </header>
        <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Telefone"/>
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme a Senha" />
            <Button text="Criar conta" />
        </form>
        <footer>
            <p>Já possui conta? <a href="/login">Log in</a></p>
        </footer>
    </section>
  )
}

export default SignUpForm;