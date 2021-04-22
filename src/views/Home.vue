<template>
  <div class="home container">
    <Characters />
  </div>
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
