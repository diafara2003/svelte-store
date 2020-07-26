import { writable, readable } from 'svelte/store';

export const contador = writable(0);

export const contadores = writable({
    contador1: 0,
    contador2: 1
});