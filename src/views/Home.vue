<template>
  <div class="home"><Characters /></div>
</template>

<script lang="ts">
import Vue from "vue";
import Characters from "@/components/Characters.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Characters,
  },
});
</script>
