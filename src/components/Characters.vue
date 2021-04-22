<template>
  <div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      <div
        v-for="character in characters"
        v-bind:key="character.id"
        class="col"
      >
        <div class="card h-100">
          <img
            :src="character.thumbnail.path + '/' + size"
            class="card-img-top"
            :alt="character.name"
          />
          <!-- <img src="..." class="card-img-top" alt="..." /> -->
          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <p class="card-text">
              {{ character.description }}
            </p>
          </div>
          <div class="card-footer bg-transparent">
            <router-link
              class="btn btn-primary"
              :to="{ name: 'character', params: { id: character.id } }"
              >View</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Characters",

  data() {
    return {
      size: "standard_large.jpg",
    };
  },
  mounted() {
    this.$store.dispatch("getCharacters");
  },
  computed: {
    ...mapState({
      characters: (state) => state.characters,
    }),
  },
};
</script>


<style lang="css" scoped>
.card-text {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>