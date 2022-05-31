<style>
    .win{
        display:flex;
        align-items:center;
        height:96px;
        border-radius:4px;
        border-left:6px solid;
        border-color: #5383E8;
        background-color:#28344E;
    }
    .loss{
        display:flex;
        align-items:center;
        height:96px;
        border-radius:4px;
        border-left:6px solid;
        border-color: rgb(232, 64, 87);
        background-color:#59343B;
    }
    .game{
        width:108px;
        margin-left:12px;
        color: #9E9EB1;
    }
    .info{
        margin-left:8px
    }
    .participants{
        display:flex;
        margin-left:12px;
    }
    .action{
        position: relative;
        width:40px;
        height:96px;
        border-top-right-radius: 4px;
        overflow: hidden;
        background-color:#2F436E;
    }
    .champion{
        display: flex;
        align-items: center;
    }
    img{
        border:0;
        vertical-align:middle;
        max-width:100%;
        border-radius:50%;
    }
    .icon{

    }
    .spells{
        margin-left:4px;
    }
    .runes{
        margin-left:2px;
    }
    .ico{
        display:block;
    }
    .stats{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        width: 140px;
        line-height:15px;
        color:#9E9EB1;
    }
    .kda{
        display:flex;
        flex-direction:column;
        justify-content:center;
        position:relative;
        width:107px;
        padding-right:12px;
        margin-right:8px;
        margin-left:12px;
    }
    .kda{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        width: 107px;
        padding-right: 12px;
        margin-right: 8px;
        margin-left: 12px;
    }
    .bar{
        width: 100%;
        height: 1px;
        margin: 8px 0px 4px;
        background-color: #2F436E;
    }
    .stats{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 140px;
        line-height: 15px;
        color: #9E9EB1;
    }
    span{
        color:#FFF;
    }
    .d{
        color:#E84057;
    }
    .kda::after {
        content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    width: 1px;
    height: 100%;
    background-color: #2F436E;
    }
    .k-d-a{
        line-height: 22px;
        font-size: 15px;
        color: #7B7A8E;
    }
    .ratio
    {
        line-height:16px;
    }
    .p-kill{
        color:#E84057;
    }
    .average-tier{
        font-weight: bold;
        text-transform: capitalize;
    }
    
    *{
        margin:0;
        padding:0;
    }
</style>
<script>
    export let Params;
    import RengarIMG from '$lib/images/Rengar.webp';
    import MatchTeamList from '$lib/components/MatchTeamList.svelte';
    import ItemList from '$lib/components/ItemList.svelte';
    const Me = (Params.PlayerList.filter(obj=>{
            return obj.champion === Params.PlayerOne;
        }))[0];
    const Team1 = Params.PlayerList.filter(player=>{
        console.log(player)
            return player.teamID === 100
    })
    const Team2 = Params.PlayerList.filter(player=>{
            return player.teamID === 200
    })
    console.log(Params)
    const Win = (Me.teamID === Params.WinningTeam) ? true : false
    function timeDifference(current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed/1000) + ' seconds ago';   
        }

        else if (elapsed < msPerHour) {
            return Math.round(elapsed/msPerMinute) + ' minutes ago';   
        }

        else if (elapsed < msPerDay ) {
            return Math.round(elapsed/msPerHour ) + ' hours ago';   
        }

        else if (elapsed < msPerMonth) {
            return Math.round(elapsed/msPerDay) + ' days ago';   
        }

        else if (elapsed < msPerYear) {
            return Math.round(elapsed/msPerMonth) + ' months ago';   
        }

        else {
            return Math.round(elapsed/msPerYear ) + ' years ago';   
        }
    }

</script>
<li>
<div class:win="{Win}" class:loss="{!Win}" style="margin-bottom:8px;">
    <div class="game">
        <div>Ranked Solo</div>
        <div class="time-stamp">{timeDifference(new Date().getTime(),Params.gameEndTimeStamp)}</div>
        <div class="bar"/>
        <div class="result">{Win? "Victory" : "Defeat"}</div>
        <div class="Duration">{Math.floor(Params.gameDuration / 60)}m {Params.gameDuration % 60}s</div>
    </div>
    <div class="info">
        <div>
            <div class="champion">
                <div clas="icon">
                    <img class="ico" src="/src/lib/dragontail/10.10.3224670/img/champion/{Me.champion}.png" alt="" width="48">
                </div>
                <div clas="spells">
                    <!-- {#each Params.Spells as Spell,index}
                        <img class="ico" src={Spells[Spell]} alt={Spell} width="22"/>
                    {/each} -->
                </div>
                <div clas="runes">
                    <!-- {#each Params.Runes as Rune,index}
                    <img class="ico" src={Runes[Rune]} alt={Rune} width="22"/>
                {/each} -->
                </div>
                <div class="kda">
                    <div class="k-d-a">
                        <span>{Me.Kills}</span>/<span class="d">{Me.Deaths}</span>/<span>{Me.Assists}</span>
                    </div>
                    <div class="ratio">
                        <span>{parseFloat(Me.KDA).toFixed(2)}:1</span> KDA
                    </div>
                </div>
                <div class="stats">
                    <div class="p-kill">P/Kill {parseFloat((100*(Me.Kills + Me.Assists)) / Params.totalKills).toFixed(0)}%</div>
                    <div class="ward">Control Ward {Me.PinkPurchased}</div>
                    <div class="cs">CS {Me.CS} ({parseFloat(Me.CS / (Params.gameDuration/60)).toFixed(1)})</div>

                    <div class="average-tier">Elo Hell 1</div>
                </div>
            </div>
        </div>
        <div>
            <div class="items" style="display:flex;">
                <ItemList Items={Me.Items}/>
            </div>
        </div>
    
    </div>
    <div class="participants">
        <MatchTeamList TeamData={Team1}/>
          <MatchTeamList TeamData={Team2}/>

    </div>
    <div class="action"></div>
</div>
</li>