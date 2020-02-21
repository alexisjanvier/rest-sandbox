import React from 'react';
import { RouteComponentProps } from "react-router-dom";

import { useGetPlayer } from './apiClient/expressFetcher';

type TParams = { playerId: string };

export const PlayerApi = ({ match }: RouteComponentProps<TParams>) => {
    const { data, loading } = useGetPlayer({ playerId: match.params.playerId});

    if (loading) {
        return <h1>Chargement ...</h1>
    }

    if (data === null) {
        return <h1>Impossible de trouver les informations sur {match.params.playerId}</h1>
    }

    return (
        <>
            <h1>{ data.name} - numéro { data.number }</h1>
            <img width={200} src={data.picture === null ? '' : data.picture} alt={data.name} />
        </>
    );
}