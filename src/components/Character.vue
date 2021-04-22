<template lang="html">
  <div>
    <h3>hello this is character.vue</h3>
    <p>{{ this.$route.params.id }}</p>
    <ul>
      <li v-for="char in character">
        {{char.name}}
        {{char.description}}
      </li>
      <img :src="url" alt="">
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Character",

  data() {
    return {
      url: "",
      size: "standard_large.jpg",
    };
  },
  mounted() {
    this.$store.dispatch("getCharacter", this.$route.params.id);
    this.getImage();
  },
  computed: {
    ...mapState({
      character: (state) => state.character,
      preUrl: (state) => state.url,
    }),
  },
  methods: {
    getImage: function () {
      this.url = `${this.preUrl}${this.size}`;
    },
  },
};
</script>

<style scoped>
</style>