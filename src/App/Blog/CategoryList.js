import { CircularProgress } from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CategoryIcon from '@material-ui/icons/Category';
import gql from "graphql-tag";
import React, { lazy, Suspense } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
const Album = lazy(() => import("../Common/Album"));

const Categories = gql`
  query categories {
    category {
      categoryId
      categoryUri
      categoryName
      categoryDesc
    }
  }
`;

function CategoryList() {
  const classes = useStyles();
  return (
    <Query query={Categories}>
      {({ loading, error, data }) => {
        if (loading) return <div></div>;
        if (error) return <h2>Error : {error.message}</h2>;

        return (
          <div>
            <Suspense fallback={<CircularProgress />}>
              <AppBar position="relative">
                <Toolbar>
                  <CategoryIcon />
                  <Typography variant="h6" color="inherit" noWrap>
                    Category
                  </Typography>
                </Toolbar>
              </AppBar>

              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  {data.category.map(cat => (
                    <Grid
                      item
                      key={"album" + cat.categoryId}
                      xs={12}
                      sm={6}
                      md={4}
                    >
                      <Link to={`/category/${cat.categoryId}`}>
                        <Album cat={cat} />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Suspense>
          </div>
        );
      }}
    </Query>
  );
}
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

export default CategoryList;
