import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import Markdown from "./Markdown";
import withStore from "../../../Components/Unstated/withStore";
import BlogStore from "../Store/blogStore";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

function Main({
  posts,
  title,
  blogStore: {
    state: { activeBlogContent },
  },
}) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {/* {Object.entries(posts).forEach(([topic, content]) => ( */}
      <Typography variant="h6">{activeBlogContent}</Typography>

      <Markdown
        className={classes.markdown}
        key={posts.history.substring(0, 40)}
      >
        {posts[activeBlogContent]}
      </Markdown>
      {/* ))} */}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.object,
  title: PropTypes.string,
};

export default withStore([BlogStore])(Main);
