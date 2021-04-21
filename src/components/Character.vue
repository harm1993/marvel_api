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
import { public_key } from "../marvel";
import { secret_key } from "../marvel";
import axios from "axios";
import md5 from "md5";

export default {
  name: "Character",

  data() {
    return {
      character: [],
      url: "",
      size: "standard_large.jpg",
    };
  },

  mounted() {
    this.getCharacter();
  },

  methods: {
    getCharacter: function () {
      const ts = Date.now();
      const hash = md5(ts + secret_key + public_key);
      var characterId = this.$route.params.id;
      axios
        .get(
          `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${ts}&apikey=${public_key}&hash=${hash}`
        )
        .then((result) => {
          console.log(result);

          result.data.data.results.forEach((item) => {
            this.character.push(item);

            this.url = `${item.thumbnail.path}/${this.size}`;

            console.log(this.url);
          });
        });
    },
  },
};
</script>

<style scoped>
</style>