import { defineStore } from "pinia";

export const useOperationsStore = defineStore("operations", {
  state: () => ({
    num1: 0 as number,
    num2: 0 as number,
    result: 10 as number,
    history: ["2", "+", "5", "+", "3"] as string[],
  }),
  actions: {
    ADD(): void {
      this.result = this.num1 + this.num2;
    },
  },
});
