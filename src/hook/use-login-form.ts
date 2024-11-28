import { Formstype } from "@/@types/login-types"
import { AuthSchema, AuthSchemaType } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export const useLoginForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AuthSchemaType>({
    resolver: zodResolver(AuthSchema),
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const handleSubmitData = async (data: AuthSchemaType) => {
    console.log("Dados enviados:", data)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Login efetuado com sucesso!")
    reset()
  }

  return { handleSubmit, handleSubmitData, register, errors, isSubmitting }
}
