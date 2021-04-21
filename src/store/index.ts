import Vue from 'vue'
import Vuex from 'vuex'
import { public_key, secret_key } from "../marvel";
import axios from "axios";
import md5 from "md5";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
  },
  mutations: {
    getCharacters(state) {
      const ts = Date.now();
      const hash = md5(ts + secret_key + public_key);
      axios
        .get(
          `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`
        )
        .then((result) => {
          result.data.data.results.forEach((item) => {
            console.log(item);
            state.characters.push(item);
          });
        })
        .catch((error) => {
          console.log(error);
        });

    }
  },
  actions: {
    getCharacters: context => {

      context.commit('getCharacters')
    }
  },
  modules: {
  }
})
