import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import NavCart from "./navcart/NavCart";

export default function NavBar() {
  const [name] = useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1, mb: 8 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img src="https://cdn-icons-png.flaticon.com/128/1710/1710433.png?semt=ais" alt="Logo" width={"40px"} />
            <Typography
              variant="h6"
              component="span"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              ShopCart | DR
            </Typography>
          </Typography>
          <div className="d-flex align-items-center">
            <NavCart />
            <Typography variant="h6" component="span" sx={{ ml: 4 }}>
              ¡Hola {name}!
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
