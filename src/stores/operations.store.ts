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
      this.history = this.display.split("");
      this.display = "0";
      this.CALCULATE();
    },
    // mini algoritmo de aritmética
    // CALCULATE(): void {
    //   let temp_result = 0;
    //   let temp_history: string[] = Object.assign([], this.history);

    //   // buscamos el operador * o /

    //   let m = false;
    //   const mult = () =>
    //     temp_history.forEach((element, index) => {
    //       if (temp_history.includes("*") && temp_history.length > 2) m = false;
    //       if (element === "*" && !m) {
    //         console.log(temp_history);
    //         temp_result =
    //           parseFloat(this.history[index - 1]) *
    //           parseFloat(this.history[index + 1]);
    //         // eliminamos los elementos que ya se multiplicaron y los reemplazamos por el resultado
    //         temp_history.splice(index - 1, 3, temp_result.toString());
    //         m = true;
    //         return;
    //       }
    //     });

    //   // hacer un do while para que se ejecute hasta que no haya * o /
    //   while (temp_history.includes("*")) mult();
    //   this.display = temp_history.join("");
    // },
    // CALCULATE(): void {
    //   // Crear una copia de la historia
    //   let temp_history: string[] = [...this.history];

    //   // Realizar todas las multiplicaciones
    //   for (let i = 0; i < temp_history.length; i++) {
    //     if (temp_history[i] === "*") {
    //       // Obtener los operandos de la multiplicación
    //       const operand1 = parseFloat(temp_history[i - 1]);
    //       const operand2 = parseFloat(temp_history[i + 1]);

    //       // Realizar la multiplicación y reemplazar en la historia
    //       const multiplicationResult = operand1 * operand2;
    //       temp_history.splice(i - 1, 3, multiplicationResult.toString());

    //       // Actualizar el índice para seguir verificando la historia
    //       i -= 2;
    //     }
    //   }

    //   // Actualizar el resultado en el display
    //   this.display = temp_history.join("");
    // },

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
