import React from "react";
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  useMediaQuery
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import PhoneInTalkTwoToneIcon from "@material-ui/icons/PhoneInTalkTwoTone";
import icon from "../../assets/img/icon.svg";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
    width: "100%",
    height: "10px",
    position: "absolute",
    top: "0",
    zIndex: "9"
  },
  nav: {
    height: "100%"
  },
  flexBox: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center"
  },
  logo: {
    width: "70px",
    height: "70px",
    [theme.breakpoints.down("xs")]: {
      width: "40px",
      height: "40px"
    }
  },
  navText: {
    textAlign: "right"
  },
  active: {
    fontSize: "15px",
    color: theme.palette.secondary.dark,
    display: "inline-block",
    verticalAlign: "middle"
  }
}));

const quotes = [
  "I create websites that SELL .",
  "I create websites of your DREAMS",
  "I create of websites that SMELLS"
];

function Navigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const toggle = useMediaQuery(theme.breakpoints.down("xs"));
  const toggle2 = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <Container
        maxWidth={theme.breakpoints.down("sm") ? "lg" : "xl"}
        className={classes.nav}
      >
        <Grid container alignItems="center" className={classes.nav}>
          <Grid item xs={6}>
            <div className={classes.flexBox}>
              <img src={icon} alt="logo" className={classes.logo} />
              &nbsp;
              <Typography
                variant="body2"
                style={{ color: "#fff", fontWeight: "bold" }}
              >
                {!toggle ? (
                  <span>{quotes[Math.floor(Math.random() * 3) + 1 - 1]}</span>
                ) : (
                  <span className="hidetext">Coder • Designer</span>
                )}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.navText}>
            <span style={{ marginRight: "5px" }}>
              <FiberManualRecordIcon className={classes.active} />{" "}
              <span
                className="hidetext"
                style={{ color: "#fff", fontSize: "15px" }}
              >
                Online
              </span>
            </span>
            {!toggle2 && (
              <>
                <span style={{ marginRight: "5px" }}>
                  <EmailTwoToneIcon className={classes.active} />{" "}
                  <span
                    className="hidetext"
                    style={{ color: "#fff", fontSize: "15px" }}
                  >
                    abrijwasi1@gmail.com
                  </span>
                </span>
                <span style={{ marginRight: "5px" }}>
                  <PhoneInTalkTwoToneIcon className={classes.active} />{" "}
                  <span
                    className="hidetext"
                    style={{ color: "#fff", fontSize: "15px" }}
                  >
                    +91-8126094637
                  </span>
                </span>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Navigation;
