import { defineStore } from "pinia";

export const useOperationsStore = defineStore("operations", {
  state: () => ({
    num1: 0 as number,
    num2: 0 as number,
    result: 10 as number,
    history: ["2", "+", "5", "+", "3"] as string[],
    display: "0" as string,
  }),
  actions: {
    ADD(): void {
      this.result = this.num1 + this.num2;
    },
    CLEAR_DISPLAY(): void {
      this.display = "0";
    },
    CONCATENATE(value: string): void {
      if (this.display === "0") {
        this.display = value;
      } else {
        this.display += value;
      }
    },
    // borramos el último caracter
    DELETE_LAST(): void {
      this.display = this.display.slice(0, -1);
    },
  },
});
