import { useWalletStore } from "~/store";
export default defineNuxtPlugin(({ $pinia }: any) => {
  return {
    provide: {
      store: useWalletStore($pinia),
    },
  };
});
