
import ImgSocialNetwork from '../assets/images/sdf.jpg'
import ImgTodolist from '../assets/images/why-reminders.jpg'

let initialState = {
  skillsInfo: [
    {
      title: "HTML",
      img: "fas fa-code",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    },
    {
      title: "JS-TS",
      img: "fab fa-js-square",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    },
    {
      title: "CSS",
      img: "fab fa-css3-alt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    },
    {
      title: "Rest API",
      img: "fas fa-cloud",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    },
    {
      title: "React-Redux",
      img: "fab fa-react",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    },
    {
      title: "GitHub",
      img: "fab fa-github",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    },
  ],
  projectsInfo: [
    {
      title: "Social Network",
      img: { backgroundImage: `url(${ImgSocialNetwork})` },
      url: "https://vladislavolhovik.github.io/SocialNetwork-TS/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    },
    {
      title: "Todolist",
      img: { backgroundImage: `url(${ImgTodolist})` },
      url: "https://vladislavolhovik.github.io/TodoList/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    },
  ],
};

export const infoReducer = (state=initialState, action) => {
    switch (action.type) {    
        default:
            return state
    }
}