import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
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
            <List className={classes.root}>
              {data.findBlogbyCat.map((blog, index) => (
                  <Link to={`/blog/${blog._id}`}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar className={classes.large}
                        alt="Remy Sharp"
                        src={"https://picsum.photos/200/300"}
                      />
                    </ListItemAvatar>
                    <ListItemText className={classes.mainHeader}
                      primary= {blog.blogTitle}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {blog.blogTitle}
                          </Typography>
                          {
                            blog.description
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  </Link>
              ))}
            </List>
          </div>
        );
      }}
    </Query>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
    width: "100%",
    maxWidth: "50vw",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  mainHeader: {
    fontSize: "3em",
    paddingLeft: "1em"
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  }
}));

export default CategoryList;
