import gameOn from '@/assets/images/game-on.jpg';
import tirtil from '@/assets/images/tirtil.png';
import fishMemory from '@/assets/images/fish-memory.png';
import researchProject from '@/assets/images/research-project.png';

export default [
  {
    title: 'Game On',
    category: 'UI/UX Design',
    description:
      'The design features a landing page for an e-commerce mobile website that enables customers to purchase gaming equipment. A paper wireframe was drawn, low-fidelity and high-fidelity wireframes were crafted using Figma.',
    image: gameOn,
  },
  {
    title: 'Tırtıl',
    category: 'Web Development',
    description:
      'A Wordle clone developed with React. Players try to figure out the hidden word within a limited number of attempts. With each guess, the game provides feedback on the correctness of individual letters.',
    codeUrl: 'https://github.com/melodidev/tirtil',
    appUrl: 'https://melodi.dev/tirtil/',
    image: tirtil,
  },
  {
    title: 'Fish Memory Game',
    category: 'Web Development',
    description:
      'A memory card game developed using React and Vite. Players attempt to click on each image once; after every attempt, the cards shuffle. The goal is to achieve the highest possible score.',
    codeUrl: 'https://github.com/melodidev/fish-memory',
    appUrl: 'https://melodi.dev/fish-memory/',
    image: fishMemory,
  },
  {
    title: 'The Effect of Odor on False Memory',
    category: 'Research Project',
    description:
      'The aim of the study was to examine whether odor leads to false memory. Forty university students from EMU were split into control and experimental groups. The experimental group was exposed to scent of coffee while watching videos, while other the group was not exposed. A questionnare about the videos was administered, asking participants whether a cup of coffee was shown in the videos. Results indicated that odor had no significant effect on false memory.',
    image: researchProject,
  },
];
