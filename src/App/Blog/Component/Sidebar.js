import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import withStore from "../../../Components/Unstated/withStore";
import BlogStore from "../Store/blogStore";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    position: "sticky",
    backgroundColor: theme.palette.grey[200],
    minHeight: "300px",
    maxHeight: "400px",
    overflowY: "auto",
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

function Sidebar({
  contents,
  title,
  blogStore: {
    state: { activeBlogContent },
    setActiveContent,
  },
}) {
  const classes = useStyles();
  const [activeContent, setactiveContent] = useState(contents[0]);
  useEffect(() => {
    setActiveContent(activeContent);
  }, []);
  const handleContentChange = async (content) => {
    await setActiveContent(content);
    console.log(activeBlogContent);
  };
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        {contents.map((content) => (
          <Link
            display="block"
            variant="body1"
            onClick={() => handleContentChange(content)}
          >
            {content}
          </Link>
        ))}
      </Paper>
      {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link> */}
      {/* ))} */}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

export default withStore([BlogStore])(Sidebar);
