import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import gql from "graphql-tag";
import { default as React } from "react";
import { Query } from "react-apollo";
import Navbar from '../../landing_page/src/components/Navbar';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import MainFeaturedPost from "./MainFeaturedPost";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const Categories = gql`
  query categories($id: ID!) {
    category {
      categoryId
      categoryUri
      categoryName
      categoryDesc
    }

    findBlog(id: $id) {
      blogDesc
      blogLogo
      blogTitle
      categoryId
    }
  }
`;

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];
const sidebar = {
  title: "Contents",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function BlogSample(props) {
  const classes = useStyles();
  const blogId = props.match.params.id;

  return (
    <React.Fragment>
      <CssBaseline />
      <Query query={Categories} variables={{ id: blogId }}>
        {({ loading, error, data }) => {
          if (loading) return <h2>Loading..</h2>;
          if (error) return <h2>Error : {error.message}</h2>;
          const { category, findBlog } = data;
          const blogKeys = Object.keys(findBlog.blogDesc);
          console.log(blogKeys);
          return (
            <Container maxWidth="lg">
              <Navbar />
              <Header
                title={category[findBlog.categoryId - 1].categoryName}
                sections={category}
              />
              <main>
                <MainFeaturedPost post={findBlog} />

                <Grid container spacing={5} className={classes.mainGrid}>
                  <Sidebar title={"Contents"} contents={blogKeys} />
                  <Main posts={findBlog.blogDesc} />
                </Grid>
              </main>
            </Container>
          );
        }}
      </Query>
      {/* <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid> */}
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
