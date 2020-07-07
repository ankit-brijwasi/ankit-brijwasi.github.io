import React from "react";
import Navigation from "../navigation";
import { makeStyles, Divider } from "@material-ui/core";
import Group27 from "../../assets/img/Group-27.png";
import Hero from "./Hero";
import Details from "./Details";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Technologies from "./Technologies";

const useStyles = makeStyles(theme => ({
  root: {
    scrollSnapType: "y mandatory"
  },
  child1: {
    position: "relative",
    scrollSnapAlign: "center"
  },
  child2: {
    position: "relative",
    scrollSnapAlign: "center",
    backgroundColor: theme.palette.default.main
  },
  section: {
    color: theme.palette.primary.main,
    width: "100%",
    backgroundImage: `url(${Group27})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
    position: "relative",
    height: "100vh"
  }
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.child1}>
        <section className={classes.section}>
          <Navigation />
          <Hero />
        </section>
      </div>
      <Divider style={{ backgroundColor: "rgba(252,252,252,.09)" }} />
      <div className={classes.child1}>
        <Details />
      </div>
      <div className={classes.child1}>
        <Projects />
      </div>
      <Divider style={{ backgroundColor: "rgba(252,252,252,.09)" }} />
      <div className={classes.child2}>
        <Testimonials />
      </div>
      <div className={classes.child2}>
        <Technologies />
      </div>
    </div>
  );
}

export default Home;
