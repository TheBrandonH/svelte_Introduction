export type Game ={ 
    gameId: String,
    gameCreation: Number,
    gameDuration: Number,
    gameEndTimeStamp: Number,
    gameStartTimeStamp: Number,
    team1ID: Number,
    team2ID: Number,
    WinningTeam: Number,
    PlayerOne: String,
    PlayerList: Array<Player>
}

export type Player = {
    champion: string,
    championLevel: number,
    teamID: number,
    Runes : PlayerRunes,
    Summoners:Array<Number>,
    Items: Array<Number>,

    CS: Number,
    PinkPurchased: Number,
    WardsDestroyed: Number,
    WardsPlaced: Number,
    DamageTaken: Number,
    DamageDone: Number,

    Kills: Number,
    Deaths: Number,
    Assists: Number,
    KDA: Number
}
export type PlayerRunes = {
    Primary: String,
    Secondary: String
}
export type PlayerInformation ={
    id: string,
    accountId: string,
    puuid: string,
    profileIconId: Number,
    revisionDate: Number,
    summonerLevel: Number
}