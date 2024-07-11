import { Header } from "../header";
import { Footer } from "../footer";
import { UserCheck } from '@phosphor-icons/react';
import { Envelope, Password } from '@phosphor-icons/react/dist/ssr';
import { useForm } from 'react-hook-form';

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div className="w-[1200px] h-[700px] flex mx-auto m-10">
        <div className="w-1/2 h-full bg-sky-blue-200"></div>

     
        <div className="w-1/2 h-full bg-white border">
        <div className="signup-container">
      <h1>Criar conta</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <label htmlFor="fullName"><UserCheck /> Nome completo:</label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", {
              required: "Nome completo é obrigatório",
              minLength: { value: 2, message: "Nome completo deve ter no mínimo 2 caracteres" }
            })}
          />
          {errors.fullName && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>{errors.fullName.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email"><Envelope /> Endereço de email:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Endereço de email inválido"
              }
            })}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password"><Password/> Senha:</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: { value: 8, message: "Senha deve ter no mínimo 8 caracteres" }
            })}
          />
          {errors.password && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>{errors.password.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword"><Password/> Confirmar Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirmação de senha é obrigatória",
              validate: value => value === watch('password') || "As senhas não correspondem"
            })}
          />
          {errors.confirmPassword && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>{errors.confirmPassword.message}</span>}
        </div>

        <button type="submit">Inscreva-se</button>
      </form>

      <p>Já tens uma conta? <a href="/login">INICIAR A SESSÃO</a></p>
    </div>
        
        </div>
      </div>
      <Footer />
    </>
  );
};
