import React from "react";
//import "./assets/css/style.css";
import { Container, Typography } from "@material-ui/core";
import Map from "./map/Map";

export default function App() {
  return (
    <Container disableGutters>
      <Typography variant="h3" align="center">
        <Map />
      </Typography>
    </Container>
  );
}