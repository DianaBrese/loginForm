import logo from "../images/logo.svg";
import Form from "./Form";
import logIn from "../images/log-in.svg";
import emailImg from "../images/mail.svg";
import "./FormBody.css";
import sideImg from "../images/side-image.jpg";

function FormBody() {
  return (
    <div className="fullContainer">
      <div className="mainContainer">
        <div className="logoBlock">
          <img src={logo} />
        </div>

        <div className="styledBlockContainer">
          <div className="blockContainer">
            <div className="titleContainer">
              <div className="loginTitle">
                <img src={logIn} />

                <h3>Faça seu login</h3>
              </div>

              <p>Entre com suas informações de cadastro.</p>
            </div>

            <div className="inputContainer">
              <Form
                name="E-mail"
                type="email"
                image={emailImg}
                placeholder="Digite seu e-mail"
              />
              <Form
                name="Senha"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>

            <div className="rememberContainer">
              <div>
                <input
                  type="checkbox"
                  id="lembrar"
                  className="checkmark"
                ></input>
                <label for="lembrar">Lembre-me</label>
              </div>

              <p>Esqueci minha senha</p>
            </div>

            <button className="loginButton">ENTRAR</button>

            <p className="register">
              {" "}
              Não tem uma conta?
              <span> Registre-se</span>
            </p>
          </div>
        </div>
      </div>

      <div className="sideImage">
        <img src={sideImg} />
      </div>
    </div>
  );
}

export default FormBody;
