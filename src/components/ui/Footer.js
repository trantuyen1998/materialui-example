import { Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import footerAdornment from "../../assets/FooterAdornment.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },

  link: {
    fontSize: "0.7rem",
    fontFamily: "arial",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    width: "4em",
    height: "4em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
      height: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6rem",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
      marginTop: "-3rem"
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/"
                item
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Services
              </Grid>
              <Grid item className={classes.link}>
                Custom Software development
              </Grid>
              <Grid item className={classes.link}>
                Mobile app development
              </Grid>
              <Grid item className={classes.link}>
                Website development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                The Revolution
              </Grid>
              <Grid item className={classes.link}>
                Vision
              </Grid>
              <Grid item className={classes.link}>
                Technology
              </Grid>
              <Grid item className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                About us
              </Grid>
              <Grid item className={classes.link}>
                History
              </Grid>
              <Grid item className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        alt="adornment"
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://facebook.com"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
        >
          <img alt="facebook" src={facebook} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://facebook.com"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
        >
          <img alt="facebook" src={twitter} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://facebook.com"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
        >
          <img alt="facebook" src={instagram} />
        </Grid>
      </Grid>
    </footer>
  );
}
