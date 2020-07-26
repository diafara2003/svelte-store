<script>
  import {contador} from "./store.js";
  import { onDestroy } from "svelte";
  let cont;

  //mandar a llamar al store
  const unsuscribe = contador.subscribe((valor) => {
    cont = valor + 1;
  });

//cuando se quite el componente el DOM se libera las variables que
//tenemos referenciadas en el store
  onDestroy(unsuscribe);
</script>

<h2>Contador desde otro componente {cont}</h2>
