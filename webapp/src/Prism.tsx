import React from 'react';

import { useGetPlayerList } from './apiClient/prismFetcher';

export const Prism = () => {
  const { data, loading } = useGetPlayerList({});
  console.log(data);
  return <h2>Liste depuis l'API Prism (mock)</h2>;
}
