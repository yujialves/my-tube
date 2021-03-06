import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import { Grid, TextField } from "@material-ui/core";
import Link from "next/link";

const SignUp = () => {
  const classes = useStyles();
  return (
    <Layout title="会員登録">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography
                align="center"
                className={classes.title}
                color="textPrimary"
                variant="h1"
                component="h1"
                gutterBottom
              >
                MyTube
              </Typography>
              <Grid container justify="center" alignItems="center">
                <TextField
                  placeholder="ユーザー名"
                  InputProps={{
                    classes: {
                      input: classes.input,
                    },
                  }}
                  className={classes.textField}
                />
              </Grid>
              <Grid container justify="center" alignItems="center">
                <TextField
                  placeholder="パスワード"
                  type="password"
                  InputProps={{
                    classes: {
                      input: classes.input,
                    },
                  }}
                  className={classes.textField}
                />
              </Grid>
              <Grid container justify="center" alignItems="center">
                <TextField
                  placeholder="パスワードの確認"
                  type="password"
                  InputProps={{
                    classes: {
                      input: classes.input,
                    },
                  }}
                  className={classes.textField}
                />
              </Grid>
              <Grid container justify="center" alignItems="center">
                <Button className={classes.button}>登録</Button>
              </Grid>
              <Grid container justify="center" alignItems="center">
                <Link href="/login">
                  <a className={classes.link}>会員の方はこちら</a>
                </Link>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: process.browser ? window.innerHeight - 100 : undefined,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    letterSpacing: 1,
    padding: 20,
    [theme.breakpoints.up("sm")]: {
      fontSize: 22,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 26,
    },
  },
  textField: {
    marginBottom: 20,
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      width: "74%",
    },
    [theme.breakpoints.up("md")]: {
      width: "67%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },
  input: {
    fontSize: 18,
    [theme.breakpoints.up("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 22,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 24,
    },
  },
  button: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    marginTop: 20,
    marginBottom: 40,
    fontWeight: "bold",
    fontSize: 14,
    width: "80%",
    height: 42,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
      width: "74%",
      height: 44,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
      width: "67%",
      hight: 46,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 20,
      width: "60%",
      height: 48,
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default SignUp;
