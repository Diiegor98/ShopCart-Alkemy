import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./cards.css";
import { Divider } from "@mui/material";

export default function Cards({ title, price, image, category }) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 200,
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: 3,
      }}
    >
      <img className="card-img" src={image} alt={title} />
      <CardContent>
        <Divider sx={{ mb: 1, p: 0, border: 0.6 }} />
        <Typography
          className="card-title"
          gutterBottom
          variant="body1"
          component="h3"
        >
          {title}
        </Typography>
        <Typography
          className="category-title"
          gutterBottom
          variant="body2"
          component="p"
        >
          {category}
        </Typography>
        <div className="price-cart">
          <Typography
            className="price-title"
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            ${price}
          </Typography>
          <button onClick={() => {alert('Producto agregado')}} type="button" className="btn btn-primary"><i className="bi bi-cart-plus"></i></button>
          
        </div>
      </CardContent>
    </Card>
  );
}
