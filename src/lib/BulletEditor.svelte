<script lang="ts">
    import { writable } from 'svelte/store'
    import BulletEditorItem from "./BulletEditorItem.svelte";
    import GTDItem from './GTDItem';
    import { makeID } from './GTDID';

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
        else if(event.key == "Enter")
        {
            // if we're at the end of the list, we need to make a new element
            if(activeItemIdx == (items.length - 1))
            {
                items.push(new GTDItem.GTDItem(""));
            }
            activeItemIdxStore.update(n => clampItemIdx(n + 1));
        }
        else if(event.key == "Backspace")
        {
            // empty item, remove it
            if(items[activeItemIdx].text.length == 0)
            {
                // remove item
                items.splice(activeItemIdx, 1);
                activeItemIdxStore.update(n => clampItemIdx(n - 1));
            }
        }
    }

    function focusItem(node: HTMLInputElement) {
        node.focus();
    }

    activeItemIdxStore.subscribe(value => activeItemIdx = value);
</script>

<svelte:window on:keydown={handleKeydown}/>
  
<ul>
    {#each items as item, i}
        {#if i == activeItemIdx}
            <li>
                ({items[i].id}) <input type="text" bind:value={item.text} use:focusItem>
            </li>
        {:else}
            <li>({items[i].id}) {items[i].text}</li>
        {/if}
    {/each}
</ul>

<style>
    ul li input {
        border: none;
    }
</style>