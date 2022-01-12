 function learn(time, courses) {
     let result = null
         //mientras no se encuentre dos números que sumados den el resultado, 
         //el valor de time irá disminuyendo
         //eso abre la posibilidad de encontrar siempre un par de números 
         //a menos que sean iguales y nunca haya una suma que de el resultado del tiempo.
     while (time > 1 && result == null) {

         courses.forEach((x, i) => {
             if (result == null) {
                 let diff = time - x
                 let otherIndex = courses.indexOf(diff, i + 1)
                 if (otherIndex > -1) {
                     result = [i, otherIndex]
                 }
             }
         });
         --time
     }
     //return result
     console.log(result)
 }

 learn(10, [2, 3, 8, 1, 4]) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

 learn(15, [2, 10, 4, 1]) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

 learn(5, [5, 5, 5]) // null no nos da tiempo de hacer dos cursos