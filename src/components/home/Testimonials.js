import React from "react";
import {
  Container,
  makeStyles,
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Grid
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Navdeep from "../../assets/img/navdeep.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  card: {
    backgroundColor: theme.palette.default.light,
    color: theme.palette.custom.main,
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: "5px",
    marginRight: "20px"
  },
  content: {
    padding: "25px",
    textAlign: "justify"
  },
  avatar: {
    width: "100%",
    height: "100%",
    maxWidth: "85px",
    maxHeight: "85px",
    backgroundColor: "#fff",
    objectFit: "cover"
  },
  name: {
    fontFamily: "serif",
    marginBottom: "-0.4em"
  },
  role: {
    fontFamily: "calibri",
    padding: 0,
    color: theme.palette.primary.main
  },
  text: {
    fontStyle: "oblique",
    fontWeight: "300"
  },
  grid: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px"
    }
  },
  subText: {
    color: theme.palette.primary.main,
    textTransform: "uppercase"
  },
  clients: {
    fontFamily: "serif",
    padding: "10px 0px",
    color: "#fff",
    textTransform: "capitialize"
  }
}));

function Testimonials(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container
      className={classes.root}
      maxWidth={theme.breakpoints.down("sm") ? "lg" : "xl"}
    >
      <br />
      <br />
      <br />
      <Typography className={classes.subText} variant="subtitle2">
        Testimonials
      </Typography>
      <Typography className={classes.clients} variant="h3">
        Clients
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={5} md={6} className={classes.grid}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Box pt={2} pb={2}>
                <Grid
                  container
                  spacing={1}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <Avatar
                      alt="Rajesh Joshi"
                      src={Navdeep}
                      className={classes.avatar}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h6" className={classes.name}>
                      Rajesh Joshi
                    </Typography>
                    <Typography variant="subtitle2" className={classes.role}>
                      Product designer at medic.to
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Typography variant="body2" className={classes.text}>
                We are motivated by the satisfaction of our clients. Put your
                trust in us and share in our growth Asset Management is made up
                of a team of expert, committed and experienced people with a
                passion for financial markets. Our goal is to achieve
                continuous.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5} md={6} className={classes.grid}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Box pt={2} pb={2}>
                <Grid
                  container
                  spacing={1}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <Avatar
                      alt="Navdeep Mishra"
                      src={Navdeep}
                      className={classes.avatar}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h6" className={classes.name}>
                      Navdeep Mishra
                    </Typography>
                    <Typography variant="subtitle2" className={classes.role}>
                      Digital marketer at sketchframe
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Typography variant="body2" className={classes.text}>
                We are motivated by the satisfaction of our clients. Put your
                trust in us and share in our growth Asset Management is made up
                of a team of expert, committed and experienced people with a
                passion for financial markets. Our goal is to achieve
                continuous.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
    </Container>
  );
}

export default Testimonials;
