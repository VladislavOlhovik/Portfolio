import ImgSocialNetwork from '../assets/images/sdf.jpg';
import ImgTodolist from '../assets/images/why-reminders.jpg';
import ImgCounter from '../assets/images/smartCounter.jpg';
import ImgPortfolio from '../assets/images/Portfolio.jpeg';

let initialState = {
  skillsInfo: [
    {
      title: 'HTML',
      img: 'fas fa-code',
      description: `Total understanding of the semantic, 
        cross-browser, responsive layout.`,
    },
    {
      title: 'JS-TS',
      img: 'fab fa-js-square',
      description: `Сonfident knowledge and practical 
      experience in writing code in JavaScript and TypeScript, 
      ES6. Basic knowledge of nodeJS.`,
    },
    {
      title: 'CSS',
      img: 'fab fa-css3-alt',
      description: `Skill in Naming classes according 
      to the BEM methodology, proficiency in using css 
      modules and preprocessors.`,
    },
    {
      title: 'Rest API',
      img: 'fas fa-cloud',
      description: `Knowledge of common concepts 
      of the communication between client and server 
      via HTTP protocol. The use of CRUD-like functions.`,
    },
    {
      title: 'React-Redux',
      img: 'fab fa-react',
      description: `Profound knowledge of architecture 
      of SPA on react. Strong skills in the organization 
      of state management on redux.`,
    },
    {
      title: 'GitHub',
      img: 'fab fa-github',
      description: `The ability to work with git. 
      Confident knowledge of the basic Git commands. 
      Deployment of projects on the gh-pages.`,
    },
  ],
  projectsInfo: [
    {
      title: 'Todolist',
      img: { backgroundImage: `url(${ImgTodolist})` },
      urlPr: 'https://vladislavolhovik.github.io/TodoList/',
      urlCode: ['https://github.com/VladislavOlhovik/TodoList'],
      description: `In this project are implemented: creation, change, deletion 
        of todolists and tasks and authorization. Reducers are covered 
        with tests. I used: TypeScript, react, redux-toolkit, redux-thunk, 
        axios, storybook, material-ui, formik .You can find the code by the following link: `,
    },
    {
      title: 'Social Network',
      img: { backgroundImage: `url(${ImgSocialNetwork})` },
      urlPr: 'http://VladislavOlhovik.github.io/SocialNetwork-JS',
      urlCode: [
        'https://github.com/VladislavOlhovik/SocialNetwork-JS',
        'https://github.com/VladislavOlhovik/SocialNetwork-TS',
        'JS ',
        'TS ',
      ],
      description: `I wrote this project with the help of JavaScript and Typescript. 
      There are implemented: authorization, profile editing, 
      communication with other users in the chat, 
      I used: react, redux, redux-form, WebSocket, axios, react-router-dom, 
      redux-thunk, redux-saga. You can find the code by the following link: `,
    },
    {
      title: 'Smart counter',
      img: { backgroundImage: `url(${ImgCounter})` },
      urlPr: 'https://vladislavolhovik.github.io/My-counterTS/',
      urlCode: ['https://github.com/VladislavOlhovik/My-counterTS'],
      description: `This is my first project after a month of 
        studying at the it incubator. I used: TypeScript, 
        React, Redux, HTML, CSS. You can find the code by the following link: `,
    },
    {
      title: 'Portfolio',
      img: { backgroundImage: `url(${ImgPortfolio})` },
      urlPr: '',
      urlCode: [
        'https://github.com/VladislavOlhovik/Portfolio',
        'https://github.com/VladislavOlhovik/portfolioGmail-SMTP',
        'FrontEnd ',
        'BackEnd ',
      ],
      description: `This is my portfolio. In the contact section, 
        you can send a message to me by e-mail. 
        I used: JavaScript, React, redux, formik, axios, 
        nodeJS, express, nodemailer. You can find the code by the following link: `,
    },
  ],
};

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
