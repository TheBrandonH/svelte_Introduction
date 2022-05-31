<script lang="ts"> 

    import '$lib/styles/index.css'
    import Match from '$lib/components/Match.svelte'
    import MatchHistory from '$lib/components/MatchHistory.svelte'
import { onMount } from 'svelte';
import { browser } from '$app/env';
import type { Game } from '$lib/../../@types/Match';

    let Matches = new Array<Game>();
    //#region Deprecated 
    // Matches.push({
    //     Game: {
    //         Date: "2 Hours Ago",
    //         Outcome : "Win",
    //         Duration: "420m 69s"
    //     },
    //     Champion: "Rengar",
    //     Spells: ["Smite","Haste"],
    //     Runes: ["HOB","Yellow"],
    //     KDA: {
    //         Kills: 1,
    //         Deaths: 1,
    //         Assists: 1
    //     },
    //     KDA_Ratio: 2/1,
    //     TeamList: ["Rengar","Rengar","Rengar","Rengar","Rengar"]

    // })
    // Matches.push({ 
    //     Game: {
    //         Date: "17 Hours Ago",
    //         Outcome : "Loss",
    //         Duration: "32m 30s"
    //     },
    //     Champion: "Rengar",
    //     Spells: ["Smite","Haste"],
    //     Runes: ["HOB","Yellow"],
    //     KDA: {
    //         Kills: 1,
    //         Deaths: 1,
    //         Assists: 1
    //     },
    //     KDA_Ratio: 2/1,
    //     TeamList: ["Rengar","Rengar","Rengar","Rengar","Rengar"]
    // })
    //#endregion
    
    onMount(async()=>{
        if(!browser) return;
        var resp = await fetch(`/api/GetGames?Start=0&Count=20`);
        const GameHistory = await resp.json();
        Matches = GameHistory;
    });
</script>




<MatchHistory>
    {#each Matches as L,index}
        <Match Params={L}/>
    {/each}
</MatchHistory>

