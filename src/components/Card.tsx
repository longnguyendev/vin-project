import React, { FC } from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "./Button";
import { Grid } from "@mui/material";

interface CardProps {
  image: string;
}

const Card: FC<CardProps> = ({ image }) => {
  return (
    <MuiCard
      elevation={0}
      sx={{ minWidth: [250, 300, 350, 400], borderRadius: 0 }}
    >
      <CardActionArea>
        <CardMedia component="img" height="252" image={image} alt="VF e34" />
        <CardContent>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: [18, 20, 22, 24],
              color: "#404040",
            }}
          >
            Break the limits together
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              mt: [1, 2, 3],
              mb: [1, 2],
              fontWeight: 400,
              fontSize: [38, 40, 42, 44],
              color: "#101010",
            }}
          >
            VF e34
          </Typography>
          <Divider />
          <Box
            sx={{
              mt: [1, 2],
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: [12, 14, 16],
                  color: "#787878",
                }}
              >
                Verhicle
              </Typography>
              <Typography
                sx={{
                  mt: "4px",
                  fontWeight: 600,
                  fontSize: [18, 20, 22, 24],
                  color: "#101010",
                }}
              >
                SUV
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: [12, 14, 16],
                  color: "#787878",
                }}
              >
                Verhicle
              </Typography>
              <Typography
                sx={{
                  mt: "4px",
                  fontWeight: 600,
                  fontSize: [18, 20, 22, 24],
                  color: "#101010",
                }}
              >
                SUV
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button variant="secondary" sx={{ width: "100%" }}>
              Detail
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Button sx={{ width: "100%" }}>Deposit</Button>
          </Grid>
        </Grid>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
