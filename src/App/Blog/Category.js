import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";

const BlogList = gql`
  query findBlogbyCat($categoryId: Int!) {
    findBlogbyCat(categoryId: $categoryId) {
      blogTitle
      _id
    }
  }
`;

function CategoryList(props) {
  const classes = useStyles();
  return (
    <Query
      query={BlogList}
      variables={{ categoryId: Number(props.match.params.id) }}
    >
      {({ loading, error, data }) => {
        if (loading) return <h2>Loading..</h2>;
        if (error) return <h2>Error : {error.message}</h2>;

        return (
          <div>
            <Grid
              container
              className={classes.root}
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {data.findBlogbyCat.map((blog, index) => (
                <Grid item xs={12} sm={6} md={3} style={{ margin: "0 auto" }}>
                  <Grid container justify="center" spacing={2}>
                    <Grid key={"blog" + index} item>
                      <Card className={classes.card}>
                        <CardHeader
                          avatar={
                            <Avatar
                              aria-label="recipe"
                              className={classes.avatar}
                            >
                              R
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title={blog.blogTitle}
                          subheader={blog.blogTitle}
                        />
                        <Link to={`/blog/${blog._id}`}>
                          <CardMedia
                            className={classes.media}
                            image={"https://picsum.photos/200/300"}
                            title="Paella dish"
                          />
                        </Link>
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                          
                          <IconButton
                            style={{"marginLeft": "auto"}}
                            aria-label="show more"
                          >
                            <Link to={`/blog/${blog._id}`}>
                            <ArrowForwardIcon />
                            </Link>
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </div>
        );
      }}
    </Query>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default CategoryList;
