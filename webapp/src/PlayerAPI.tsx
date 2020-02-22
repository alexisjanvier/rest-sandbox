import React from 'react';
import { RouteComponentProps } from "react-router-dom";

import { useGetPlayer } from './apiClient/expressFetcher';

type TParams = { playerId: string };

export const PlayerApi = ({ match }: RouteComponentProps<TParams>) => {
    const { data: player, loading } = useGetPlayer({ playerId: match.params.playerId});

    if (loading) {
        return <h1>Chargement ...</h1>
    }

    if (player === null) {
        return <h1>Impossible de trouver les informations sur {match.params.playerId}</h1>
    }

    return (
        <>
            <h1>{ player.name} - numéro { player.number }</h1>
            <img width={600} src={player.picture === null ? '' : player.picture} alt={player.name} />
        </>
    );
}
