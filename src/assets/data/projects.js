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
  },
  {
    id: uuidv4(),
    name: 'Easybank landing page',
    desc: 'Landing page coded with HTML, CSS and Javascript completely responsive',
    img: easybankImg,
  },
  {
    id: uuidv4(),
    name: 'Disney plus clone',
    desc: 'Disney plus page using REACT, REDUX, styled components and google authentication',
    img: disneyImg,
  },
  {
    id: uuidv4(),
    name: "Tesla clone",
    desc: 'The REACT tesla clone using REDUX and Styled Components',
    img: teslaImg,
  },
  {
    id: uuidv4(),
    name: 'PHP CRUD',
    desc: 'The clasic CRUD program coded with PHP connected to MySQL, and BOOTSTRAP for the styles',
    img: phpcrudImg,
  },
];

export default projects;
