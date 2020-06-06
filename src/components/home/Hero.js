import React from "react";
import { Container, makeStyles, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { motion } from "framer-motion";
import Group31 from "../../assets/img/Group-31.png";
import Group26 from "../../assets/img/Group-26.png";
import Rect8 from "../../assets/img/Rectangle-8.png";
import Rect7 from "../../assets/img/Rectangle-7.png";
import Rect9 from "../../assets/img/Rectangle-9.png";
import Path25 from "../../assets/img/Path-25.png";
import HeroImg from "../../assets/img/hero_1.png";

const useStyles = makeStyles(theme => ({
  heroWrapper: {
    height: "100%"
  },
  group1: {
    zIndex: -1,
    position: "absolute",
    top: "45px",
    left: "35px"
  },
  group2: {
    zIndex: -1,
    position: "absolute",
    right: "55px",
    animation: "MoveUpDown 18s linear infinite"
  },
  group3: {
    zIndex: -1,
    position: "absolute",
    top: "50%",
    left: "45%",
    animation: "MoveLeftRight 16s linear infinite",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  group4: {
    zIndex: -1,
    position: "absolute",
    top: "50%",
    right: "5%",
    animation: "MoveRightLeft 16s linear infinite",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  group5: {
    zIndex: -1,
    position: "absolute",
    top: "50%",
    left: "55%",
    animation: "circlelg 25s normal infinite linear;",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  group6: {
    zIndex: -1,
    position: "absolute",
    left: "45%",
    top: "53%",
    animation: "MoveUpDownDiagonal 11s linear infinite"
  },
  group7: {
    zIndex: -1,
    position: "absolute",
    left: "55%",
    top: "50%",
    animation: "MoveUpDownDiagonal2 9s linear infinite",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  group8: {
    zIndex: -1,
    position: "absolute",
    right: "13%",
    top: "88px"
  },
  heroText2: {
    color: theme.palette.custom.main,
    fontFamily: '"playfair display", serif'
  },
  heroImg: {
    display: "block",
    width: "100%",
    height: "100%",
    maxWidth: "600px",
    maxHeight: "600px",
    objectFit: "contain",
    transform: "scale(1.2) translateY(3%)",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(1.1) translateY(7%)",
      maxHeight: "415px",
      maxWidth: "415px",
      margin: "auto",
      zIndex: "-1"
    }
  },
  textContainer: {
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      width: "80%",
      marginTop: "auto",
      marginBottom: "-2em"
    }
  },
  imgContainer: {
    alignSelf: "flex-end",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      alignSelf: "center"
    },
    [theme.breakpoints.down("xs")]: {
      alignSelf: "flex-end"
    }
  }
}));

function Hero(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <motion.img
        initial={{ rotateZ: -0 }}
        animate={{ rotateZ: -360 }}
        transition={{
          ease: "linear",
          duration: 18,
          loop: Infinity
        }}
        alt="img1"
        src={Group31}
        className={classes.group1}
      />
      <img src={Group31} alt="img2" className={classes.group2} />
      <img src={Group26} alt="img3" className={classes.group3} />
      <img src={Group26} alt="img4" className={classes.group4} />
      <img alt="img5" src={Rect8} className={classes.group5} />
      <img alt="img6" src={Rect7} className={classes.group6} />
      <img alt="img7" src={Rect9} className={classes.group7} />
      <motion.img
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{
          ease: "linear",
          duration: 11,
          loop: Infinity
        }}
        alt="img8"
        src={Path25}
        className={classes.group8}
      />

      <Container
        maxWidth={theme.breakpoints.down("sm") ? "lg" : "xl"}
        style={{ height: "100%" }}
      >
        <Grid container style={{ height: "100%" }} alignItems="center">
          <Grid item xs={12} sm={6} className={classes.textContainer}>
            <Typography variant="h4">Hello, I'm</Typography>
            <Typography variant="h1" className={classes.heroText2}>
              Ankit
            </Typography>
            <Typography variant="h1" className={classes.heroText2}>
              Brijwasi
            </Typography>
            <Typography variant="h5" className={classes.heroText3}>
              <strong>{"{"}</strong>{" "}
              <small style={{ color: "#fff" }}>full-stack developer</small>{" "}
              <strong>{"}"}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.imgContainer}>
            <img
              className={classes.heroImg}
              alt="Ankit Brijwasi"
              src={HeroImg}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Hero;
