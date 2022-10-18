<script lang="ts">
    import { writable } from 'svelte/store'
    import BulletEditorItem from "./BulletEditorItem.svelte";
    import type GTDItem from './GTDItem';

    export let items: GTDItem.GTDItem[];
    let activeItemIdx: number = 0;
    let activeItemIdxStore = writable(0);

    function clampItemIdx(idx: number): number {
        if(idx < 0) {
            return 0;
        }
        // TODO: global state
        else if(idx > (items.length - 1)) {
            return items.length - 1;
        }
        else {
            return idx;
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        if(event.key == "ArrowUp") {
            activeItemIdxStore.update(n => clampItemIdx(n - 1));
        } 
        else if(event.key == "ArrowDown")
        {
            activeItemIdxStore.update(n => clampItemIdx(n + 1));
        }
    }

    function focusItem(idx: number) {

    }

    activeItemIdxStore.subscribe(value => activeItemIdx = value);
    activeItemIdxStore.subscribe(value => focusItem(value));
</script>

<svelte:window on:keydown={handleKeydown}/>
  
<ul>
    {#each items as item (item.id)}
        {#if i == activeItemIdx}
            <li>
                <input type="text" bind:value={item.text}>
            </li>
        {:else}
            <li>{items.text}</li>
        {/if}
    {/each}
</ul>

<style>
    ul li input {
        border: none;
    }
</style>