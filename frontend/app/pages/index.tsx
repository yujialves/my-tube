import { Button, makeStyles } from "@material-ui/core";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout title="ホーム">
      <h1>こんにちは</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Button variant="contained" className={classes.button}>
        Test
      </Button>
    </Layout>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
}));

export default IndexPage;
