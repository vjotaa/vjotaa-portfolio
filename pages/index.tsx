/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Image from 'next/image';
import Room from '../assets/room.gif';
import Item from '../components/projects/item';
import Typical from 'react-typical';

const Home: NextPage = () => {
  //IMPROVE: Remember create the interface
  const items = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt:
        'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt:
        'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ];
  return (
    <div>
      <div className="m-4 xl:m-0  xs:m-4 xl:max-w-7xl xl:mx-auto grid xl:grid-cols-2 lg:grid-cols-2 mt-5 xl:mt-10 items-center justify-center ">
        <div>
          <Image
            className="hidden lg:block  w-auto cursor-pointer rounded-lg	"
            src={Room}
            alt="loading..."
          />
        </div>
        <div>
          <h1 className="m-4 xl:m-0 text-5xl font-semibold text-blacky">
            Hi I'm <span className="text-gold"> Victor.</span> <br />A versatile
            developer who loves
            <span>
              <Typical
                steps={[
                  'Building websites',
                  1000,
                  'Mobile applications',
                  1000,
                  'Drawing Pixel art',
                  1000,
                  'Creating visual experiences',
                  1000,
                  'Coocking',
                  1000,
                  'Playing videogames',
                  1000,
                ]}
                loop={Infinity}
              />
            </span>
          </h1>
        </div>
      </div>
      <Item items={items} />
    </div>
  );
};

export default Home;
