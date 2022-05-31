import * as db from '$lib/database/database'
import { Game } from '$lib/database/models/Game.model';

export async function get({request,params,url}){
    if(!url.searchParams.get("Start")) return Failure("Start Param not found");
    if(!url.searchParams.get("Count")) return Failure("Count Param not found");
    console.log(url.searchParams.get("Count"));
    console.log(url.searchParams.get("Start"));
   
    const _ = await Game.find().skip(url.searchParams.get("Start")).limit(url.searchParams.get("Count")).sort({"gameEndTimeStamp":-1})
    return Sucess(_)
}


function Failure(message){
    return {
        body: JSON.stringify({
            error: message
        })
    }
}

function Sucess(message){
    return {
        body: message
    }
}