import { Container } from "@mui/material";
import Form from "./Form";
import "./login.css";

const Login = ({ login }) => {
  return (
    <Container
      maxWidth="xl"
      className="container-login"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form login={login} />
      <div className="container-social d-flex mt-3">
        <a href="mailto:diiegor98@gmail.com"><i className="bi bi-envelope"></i></a>
        <a href="https://diegorodriguez.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="bi bi-person-circle"></i></a>
        <a href="https://www.linkedin.com/in/diiegorodriguez/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/Diiegor98" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
      </div>
    </Container>
  );
};

export default Login;
