import chatImg from '@assets/projects/chat.png';
import rssImg from '@assets/projects/rss.png';
import gendiffImg from '@assets/projects/gendiff.png';
import brainGamesImg from '@assets/projects/brain-games.png';
import chatMobileImg from '@assets/projects/chat-mobile.png';
import rssMobileImg from '@assets/projects/rss-mobile.png';
import brainGamesMobileImg from '@assets/projects/brain-games-mobile.png';
import gendiffMobileImg from '@assets/projects/gendiff-mobile.png';

const projects = [
  {
    title: 'Chat',
    description:
      'Chat is a modern web application for real-time messaging with JWT authentication, channel management, and profanity filtering.',
    link: 'https://github.com/0ksanaTkachenko/Chat',
    color: '#222121',
    tools:
      'Vite, React, Formik, Yup, Redux Toolkit, WebSockets, JWT, i18n, React Toastify, Leo Profanity, Rollbar',
    laptopImg: chatImg,
    mobileImg: chatMobileImg,
  },
  {
    title: 'RSS-aggregator',
    description:
      'The program allows users to add and track RSS feeds, automatically updating the list of posts every 5 seconds to display new entries.',
    link: 'https://github.com/0ksanaTkachenko/RSS-aggregator',
    color: '#4f5e50',
    tools:
      'Bootstrap, JavaScript, Webpack, Yup, On-change, i18next, Axios, All Origins',
    laptopImg: rssImg,
    mobileImg: rssMobileImg,
  },
  {
    title: 'Difference calculator',
    description:
      'The program compares two files and identifies differences. It reads their contents, analyzes the data structure, and detects any changes.',
    link: 'https://github.com/0ksanaTkachenko/difference-calculator',
    color: '#444156',
    tools: 'JavaScript, Commander library, Lodash library, Jest framework',
    laptopImg: gendiffImg,
    mobileImg: gendiffMobileImg,
  },
  {
    title: 'Brain Games',
    description:
      'Each game asks questions requiring correct answers. Three correct answers complete the game, while incorrect ones end it and prompt a restart.',
    link: 'https://github.com/0ksanaTkachenko/brain-games/tree/main',
    color: '#222121',
    tools: 'JavaScript, readline-sync library',
    laptopImg: brainGamesImg,
    mobileImg: brainGamesMobileImg,
  },
];

export default projects;
