import type Game from "./game.ts";

export interface FootballData {
    table: Table[];
    prevGames: Game[];
    nextGames: Game[];
}

export interface Table {
    place: number;
    team: string;
    img: string;
    games: number;
    won: number;
    draw: number;
    lost: number;
    goal: string;
    goalDifference: number;
    points: number;
    isRelegation: boolean;
    isPromotion: boolean;
}

export interface FootballJson {
    success: boolean;
    data: FootballData;
}
