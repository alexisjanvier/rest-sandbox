import React from 'react';

import { useGetPlayerList } from './apiClient/expressFetcher';

export const Api = () => {
  const { data, loading } = useGetPlayerList({});
  console.log(data);
  return <h2>Liste depuis l'API Express (implementation strictement minimale)</h2>;
}

