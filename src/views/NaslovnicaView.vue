<script setup>
</script>

<template>
  <Layout>
    <main>
    <div class="custom-wrapper">
      <div class="padding">
        <span>
          Šah je igra za dva igrača. Postoje tri tipa: klasični (stolni šah), dopisni šah i problemski šah.
          Šahovska ploča kvadratnog je oblika, podijeljena u 64 (8×8) polja, obojenih naizmjenično svijetlom i tamnom bojom (redovno se govori "bijeli" i "crni"). 
          Svaki igrač na početku igre ima šesnaest šahovskih figura, od toga osam pješaka, po jedan par lovaca, skakača i topova te kralja i kraljicu. 
          Jedan igrač igra s figurama bijele, a drugi s figurama crne boje.
        </span>
        <br>
        <br>
        <pre>
Partija šaha nije samo besposlena zabava. 
Njime treba steći ili ojačati nekoliko vrlo vrijednih osobina uma, 
korisnih tijekom ljudskog života... 
Život je vrsta šaha, u kojem smo često ukazivali na dobitak, 
i natjecatelji ili protivnici s kojima se treba boriti. 

                                                - Benjamin Franklin
        </pre>
      </div>
      <div class="padding flex">
        <img src="../assets/bfranklin.jpg" alt="Benjamin Franklin">
      </div>
    </div>
  </main>
  </Layout>
</template>

<script>
import Layout from "../layouts/Layout.vue"

export default {
    components: {
      Layout
    },
  }
</script>

<style scoped>
.padding {
  padding: 1em;
}

.custom-wrapper{
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 5em 0;
}
</style>
