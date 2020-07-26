<script>
  import { contador, contadores } from "./store.js";

  function incrementar() {
    contador.update((inicial) => inicial + 1);
  }

  function reset() {
    contador.set(0);
  }

  function incrementar2() {
    contadores.update((n) => {
      n.contador1 = n.contador1 + 1;
      n.contador2++;

      return n;
    });
  }
</script>

<button class="btn btn-info m-2" on:click={reset}>Reiniciar</button>
<button class="btn btn-primary m-2" on:click={incrementar}>incrementar</button>

<button class="btn btn-default m-2" on:click={incrementar2}>incrementar2</button>
