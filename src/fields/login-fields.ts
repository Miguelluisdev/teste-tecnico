import { Formstype } from "../@types/login-types"

export const LoginFields: Formstype[] = [
  {
    name: "email",
    type: "email",
    placeholder: "Digite seu e-mail",
    label: "E-mail",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Digite sua senha",
    label: "Senha",
  },
]
