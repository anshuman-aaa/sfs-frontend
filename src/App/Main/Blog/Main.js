import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;
  console.log(posts);

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {/* {Object.entries(posts).forEach(([topic, content]) => ( */}
      <Typography variant="h6">History</Typography>

      <Markdown className={classes.markdown} key={posts.history.substring(0, 40)}>
        {posts.history}
      </Markdown>
      {/* ))} */}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.object,
  title: PropTypes.string,
};
