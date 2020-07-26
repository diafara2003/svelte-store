<script>
  import { api } from "./api-store.js";
</script>

<table>
  <thead>

    <tr>
      <th>name</th>
      <th>userName</th>
      <th>email</th>

    </tr>
  </thead>
  <tbody>
    {#each $api as item}
      <tr>

        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
      </tr>
    {/each}
  </tbody>

</table>
