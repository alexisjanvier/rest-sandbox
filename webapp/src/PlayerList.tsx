import React from 'react';
import { Link } from "react-router-dom";

import { GetPlayerListResponse } from './apiClient/expressFetcher';

type PlayerListProps = {
    players:GetPlayerListResponse | null,
    linkPath: string,
}

export const PlayerList = ({ players, linkPath }: PlayerListProps) => (
    <ul>
        {players !== null && players.length > 0 && players.map(player => (
            <li key={player.id}>
                <Link to={linkPath === 'prism' ? `/player/${player.id}` : `/api/player/${player.id}`}>
                    {player.name} - {player.number}
                </Link>
            </li>
        ))}
    </ul>
)