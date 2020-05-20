import { Container } from "unstated";

const initialstate = () => ({
    activeBlogContent: "history",
});

export default class BlogStore extends Container {
  state = initialstate();
  name = "BlogStore";
  init = async () => {};
  setActiveContent = async (activeContent) => {
    await this.setState({
        activeBlogContent: activeContent
    });
  };
  bindStore = (store) => {
    this.linkedStores[store.name] = store;
  };
}
