import { readable } from 'svelte/store';


export const api = readable(
    [],
    async set => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        const users = await res.json();

        set(users);
    });