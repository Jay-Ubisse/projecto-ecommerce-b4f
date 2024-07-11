import { Header } from "../header";
import { Footer } from "../footer";
import { Envelope, LockKey } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const errorStyles = { color: "orange", fontSize: "14px", lineHeight: "18px" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <main>
      <Header />
      <div className="w-[1200px] h-[700px] flex mx-auto m-10">
        <div className="w-1/2 h-full bg-sky-blue-200"></div>

        {/** Trabalhar Aqui **/}
        <div className="w-1/2 h-full bg-white border">
          <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <h2>Iniciar sessão</h2>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "4px" }}>
                  Endereço de email
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid grey",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                >
                  <Envelope style={{ marginLeft: "8px" }} />
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email é obrigatório!",
                      pattern: {
                        value: /^[^@]+@[^@]+\.[^@]+$/,
                        message: "Email inválido!",
                      },
                    })}
                    placeholder="Endereço de email ou nome de usuario"
                    style={{ border: "none", outline: "none", flex: 1 }}
                  />
                </div>
                {errors.email && (
                  <p style={errorStyles}>{errors.email.message}</p>
                )}
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "4px" }}>
                  Password
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                >
                  <LockKey style={{ marginLeft: "8px" }} />
                  <input
                    type="password"
                    {...register("password", {
                      required: "Senha obrigatória!",
                      minLength: {
                        value: 6,
                        message: "A senha deve ter pelo menos 6 caracteres.",
                      },
                    })}
                    placeholder="Palavra-passe"
                    style={{ border: "none", outline: "none", flex: 1 }}
                  />
                </div>
                {errors.password && (
                  <p style={errorStyles}>{errors.password.message}</p>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  id="rememberMe"
                  style={{ marginRight: "8px" }}
                />
                <label htmlFor="rememberMe">Lembrar-me</label>
              </div>
              <div style={{ marginBottom: "16px" }}>
                <Link
                  to="/password-reset"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Esqueceu-se da palavra-passe?
                </Link>
              </div>
              <button
                type="submit"
                style={{
                  marginBottom: "16px",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  background: "black",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Iniciar sessão
              </button>
            </form>
            <div>
              <span>Não é membro? </span>
              <Link
                to="/sign-up"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Iniciar sessão
              </Link>
            </div>
          </div>
        </div>
        {/** Trabalhar Aqui **/}
      </div>
      <Footer />
    </main>
  );
};
