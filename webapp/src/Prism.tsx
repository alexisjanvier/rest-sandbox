import React from 'react';

import { useGetPlayerList } from './apiClient/prismFetcher';
import { PlayerList } from './PlayerList';

export const Prism = () => {
  const { data, loading } = useGetPlayerList({});
  if (loading) {
    return <h2>Chargement...</h2>;
  }
  if (!loading && data !== null && !data.length) {
    return <h2>Il n'y a pas de joueuses</h2>
  }

  return (
    <>
      <h2>Liste depuis l'API Prism (mock)</h2>
      <PlayerList players={data} linkPath="prism"/>
    </>
  );
}
