/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Items from '../../components/dribbble/Items';
import { useEffect, useState } from 'react';
import { getDribbblePosts } from '../../lib/dribbble';
import Loader from '../../components/shared/Loader';

const DribbbleList = () => {
  //IMPROVE: Remember create the interface
  const [items, setitems] = useState([]);
  useEffect(() => {
    getDribbblePosts(15).then((item: any) => {
      setitems(item);
    });
  }, []);
  return (
    <div className="m-4 xl:m-0  xs:m-4 xl:max-w-7xl xl:mx-auto  xl:grid-cols-2 lg:grid-cols-2 mt-5 xl:mt-10 ">
      <h2 className="text-4xl mb-5 font-extrabold text-blacky">Hi :)</h2>
      <h2 className="text-1xl  text-blacky">
        Is really good to see that you're here checking my UI experiences,
        please go ahead and see.
      </h2>
      <Loader show="asd"/>
      <Items items={items} hideShowMore={true} />
    </div>
  );
};

export default DribbbleList;
