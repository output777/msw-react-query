import axios from 'axios';
import React from 'react';
import {useQuery} from 'react-query';

const FirstExample = () => {
  const {isLoading, error, data} = useQuery('repoData', () =>
    axios
      .get('https://api.github.com/repos/tannerlinsley/react-query')
      .then((res) => res.data)
      .catch((err) => err)
  );

  if (isLoading) return 'Loading...';

  if (error) return 'error!!!';

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export default FirstExample;
