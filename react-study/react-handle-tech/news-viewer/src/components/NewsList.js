import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from '../../node_modules/axios/index';
import styled from 'styled-components';
import usePromise from '../lib/usePromise';

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr&${query}apiKey=ccb79b13da5f4b1184009049594cf50e`,
    );
  }, [category]);

  if (loading) {
    return <div>로딩 중입니다...</div>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <div>에러 발생</div>;
  }

  const { articles } = response.data;
  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      {articles.map((article) => (
        <NewsItem article={article} key={article.url} />
      ))}
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default NewsList;
