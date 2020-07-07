import React from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90.5%",
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      margin: "auto"
    }
  },
  flexContainer: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "start",
    justifyContent: "start"
  },
  wrapper: {
    alignSelf: "flex-end",
    [theme.breakpoints.up("sm")]: {
      marginRight: "30px"
    }
  },
  subText: {
    color: theme.palette.primary.main,
    textTransform: "uppercase"
  },
  text: {
    fontFamily: "serif",
    padding: "10px 0px",
    color: "#fff",
    textTransform: "capitialize"
  },
  card: {
    width: "100%",
    maxWidth: "500px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%"
    },
    borderRadius: "13px 13px 0px 0px",
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
    "&:hover": {
      transition: "0.5s ease-in-out",
      borderBottom: `4px solid ${theme.palette.primary.dark}`
    }
  },
  controller: {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
    cursor: "pointer",
    border: "none",
    padding: "0",
    "&:focus": {
      outline: "none"
    },
    marginBottom: "8px"
  },
  cardContent: {
    backgroundColor: "#313552"
  },
  subtitle: {
    color: theme.palette.primary.main,
    fontFamily: "calibri",
    padding: "20px 0px 10px 0px"
  },
  title: {
    fontFamily: "serif",
    color: "#fff",
    fontWeight: 500,
    padding: "10px 0px 10px 0px"
  },
  desc: {
    color: "#fff",
    fontWeight: 300,
    padding: "10px 0px 10px 0px"
  },
  btnContainer: {
    padding: "25px 0px 10px 0px"
  },
  btn: {
    borderColor: theme.palette.primary.main,
    borderRadius: 0,
    color: theme.palette.primary.main,
    fontSize: "13px",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#404040"
    }
  }
}));
const params = {
  slidesPerView: 3.5,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1280: {
      slidesPerView: 3.5,
      spaceBetween: 30
    },
    960: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 50
    }
  }
};

function Projects(props) {
  const classes = useStyles();
  const [swiper, setSwiper] = React.useState(null);
  const [state, setState] = React.useState({ begin: true, end: false });

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
    swiper.isEnd
      ? setState({ begin: false, end: true })
      : setState({ begin: false, end: false });
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
      swiper.isBeginning
        ? setState({ end: false, begin: true })
        : setState({ begin: false, end: false });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.flexContainer}>
        <Typography className={classes.subText} variant="subtitle2">
          my client
        </Typography>
        <Typography className={classes.text} variant="h3">
          Projects
        </Typography>
        <div className={classes.wrapper}>
          <button
            disabled={state.begin}
            className={classes.controller}
            onClick={goPrev}
            style={state.begin ? { opacity: 0.4 } : { opacity: 1 }}
          >
            <ArrowBackIos
              style={{
                fontSize: "18px"
              }}
            />
          </button>
          <button
            disabled={state.end}
            className={classes.controller}
            onClick={goNext}
            style={state.end ? { opacity: 0.4 } : { opacity: 1 }}
          >
            <ArrowForwardIos
              style={{
                fontSize: "18px"
              }}
            />
          </button>
        </div>
      </div>
      <Swiper getSwiper={setSwiper} {...params}>
        {[1, 2, 3, 4, 5, 6, 7].map(key => (
          <Card className={classes.card} key={key}>
            <CardMedia
              component="img"
              src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/work-1.jpg"
            />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.subtitle} variant="subtitle2">
                API, INTERIOR, WEB
              </Typography>
              <Typography className={classes.title} variant="h5">
                Project Management Admin Panel App
              </Typography>
              <Typography className={classes.desc} variant="body1">
                Discover Business Strategy A thoughtful discovery process
              </Typography>
              <div className={classes.btnContainer}>
                <Button variant="outlined" className={classes.btn}>
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </Swiper>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Projects;
