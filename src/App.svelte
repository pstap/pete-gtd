<script lang="ts">
    import BulletEditor from './lib/BulletEditor.svelte';
    import svelteLogo from './assets/svelte.svg'

    import type GTDItem from './lib/GTDItem.js';

    let items: GTDItem.GTDItem[] = [
        {"text": "apples", "id": 1}, 
        {"text": "pears", "id": 2}, 
        {"text": "bananas", "id": 3}, 
        {"text": "sapote", "id": 4},
    ];
</script>

<main>
    <BulletEditor items={items}></BulletEditor>
</main>

<style>
</style>