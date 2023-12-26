//Componentes
import UserProvider from "./components/contexts/UserProvider";
import NavBar from "./components/navbar/NavBar";
import Carousel from "./components/carousel/Carousel";
import CardsContainer from "./components/cards/CardsContainer";
import Login from "./components/login/Login";
//Hooks
import { useState } from "react";
//MUI
import { Divider } from "@mui/material";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <UserProvider>
      {login ? (
        <div>
          <NavBar />
          <Carousel />
          <Divider sx={{margin: 1}}/>
          <CardsContainer />
        </div>
      ) : (
        <Login login={setLogin} />
      )}
    </UserProvider>
  );
}

export default App;
