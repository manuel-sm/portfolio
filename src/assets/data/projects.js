import { v4 as uuidv4 } from 'uuid';
import disneyImg from '../images/projects/disney.png';
import easybankImg from '../images/projects/easybank.jpg';
import gameImg from '../images/projects/game.jpg';
import phpcrudImg from '../images/projects/phpcrud.png';
import teslaImg from '../images/projects/tesla.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Rock-Paper-Scissors game',
    desc: 'Rock Paper Scissors game using HTML, CSS and Javascript',
    img: gameImg,
    demo: 'https://manuel-sm.github.io/rock-paper-scissors/',
    code: 'https://github.com/manuel-sm/rock-paper-scissors'
  },
  {
    id: uuidv4(),
    name: 'Easybank landing page',
    desc: 'Landing page coded with HTML, CSS and Javascript completely responsive',
    img: easybankImg,
    demo: 'https://manuel-sm.github.io/easybank-landing-page/',
    code: 'https://github.com/manuel-sm/easybank-landing-page'
  },
  {
    id: uuidv4(),
    name: 'Disney plus clone',
    desc: 'Disney plus page using REACT, REDUX, styled components and google authentication',
    img: disneyImg,
    demo: 'https://disney-plus-91d07.web.app/',
    code: 'https://github.com/manuel-sm/disney-plus-clone'
  },
  {
    id: uuidv4(),
    name: "Tesla clone",
    desc: 'The REACT tesla clone using REDUX and Styled Components',
    img: teslaImg,
    demo: 'https://tesla-a8df8.web.app/',
    code: 'https://github.com/manuel-sm/tesla-clone'
  },
  {
    id: uuidv4(),
    name: 'PHP CRUD',
    desc: 'The clasic CRUD program coded with PHP connected to MySQL, and BOOTSTRAP for the styles',
    img: phpcrudImg,
    demo: '',
    code: 'https://github.com/manuel-sm/php-crud'
  },
];

export default projects;
