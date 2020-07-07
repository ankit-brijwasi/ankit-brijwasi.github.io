import React from "react";
import { Container, Typography, makeStyles, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ReactIcon from "../../assets/img/react.svg";
import PythonIcon from "../../assets/img/python.png";
import JSIcon from "../../assets/img/js.png";
import DjangoIcon from "../../assets/img/django.webp";
import AWSIcon from "../../assets/img/aws.jpeg";
import MaterialUiIcon from "../../assets/img/material-ui.png";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  subText: {
    color: theme.palette.primary.main,
    textTransform: "uppercase"
  },
  clients: {
    fontFamily: "serif",
    padding: "10px 0px",
    color: "#fff",
    textTransform: "capitalize"
  },
  item: {
    color: "#fff",
    backgroundColor: theme.palette.default.dark,
    margin: "10px 10px 10px 0px",
    padding: "30px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "1px 3px 10px rgba(0, 0, 0, 0.4)",
      transition: "0.3s ease"
    }
  },
  img: {
    maxWidth: "80px",
    width: "100%"
  },
  img1: {
    maxWidth: "71.86px",
    width: "100%"
  },
  desc: {
    marginLeft: "7px",
    paddingTop: "10px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "17px"
    }
  }
}));

function Technologies(props) {
  const classes = useStyles();
  const item1 = [
    {
      src: ReactIcon,
      alt: "react js",
      clss: classes.img,
      text1: "Front-end using React",
      text2: "React JS"
    },
    {
      src: DjangoIcon,
      alt: "Django",
      clss: classes.img1,
      text1: "Back-end and API using Django",
      text2: "Django"
    }
  ];
  const item2 = [
    {
      src: PythonIcon,
      alt: "Python",
      clss: classes.img,
      text1: "Logics & Algorithims using Python",
      text2: "Python"
    },
    {
      src: JSIcon,
      alt: "Javascript",
      clss: classes.img,
      text1: "Front-end in JavaScript",
      text2: "JavaScript"
    }
  ];
  const item3 = [
    {
      src: MaterialUiIcon,
      alt: "Material UI",
      clss: classes.img,
      text1: "UI/UX design using Material UI",
      text2: "Material UI"
    },
    {
      src: AWSIcon,
      alt: "AWS",
      clss: classes.img,
      text1: "DevOps in AWS",
      text2: "AWS"
    }
  ];

  const theme = useTheme();
  return (
    <Container maxWidth={theme.breakpoints.down("sm") ? "lg" : "xl"}>
      <Typography className={classes.subText} variant="subtitle2">
        My expertise
      </Typography>
      <Typography className={classes.clients} variant="h3">
        experience
      </Typography>
      <Grid container>
        {item1.map(element => (
          <Grid item xs={12} sm={12} md={6} key={element.alt}>
            <div className={classes.item}>
              <Grid container>
                <Grid item xs={2}>
                  <img
                    src={element.src}
                    className={element.clss}
                    alt={element.alt}
                  />
                </Grid>
                <Grid item xs={10}>
                  <div className={classes.desc}>
                    <Typography variant="body2" className={classes.subText}>
                      {element.text1}
                    </Typography>
                    <Typography variant="h5">{element.text2}</Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        {item2.map(element => (
          <Grid item xs={12} sm={12} md={6} key={element.alt}>
            <div className={classes.item}>
              <Grid container>
                <Grid item xs={2}>
                  <img
                    src={element.src}
                    className={element.clss}
                    alt={element.alt}
                  />
                </Grid>
                <Grid item xs={10}>
                  <div className={classes.desc}>
                    <Typography variant="body2" className={classes.subText}>
                      {element.text1}
                    </Typography>
                    <Typography variant="h5">{element.text2}</Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        {item3.map(element => (
          <Grid item xs={12} sm={12} md={6} key={element.alt}>
            <div className={classes.item}>
              <Grid container>
                <Grid item xs={2}>
                  <img
                    src={element.src}
                    className={element.clss}
                    alt={element.alt}
                  />
                </Grid>
                <Grid item xs={10}>
                  <div className={classes.desc}>
                    <Typography variant="body2" className={classes.subText}>
                      {element.text1}
                    </Typography>
                    <Typography variant="h5">{element.text2}</Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
    </Container>
  );
}

export default Technologies;
