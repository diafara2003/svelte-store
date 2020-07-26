import { writable } from 'svelte/store';


function Contador() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        incrementar: () => update(n => n+1),
        reset: () => set(0)
    };
}



function Contadores(){
    const { subscribe, update } = writable({
        contador1:0,
        contador2:1
    }); 


    return {
        subscribe,
        incrementar: () => update(n => {
            n.contador1+=1;
            n.contador2+=1;

            return n;
        })
    };
}
export const count = Contador();
export const counts = Contadores();