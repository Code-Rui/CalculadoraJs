import { defineStore } from "pinia";

export const useOperationsStore = defineStore("operations", {
  state: () => ({
    num1: 0 as number,
    num2: 0 as number,
    result: 10 as number,
    history: [] as string[],
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
    TO_HISTORY(): void {
      this.history = this.display.split("");
      this.display = "0";
      this.CALCULATE();
    },
    // mini algoritmo de aritmética
    CALCULATE(): void {
      let temp_result = 0;
      let temp_history: string[] = Object.assign([], this.history);

      // buscamos el operador * o /

      let m = false;
      const mult = () =>
        temp_history.forEach((element, index) => {
          if (temp_history.includes("*") && temp_history.length > 2) m = false;
          if (element === "*" && !m) {
            console.log(temp_history);
            temp_result =
              parseFloat(this.history[index - 1]) *
              parseFloat(this.history[index + 1]);
            // eliminamos los elementos que ya se multiplicaron y los reemplazamos por el resultado
            temp_history.splice(index - 1, 3, temp_result.toString());
            m = true;
            return;
          }
        });

      // hacer un do while para que se ejecute hasta que no haya * o /
      while (temp_history.includes("*")) mult();
      this.display = temp_history.join("");
    },
  },
});
