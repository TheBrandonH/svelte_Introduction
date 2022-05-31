<script>
    export let TeamData;
    /*[{
        Champion: "Rengar"
    }]
    */
   console.log(TeamData)
</script>
<style>
    ul{
        list-style:none;
        padding-top:2px;
    }
    .lol{
        display:flex;
        align-items:center;
        width:88px;
        height:18px;
        text-align:left;
        white-space:nowrap; 
        align-items:flex-start;
        padding-bottom:1px;
    }
    .name{
        align-self:center;
    }
    .icon{
        padding-right:4px;
    }
</style>

<ul>
    {#each TeamData as TeamMate}
        <li class="lol">
            <div class="icon">
                <img src="/src/lib/dragontail/10.10.3224670/img/champion/{TeamMate.champion}.png" alt={TeamMate.champion} width="16"/>
            </div>
            <div class="name">{TeamMate.champion}</div>
        </li>
    {/each}
    
</ul>