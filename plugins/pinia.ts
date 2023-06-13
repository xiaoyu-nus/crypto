import { useMainStore } from "~/store";

export default defineNuxtPlugin(({ $pinia }: any) => {
  return {
    provide: {
      store: useMainStore($pinia),
    },
  };
});
