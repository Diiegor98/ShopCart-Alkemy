import { Container } from "@mui/material";
import Form from "./Form";
import "./login.css";

const Login = ({login}) => {
  return (
    <Container
      maxWidth="xl"
      className="container-login"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Form login={login}/>
    </Container>
  );
};

export default Login;
