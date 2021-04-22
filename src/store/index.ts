import Vue from 'vue'
import Vuex from 'vuex'
import { public_key, secret_key } from "../marvel";
import axios from "axios";
import md5 from "md5";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: Array(),
    character: Array(),
    url: '',
  },
  mutations: {
    getCharacters(state) {
      const ts = Date.now();
      const hash = md5(ts + secret_key + public_key);
      state.characters = Array();
      axios
        .get(
          `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`
        )
        .then((result) => {
          result.data.data.results.forEach((item: any) => {
            state.characters.push(item);
          });
        })
        .catch((error) => {
          console.log(error);
        });

    },
    getCharacter(state, id) {
      const ts = Date.now();
      const hash = md5(ts + secret_key + public_key);
      state.character = Array();
      axios
        .get(
          `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${public_key}&hash=${hash}`
        )
        .then((result) => {
          console.log(result);

          result.data.data.results.forEach((item: any) => {
            state.character.push(item);

            state.url = `${item.thumbnail.path}/`

          });
        });
    }
  },
  actions: {
    getCharacters: context => {

      context.commit('getCharacters')
    },
    getCharacter(context, id) {
      context.commit('getCharacter', id)
    }
  },
  modules: {
  }
})
