<script>
  import { contador, contadores } from "./store.js";
  import { count, counts } from "./custom-store.js";
  import { api } from "./api-store.js";
  import Contador from "./Contador.svelte";
  import Incrementar from "./Incrementar.svelte";
  import Tabla from "./Tabla.svelte";
</script>

<main>
  <div class="container">
    <header class="d-flex justify-content-center mb-5">
      <h1>Store</h1>
    </header>

    <hr />

    <div class="d-flex justify-content-center">
      <div class="">
        <h2>Contador desde main: {$contador}</h2>
      </div>

    </div>

    <hr />

    <div class="d-flex justify-content-center">
      <h2>Modificar estado</h2>
    </div>

    <div class="d-flex justify-content-center">
      <h2>{$contadores.contador1}</h2>
    </div>

    <div class="d-flex justify-content-center">
      <h2>{$contadores.contador2}</h2>
    </div>

    <div class="d-flex justify-content-center">
      <Contador />
    </div>

    <hr />

    <div class="d-flex justify-content-center">
      <Incrementar />
    </div>

    <hr />

    <div class="d-flex justify-content-center">
      <h2>Custom Stores</h2>
    </div>
    <div class="d-flex justify-content-center">{$count}</div>

    <div class="d-flex justify-content-center">
      <button class="btn btn-warning" on:click={count.incrementar}>
        Incrementar
      </button>
    </div>

    <hr />

    <div class="d-flex justify-content-center">
      <h2>Custom Stores Objects</h2>
    </div>
    <div class="d-flex justify-content-center">{$counts.contador2}</div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-warning" on:click={counts.incrementar}>
        Incrementar
      </button>
    </div>

    <hr />
    <div class="d-flex justify-content-center">
      <h2>Readable store</h2>
    </div>
    <div class="d-flex justify-content-center">
      <ul>
        {#each $api as item}
          <li>{item.username}</li>
        {/each}
      </ul>
    </div>

    <hr />
    <div class="d-flex justify-content-center">
      <Tabla />
    </div>
  </div>

</main>
