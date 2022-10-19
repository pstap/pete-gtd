<script lang="ts">
    import { makeID } from './lib/GTDID';
    import BulletEditor from './lib/BulletEditor.svelte';
    import svelteLogo from './assets/svelte.svg'

    import GTDItem from './lib/GTDItem';

    let items: GTDItem.GTDItem[] = [
        new GTDItem.GTDItem("apples"), 
        new GTDItem.GTDItem("pears"),  
        new GTDItem.GTDItem("bananas"), 
        new GTDItem.GTDItem("sapote"),
    ];
</script>

<main>
    <BulletEditor items={items}></BulletEditor>
</main>

<style>
</style>