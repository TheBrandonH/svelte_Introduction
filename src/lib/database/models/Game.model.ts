import mongoose, { model, Schema} from 'mongoose';
import {Player} from '$lib/../@types/Match'

interface IGame{
    gameId: String,
    gameCreation: Number,
    gameDuration: Number,
    gameEndTimeStamp: Number,
    gameStartTimeStamp: Number,
    totalKills: Number,
    team1ID: Number,
    team2ID: Number,
    WinningTeam: Number,
    PlayerOne: String,
    PlayerList: Array<Player>
}

const gameSchema = new Schema<IGame>({
    gameId: String,
    gameCreation: Number,
    gameDuration: Number,
    gameEndTimeStamp: Number,
    gameStartTimeStamp: Number,
    totalKills: Number,
    team1ID: Number,
    team2ID: Number,
    WinningTeam: Number,
    PlayerOne: String,
    PlayerList: [mongoose.Schema.Types.Mixed]
},{timestamps:true})

export const Game = model("Game",gameSchema);