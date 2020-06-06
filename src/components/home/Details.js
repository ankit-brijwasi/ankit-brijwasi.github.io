import React from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Container,
  useTheme,
  makeStyles,
  withStyles,
  Grid
} from "@material-ui/core";
import PropTypes from "prop-types";
import AboutPic from "../../assets/img/about-pic.png";
import Dots from "../../assets/img/dots-1.png";
import Group26 from "../../assets/img/Group-26.png";

const CustomTab = withStyles(theme => ({
  root: {
    padding: "20px 25px",
    color: "rgb(190, 190, 190)",
    "&:hover": {
      color: "#404040",
      backgroundColor: theme.palette.primary.main,
      transition: "0.2s ease"
    },
    flexGrow: 1,
    "&$selected": {
      color: "#404040",
      backgroundColor: theme.palette.primary.main,
      transition: "0.2s ease"
    },
    "&:focus": {
      color: "#404040"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 20px"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 15px"
    }
  },
  selected: {}
}))(props => <Tab {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "-1px",
    zIndex: "8",
    position: "relative",
    marginBottom: "10rem"
  },
  appBar: {
    backgroundColor: theme.palette.default.main,
    width: "100%",
    boxShadow: "none"
  },
  imgContainer: {
    position: "relative"
  },
  img: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "",
      left: "",
      transform: ""
    }
  },
  text1: {
    fontWeight: "600",
    color: theme.palette.primary.main,
    margin: "20px 0px"
  },
  text2: {
    fontFamily: '"playfair display", serif',
    color: "#fff",
    margin: "20px 0px"
  },
  text3: {
    color: "#fff",
    margin: "20px 0px"
  },
  text4: {
    color: "#fff",
    margin: "20px 0px"
  },
  highlight: {
    color: theme.palette.primary.main
  },
  dotsImg1: {
    position: "absolute",
    top: "20%",
    right: "40px",
    zIndex: "-1",
    transform: "scale(0.8) rotate(90deg)"
  },
  dotsImg2: {
    position: "absolute",
    bottom: "-18.6%",
    left: "4.9%",
    zIndex: "-1",
    transform: "scale(1) rotate(360deg)"
  },
  group26: {
    position: "absolute",
    bottom: "-10%",
    right: "40px",
    transform: "scale(1) rotate(130deg)"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`details-tabpanel-${index}`}
      aria-labelledby={`details-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          p={4}
          style={{
            height: "100%",
            minHeight: "350px",
            backgroundColor: "#313552",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center"
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `details-tab-${index}`,
    "aria-controls": `details-tabpanel-${index}`
  };
}

function Details(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Container
          maxWidth={theme.breakpoints.down("sm") ? "lg" : "xl"}
          style={{ height: "100%" }}
        >
          <AppBar position="static" className={classes.appBar}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              aria-label="details about me tabs"
            >
              <CustomTab
                className={classes.tab}
                label="about"
                {...a11yProps(0)}
              />
              <CustomTab
                className={classes.tab}
                label="skills"
                {...a11yProps(1)}
              />
              <CustomTab
                className={classes.tab}
                label="service"
                {...a11yProps(2)}
              />
              <CustomTab
                className={classes.tab}
                label="interview"
                {...a11yProps(3)}
              />
              <CustomTab
                className={classes.tab}
                label="award"
                {...a11yProps(4)}
              />
              <CustomTab
                className={classes.tab}
                label="exhibition"
                {...a11yProps(5)}
              />
            </Tabs>
          </AppBar>{" "}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} className={classes.imgContainer}>
                <img src={AboutPic} className={classes.img} alt="about me" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" className={classes.text1}>
                  ABOUT ME
                </Typography>
                <Typography variant="h4" className={classes.text2}>
                  Why hire me for your next project?
                </Typography>
                <Typography variant="subtitle2" className={classes.text3}>
                  Meet my startup design agency{" "}
                  <span className={classes.highlight}>Shape Rex</span> Currently
                  I am working at CodeNext as Product Designer. Before that I’ve
                  worked at <span className={classes.highlight}>SpurBee</span>,
                  Dhaka as a UX,{" "}
                  <span className={classes.highlight}>UI Designer</span>.
                </Typography>
                <Typography variant="subtitle2" className={classes.text4}>
                  I love to work in User Experience {"&"} User Interface
                  designing. Because I love to solve the design problem and find
                  easy and better solutions to solve it. I always try my best to
                  make good user interface with the best user experience. I have
                  been working as a Visual designer from.
                </Typography>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            Item Six
          </TabPanel>
        </Container>
        <img src={Dots} alt="Dots" className={classes.dotsImg1} />
        <img src={Dots} alt="Dots" className={classes.dotsImg2} />
        <img src={Group26} alt="Divider" className={classes.group26} />
      </div>
    </>
  );
}

export default Details;
