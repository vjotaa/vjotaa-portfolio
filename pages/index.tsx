/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Image from 'next/image';
import Room from '../assets/room.gif';
import Items from '../components/dribbble/Items';
import Typical from 'react-typical';
import { useEffect, useState } from 'react';
import { getDribbblePosts } from '../lib/dribbble';

const Home: NextPage = () => {
  //IMPROVE: Remember create the interface
  const [items, setitems] = useState([]);
  useEffect(() => {
    getDribbblePosts(3).then((item: any) => {
      setitems(item);
    });
  }, []);

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
          <h1 className="m-4 xl:m-0 text-4xl font-semibold text-blacky">
            Hi I'm <span className="text-gold"> Victor.</span> <br />A versatile
            developer who loves
            <span>
              <Typical
                steps={[
                  'Building websites',
                  1000,
                  'Mobile applications',
                  1000,
                  'Drawing',
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
      <Items items={items} />
    </div>
  );
};

export default Home;
