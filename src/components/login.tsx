"use client"
import { useTogglePassword } from "@/hook/toggle-password"
import { useLoginForm } from "@/hook/use-login-form"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import style from "./home.module.css"

export const Login = () => {
  const {
    isVisible: isPasswordVisible,
    toggleVisibility: togglePasswordVisibility,
  } = useTogglePassword()

  const { errors, handleSubmit, handleSubmitData, isSubmitting, register } =
    useLoginForm()

  return (
    <section className={style.loginContainer}>
      <form
        className={style.loginForm}
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className={style.loginHeader}>
          <h2>Login</h2>
          <p>Seja Bem vindo(a) novamente</p>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email && (
            <span role="alert" className={style.errorInput}>
              {errors.email.message}
            </span>
          )}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Senha</label>
          <div className={style.passwordWrapper}>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={style.passwordToggle}
              aria-label={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
              title={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
            >
              {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <span role="alert" className={style.errorInput}>
              {errors.password.message}
            </span>
          )}
        </div>
        <Link
          href="/forgot"
          rel="noopener noreferrer"
          className={style.forgotLink}
          title="Recuperar sua senha"
        >
          Esqueceu a senha?
        </Link>
        <button
          type="submit"
          className={style.loginButton}
          disabled={isSubmitting}
        >
          {!isSubmitting ? "Logar" : "Entrando..."}
        </button>
        <div className={style.signupLink}>
          <Link href="/sign-up" rel="noopener noreferrer" title="Criar a conta">
            Não possui conta? Criar conta
          </Link>
        </div>

        <div className={style.termsContainer}>
          <span>
            Ao fazer login, você concorda com nossos{" "}
            <Link href="/terms-of-service">Termos de Serviço</Link> e{" "}
            <Link href="/privacy-policy">Política de Privacidade</Link>.
          </span>
        </div>
      </form>
    </section>
  )
}
