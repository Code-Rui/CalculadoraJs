import { defineStore } from "pinia";

export const useOperationsStore = defineStore("operations", {
  state: () => ({
    num1: 0 as number,
    num2: 0 as number,
    result: 10 as number,
    history: [] as string[],
    display: "0" as string,
    view_result: false as boolean,
  }),
  actions: {
    ADD(): void {
      this.result = this.num1 + this.num2;
    },
    CLEAR_DISPLAY(): void {
      this.view_result = false;
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
      // let operators = ["+", "-", "*", "/"];
      // solo split entre los operadores con regex //3.1+3.2+6.1
      this.history = this.display.split(/(\+|\-|\*|\/)/);
      this.display = "0";
      this.CALCULATE();
    },
    CALCULATE(): void {
      // Crear una copia de la historia
      let temp_history: string[] = [...this.history];
      let temp_result = 0; // Resultado temporal

      // Realizar todas las multiplicaciones y divisiones en una sola pasada
      for (let i = 0; i < temp_history.length; i++) {
        // Multiplicación
        if (temp_history[i] === "*") {
          const operand1 = parseFloat(temp_history[i - 1]);
          const operand2 = parseFloat(temp_history[i + 1]);
          temp_result = operand1 * operand2;
          temp_history.splice(i - 1, 3, temp_result.toString());
          console.log(temp_history);
          i -= 2; // Ajustar el índice
        }
        // División
        else if (temp_history[i] === "/") {
          const operand1 = parseFloat(temp_history[i - 1]);
          const operand2 = parseFloat(temp_history[i + 1]);
          if (operand2 === 0) {
            // Manejar división por cero
            this.display = "Error";
            return;
          }
          temp_result = operand1 / operand2;
          temp_history.splice(i - 1, 3, temp_result.toString());
          i -= 2; // Ajustar el índice
        }
      }

      // Realizar todas las sumas y restas en una sola pasada
      for (let i = 0; i < temp_history.length; i++) {
        // Suma
        if (temp_history[i] === "+") {
          const operand1 = parseFloat(temp_history[i - 1]);
          const operand2 = parseFloat(temp_history[i + 1]);
          temp_result = operand1 + operand2;
          temp_history.splice(i - 1, 3, temp_result.toString());
          i -= 2; // Ajustar el índice
        }
        // Resta
        else if (temp_history[i] === "-") {
          const operand1 = parseFloat(temp_history[i - 1]);
          const operand2 = parseFloat(temp_history[i + 1]);
          temp_result = operand1 - operand2;
          temp_history.splice(i - 1, 3, temp_result.toString());
          i -= 2; // Ajustar el índice
        }
      }

      // Al finalizar, el resultado estará en el primer elemento del arreglo
      this.display = temp_history[0];
      this.view_result = true;
    },
  },
});
