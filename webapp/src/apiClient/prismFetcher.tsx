/* Generated by restful-react */

import React from "react";
import {
    Get,
    GetProps,
    useGet,
    UseGetProps,
    Mutate,
    MutateProps,
    useMutate,
    UseMutateProps
} from "restful-react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Un.e joueur.euse de Roller Derby
 */
export interface Player {
    id: string;
    name: string;
    number: number;
    picture: string | null;
    more?: {
        question: string;
        answer?: string | null;
    }[];
}

export type GetPlayerListResponse = {
    id: string;
    name: string;
    number: number;
    picture: string | null;
    more?: {
        question: string;
        answer?: string | null;
    }[];
}[];

export interface GetPlayerListQueryParams {
    /**
     * Filters to apply to query. It's a stringified json object, with key/value filter separated by comma
     */
    filter?: string;
    /**
     * Sort to apply to query. A stringified array with [sortProp, sortDirection]
     */
    sort?: string;
    /**
     * Pagination parameters. A stringified array with [perPage, currentPage]
     */
    pagination?: string;
}

export type GetPlayerListProps = Omit<
    GetProps<GetPlayerListResponse, unknown, GetPlayerListQueryParams>,
    "path"
>;

/**
 * ### Retourne la liste des tous.tes les joureurs.euses.
 * - Cette liste est filtrable et triable.
 * - Un exemple de liste en ligne : [Les pétroleuses](http://roller-derby-caen.fr/les-petroleuses/)
 */
export const GetPlayerList = (props: GetPlayerListProps) => (
    <Get<GetPlayerListResponse, unknown, GetPlayerListQueryParams>
        path={`/players`}
        base="http://localhost:4003"
        {...props}
    />
);

export type UseGetPlayerListProps = Omit<
    UseGetProps<GetPlayerListResponse, GetPlayerListQueryParams>,
    "path"
>;

/**
 * ### Retourne la liste des tous.tes les joureurs.euses.
 * - Cette liste est filtrable et triable.
 * - Un exemple de liste en ligne : [Les pétroleuses](http://roller-derby-caen.fr/les-petroleuses/)
 */
export const useGetPlayerList = (props: UseGetPlayerListProps) =>
    useGet<GetPlayerListResponse, unknown, GetPlayerListQueryParams>(
        `/players`,
        { base: "http://localhost:4003", ...props }
    );

export type CreatePlayerResponse = {
    id: string;
    name: string;
    number: number;
    picture: string | null;
    more?: {
        question: string;
        answer?: string | null;
    }[];
};

export type CreatePlayerProps = Omit<
    MutateProps<CreatePlayerResponse, unknown, void, void>,
    "path" | "verb"
>;

/**
 * Ajoute un.e joueur.euse.
 */
export const CreatePlayer = (props: CreatePlayerProps) => (
    <Mutate<CreatePlayerResponse, unknown, void, void>
        verb="POST"
        path={`/players`}
        base="http://localhost:4003"
        {...props}
    />
);

export type UseCreatePlayerProps = Omit<
    UseMutateProps<CreatePlayerResponse, void, void>,
    "path" | "verb"
>;

/**
 * Ajoute un.e joueur.euse.
 */
export const useCreatePlayer = (props: UseCreatePlayerProps) =>
    useMutate<CreatePlayerResponse, unknown, void, void>("POST", `/players`, {
        base: "http://localhost:4003",
        ...props
    });

export type GetPlayerResponse = {
    id: string;
    name: string;
    number: number;
    picture: string | null;
    more?: {
        question: string;
        answer?: string | null;
    }[];
};

export type GetPlayerProps = Omit<
    GetProps<GetPlayerResponse, unknown, void>,
    "path"
> & { playerId: string };

/**
 * Obtenir toutes les informations sur un.e joueur.euse.
 */
export const GetPlayer = ({ playerId, ...props }: GetPlayerProps) => (
    <Get<GetPlayerResponse, unknown, void>
        path={`/players/${playerId}`}
        base="http://localhost:4003"
        {...props}
    />
);

export type UseGetPlayerProps = Omit<
    UseGetProps<GetPlayerResponse, void>,
    "path"
> & { playerId: string };

/**
 * Obtenir toutes les informations sur un.e joueur.euse.
 */
export const useGetPlayer = ({ playerId, ...props }: UseGetPlayerProps) =>
    useGet<GetPlayerResponse, unknown, void>(`/players/${playerId}`, {
        base: "http://localhost:4003",
        ...props
    });

export type UpdatePlayerResponse = {
    id: string;
    name: string;
    number: number;
    picture: string | null;
    more?: {
        question: string;
        answer?: string | null;
    }[];
};

export type UpdatePlayerProps = Omit<
    MutateProps<UpdatePlayerResponse, unknown, void, void>,
    "path" | "verb"
> & { playerId: string };

/**
 * Mettre à jour les informations sur un.e joueur.euse.
 */
export const UpdatePlayer = ({ playerId, ...props }: UpdatePlayerProps) => (
    <Mutate<UpdatePlayerResponse, unknown, void, void>
        verb="PUT"
        path={`/players/${playerId}`}
        base="http://localhost:4003"
        {...props}
    />
);

export type UseUpdatePlayerProps = Omit<
    UseMutateProps<UpdatePlayerResponse, void, void>,
    "path" | "verb"
> & { playerId: string };

/**
 * Mettre à jour les informations sur un.e joueur.euse.
 */
export const useUpdatePlayer = ({ playerId, ...props }: UseUpdatePlayerProps) =>
    useMutate<UpdatePlayerResponse, unknown, void, void>(
        "PUT",
        `/players/${playerId}`,
        { base: "http://localhost:4003", ...props }
    );

export type DeletePlayerResponse = {
    id: string;
    name: string;
    number: number;
    picture: string | null;
    more?: {
        question: string;
        answer?: string | null;
    }[];
};

export type DeletePlayerProps = Omit<
    MutateProps<DeletePlayerResponse, unknown, void, string>,
    "path" | "verb"
>;

/**
 * Supprimer un.e joueur.euse.
 */
export const DeletePlayer = (props: DeletePlayerProps) => (
    <Mutate<DeletePlayerResponse, unknown, void, string>
        verb="DELETE"
        path={`/players`}
        base="http://localhost:4003"
        {...props}
    />
);

export type UseDeletePlayerProps = Omit<
    UseMutateProps<DeletePlayerResponse, void, string>,
    "path" | "verb"
>;

/**
 * Supprimer un.e joueur.euse.
 */
export const useDeletePlayer = (props: UseDeletePlayerProps) =>
    useMutate<DeletePlayerResponse, unknown, void, string>(
        "DELETE",
        `/players`,
        { base: "http://localhost:4003", ...props }
    );
