import { defineStore } from "pinia";
import axios from "axios";
export const useWalletStore = defineStore("wallet", {
  state: () => ({
    wallets: [],
  }),
  actions: {
    increment() {
      // `this` is the store instance
      // this.counter++;
    },
  },
  getters: {
    getUsers: (state) => state.users,
  },
});
