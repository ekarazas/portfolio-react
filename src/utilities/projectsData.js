import { Portfolio, Todo, Recipes } from "../assets/projects";

const projectsData = [
  {
    id: 1,
    title: "Recipe Book - Vue/NodeJS Express Project",
    image: Recipes,
    url: "",
    front_url: "https://github.com/ekarazas/recipes-client",
    back_url: "https://github.com/ekarazas/recipes-server",
  },
  {
    id: 2,
    title: "Todo List - React/NodeJS Express Project",
    image: Todo,
    url: "",
    front_url: "https://github.com/ekarazas/todos-react-front",
    back_url: "https://glitch.com/edit/#!/todos-for-react",
  },
  {
    id: 3,
    title: "Portfolio - React Project",
    image: Portfolio,
    url: "https://karazas.lt",
    front_url: "https://github.com/ekarazas/portfolio-react",
    back_url: "",
  },
];

export default projectsData;
