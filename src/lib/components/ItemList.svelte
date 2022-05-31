<script>
export let Items;
</script>
<style>
    ul{
        list-style:none;
        display:flex;
        padding:0;
    }
    li{
        width: 22px;
        height: 22px;
        margin-left: 2px;
        background-color: #2F436E;
        border-radius: 4px;
    }
</style>
<ul>
    {#each Items as Item}
        {#if Item===0}
        <li>
            <div>
                
            </div>
        </li>
        {:else}
        <li>
            <div>
                <img src="/src/lib/dragontail/10.10.3224670/img/item/{Item}.png" width="22"/>
            </div>
        </li>
        {/if}
    {/each}
</ul>