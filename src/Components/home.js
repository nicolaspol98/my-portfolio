import React from "react";
import ReactDOM from "react-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./styles.css";

export default function Home() {
  return (
    <div className="Home">
      <Grid container className="gridContainer">
        <Grid item xs={9}></Grid>
        <Grid item className="yellowGrid" xs={3}>
          <Button className="pageButton">Home</Button>
          <Button className="pageButton">About me</Button>
          <Button className="pageButton">Projects</Button>
          <Button className="pageButton">Contact me</Button>
        </Grid>
      </Grid>
    </div>
  );
}
