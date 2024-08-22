import React from 'react';
import { useSearchParams } from '../../node_modules/react-router-dom/dist/index';
import Categories from './Categories';
import NewsList from './NewsList';

const NewPage = () => {
  const { category } = useSearchParams();
  console.log(category);

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewPage;
