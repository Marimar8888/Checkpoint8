# DOCUMENTACIÓN CHECKPOINT 8

## 1.- ¿Qué tipo de bucles hay en JS?

En JavaScript, hay tres tipos principales de bucles `for`, `while` y `do...while`:

### A- Bucle __`for`__

Los bucles `for`, se utiliza cuando se conoce el número exacto de iteraciones que se deben realizar. Dentro de los bucles for hay 4 tipos diferentes dependiendo de el tipo de dato a iterar.

#### Bucle __`for`__ básico: 

Este bucle consta de tres partes: inicialización, condición y expresión de iteración.

```javascript
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
```

1. `for (let i = 0; i < 5; i++) { ... }`: Este es un bucle for que consta de tres partes separadas por punto y coma (;).

   * La primera parte '(let i = 0)' inicializa una variable i con el valor de 0. Este es el punto de inicio de la iteración.
   * La segunda parte `(i < 5)` establece la condición que debe cumplirse para que el bucle continúe ejecutándose. Mientras la variable i sea menor que 5, el bucle continuará ejecutándose.
   * La tercera parte `(i++)` se ejecuta después de cada iteración del bucle y se utiliza para incrementar el valor de la variable i en 1.

2. `console.log(i);`: Dentro del bucle, se imprime el valor actual de la variable i en la consola utilizando console.log(). En cada iteración del bucle, el valor de i cambiará para representar el siguiente número en el rango.


#### Bucle `for...in`: 

Este bucle se utiliza para iterar sobre las propiedades enumerables de un objeto. Es útil cuando deseas iterar sobre las claves de un objeto.

```javascript
    const obj = {a: 1, b: 2, c: 3};

    for (let key in obj) {
        console.log(key + ': ' + obj[key]);
    }
```

1. `const obj = {a: 1, b: 2, c: 3};`: Se declara una constante obj que contiene un objeto con varias propiedades y sus valores asociados.

2. `for (let key in obj) { ... }`: Se inicia un bucle for...in que recorre cada propiedad enumerable del objeto obj. La sintaxis for (let key in obj) significa que en cada iteración del bucle, la variable key tomará el nombre de la propiedad actual del objeto obj.

3. `console.log(key + ': ' + obj[key]);`: Dentro del bucle, se imprime cada clave y su valor asociado en la consola utilizando console.log(). La expresión obj[key] accede al valor asociado a la clave actual key en el objeto obj.


#### Bucle `for...of`: 

Este bucle se utiliza para iterar sobre objetos iterables, como arreglos, cadenas y objetos similares a arreglos (por ejemplo, NodeList).

```javascript
    const arr = [1, 2, 3];

    for (let element of arr) {
        console.log(element);
    }
```

1. `const arr = [1, 2, 3];`: Se declara una constante arr que contiene un array de números [1, 2, 3]. Este será el array sobre el cual iteraremos utilizando el bucle for...of.

2. `for (let element of arr) { ... }`: Se inicia un bucle for...of que recorre cada elemento del array arr. La sintaxis for (let element of arr) significa que en cada iteración del bucle, la variable element tomará el valor del elemento actual del array arr.

3. `console.log(element);`: Dentro del bucle, se imprime cada elemento del array en la consola utilizando console.log(). En cada iteración del bucle, el valor de element cambiará para representar el siguiente elemento del array.
   

#### Bucle `for await...of`: 

Este bucle se utiliza para iterar sobre objetos iterables asíncronos, como iterables devueltos por funciones generadoras asíncronas.

```javascript
    async function* generateAsyncNumbers() {
        yield 1;
        yield 2;
        yield 3;
    }

    (async () => {
        for await (let num of generateAsyncNumbers()) {
            console.log(num);
        }
    })();
```

1. `async function* generateAsyncNumbers() { ... }`: Se define una función generadora asíncrona llamada generateAsyncNumbers(). Esta función generadora utiliza la sintaxis async function*, que permite generar valores de manera asíncrona utilizando la palabra clave yield.

2. `yield 1; yield 2; yield 3;`: Dentro de la función generadora, se utilizan las declaraciones yield para generar valores de forma asíncrona. En este caso, la función generadora generará los valores 1, 2 y 3 de forma secuencial.

3. `(async () => { ... })();`: Esta es una función flecha asíncrona autoinvocada. Se define una función flecha asíncrona anónima y se llama inmediatamente utilizando () al final. Esta técnica se utiliza para ejecutar código asincrónico de forma inmediata.

4. `for await (let num of generateAsyncNumbers()) { ... }`: Dentro de la función flecha asíncrona, se utiliza un bucle for await...of para iterar sobre los valores generados de forma asíncrona por la función generadora generateAsyncNumbers(). La palabra clave await se utiliza para esperar que la promesa generada por generateAsyncNumbers() se resuelva antes de continuar con la iteración del bucle.

5. `console.log(num);`: Dentro del bucle, se imprime cada valor generado en la consola utilizando console.log().

### B- Bucle __`while`__

Se utiliza cuando se necesita realizar iteraciones mientras se cumpla una condición específica.

```javascript
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
```

1. `let i = 0;`: Se declara una variable i e se inicializa con el valor de 0. Este será nuestro contador que utilizaremos para iterar sobre los números.

2. `while (i < 5) { ... }`: Esta es la estructura de un bucle while. La condición especificada dentro de los paréntesis (i < 5) se evalúa antes de ejecutar el bloque de código dentro de las llaves { ... }. Mientras esta condición sea verdadera, el bloque de código se ejecutará repetidamente. Si la condición es falsa, el bucle se detendrá y la ejecución continuará con el código que sigue después del bucle.

3. `{ console.log(i); i++; }`: Este es el bloque de código dentro del bucle while. Dentro de este bloque, console.log(i) imprimirá el valor actual de i en la consola, y luego i++ incrementará el valor de i en 1 en cada iteración.


### C- Bucle __`do...while`__

Es similar al bucle while, pero garantiza que el bloque de código se ejecute al menos una vez antes de verificar la condición. 

```javascript
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);
```

1. `let i = 0;`: Se declara una variable i e se inicializa con el valor de 0. Este será nuestro contador que utilizaremos para iterar sobre los números.

2. `do { ... } while (i < 5);`: Este es el bucle do...while. La parte do { ... } contiene el bloque de código que se ejecutará al menos una vez, independientemente de la condición. El bloque de código ejecutará console.log(i) para imprimir el valor actual de i, y luego se incrementará i mediante i++.

3. `while (i < 5);`: Después del bloque de código (do { ... }), hay una condición especificada con while. Esta condición comprueba si i sigue siendo menor que 5. Si la condición es verdadera, el bucle se repetirá y el bloque de código dentro de do { ... } se ejecutará nuevamente. Si la condición es falsa, el bucle se detendrá y la ejecución continuará con el código que sigue después del bucle.

### Mejores prácticas en el uso de bucles

Es recomendable evitar el uso excesivo de bucles `while` y `do...while` en el código, ya que pueden hacer que el código sea más difícil de entender y mantener. Los bucles for suelen ser preferibles cuando se conoce el número exacto de iteraciones, ya que proporcionan una estructura más clara y concisa.

Sin embargo, en algunas situaciones, los bucles `while` y `do...while` son la elección más apropiada, especialmente cuando la lógica de control depende de una condición dinámica o cuando se necesita una ejecución al menos una vez.

Algunas mejores prácticas específicas para su uso:

- **Utiliza el bucle más adecuado para cada situación:** Escoge el tipo de bucle (`for`, `while`, `do...while`) que mejor se adapte a los requisitos del problema y la estructura de datos que estés manejando.

- **Mantén los bucles simples y legibles:** Evita la complejidad innecesaria dentro de los bucles. Si un bucle se vuelve demasiado complicado, considera dividirlo en funciones más pequeñas y legibles.

- **Evita modificar variables de control dentro del bucle:** Modificar variables de control (como i en un bucle `for`) dentro del bucle puede llevar a comportamientos inesperados y dificultar la comprensión del código. Es preferible manejar las modificaciones de variables de control al principio o al final del bucle.

- **Evita bucles infinitos:** Asegúrate de que haya una condición de salida clara en cada bucle para evitar que se vuelvan infinitos y bloqueen la ejecución del programa.

- **Usa iteradores apropiados para objetos iterables:** Para arrays y otros objetos iterables, considera el uso de bucles `for...of` en lugar de bucles for estándar, ya que proporcionan una sintaxis más clara y concisa.

- **Optimiza el rendimiento cuando sea necesario:** En bucles que se ejecutan muchas veces o manipulan grandes cantidades de datos, considera optimizaciones como evitar cálculos duplicados, minimizar el número de operaciones dentro del bucle y usar algoritmos eficientes.

- **Evita bucles innecesarios:** Si es posible, busca soluciones alternativas que eviten la necesidad de bucles. Por ejemplo, para operaciones en arrays, considera el uso de métodos de array como map(), filter(), reduce(), etc., que a menudo pueden hacer el código más legible y eficiente.

- **Mantén el código limpio y consistente:** Sigue las convenciones de codificación establecidas y utiliza nombres de variables descriptivos para mejorar la legibilidad y el mantenimiento del código.


## 2.- ¿Cuáles son las diferencias entre const, let y var?

En JavaScript, existen tres tipos de declaraciones de variables: var, const, y let. Cada uno tiene características específicas y ámbitos de aplicación que los hacen útiles en diferentes situaciones.

### const

- Se utiliza para declarar constantes cuyo valor no cambiará después de su inicialización.
- No se puede reasignar a un nuevo valor después de la inicialización.
- El alcance de una constante declarada con `const` es el bloque en el que se declara.
- Se debe inicializar una constante al momento de su declaración.
- Es una buena práctica utilizar `const` para declarar variables que no necesitan ser reasignadas.
- No sufre hoisting, por lo que no puede ser utilizado antes de ser declarado dentro de su ámbito.

Ejemplo:

```javascript
    const PI = 3.14159;
    const person = { name: "John", age: 30 };

    console.log(PI); // 3.14159
    console.log(person.name); // John

    // Dará un error, ya que no se puede reasignar una variable constante
    // PI = 3.14; // Error: Assignment to constant variable

    // Sin embargo, si la variable constante es un objeto, su contenido puede cambiar
    person.age = 31;
    console.log(person.age); // 31
```

### let

- Se utiliza para declarar variables cuyo valor puede cambiar.
- El alcance de una variable declarada con `let` es el bloque en el que se declara.
- Puede ser reasignado a un nuevo valor después de su inicialización.
- No se puede redeclarar en el mismo alcance.
- Es una buena práctica utilizar `let` en lugar de `var` para declarar variables con alcance de bloque.
- No sufre hoisting, por lo que no puede ser utilizado antes de ser declarado dentro de su ámbito.

Ejemplo:

```javascript
    function example() {
    let x = 10;
    if (true) {
        let y = 20;
        console.log(x); // 10
        console.log(y); // 20
    }
    console.log(x); // 10
    // Dará error porque es declarada dentro del bloque if y está fuera del alcance (scope)
    // console.log(y); // Error: y is not defined
    }

    example();
```

### var

- Se utilizaba para declarar variables antes de la introducción de `const` y `let`.
- El alcance de una variable declarada con `var` es la función contenedora o el archivo si está fuera de cualquier función (esto se conoce como ámbito de función o global).
- Puede ser reasignado a un nuevo valor después de su inicialización.
- Se puede redeclarar en el mismo alcance, lo que puede llevar a errores difíciles de detectar.
- No es recomendado su uso en la mayoría de los casos debido a su comportamiento de ámbito menos predecible y propenso a errores.
- Sufre hoisting, lo que significa que puede ser utilizado antes de ser declarado, aunque su valor será undefined si se accede a él antes de la declaración.

```javascript
    function example() {
        var x = 10;
        if (true) {
            var y = 20;
            console.log(x); // 10
        }
        console.log(y); // 20
    }

    example();
```

## 3.- ¿Qué es una función de flecha?

Las funciones de flecha se definen utilizando una sintaxis especial con una flecha (`=>`). Aquí hay un ejemplo básico de una función de flecha que suma dos números:

```javascript
    const sum = (a, b) => a + b;
```
Ejemplos de funciones flecha:

```javascript
    // Función flecha básica
    helloWorld = () => { console.log("Hi there"); }
    helloWorld();
```
En este bloque de código, se define una función de flecha básica llamada helloWorld que no toma ningún argumento. La función simplemente imprime "Hi there" en la consola cuando se invoca. Luego, se invoca la función helloWorld().

```javascript
    // Función de flecha con argumento de función abreviada para un solo argumento
    firstName = fname => { console.log(fname.toUpperCase()); }
    firstName('Peter');
```
En este bloque de código, se define una función de flecha llamada firstName que toma un solo argumento fname. La función convierte el nombre fname en mayúsculas utilizando el método toUpperCase() y lo imprime en la consola. Luego, se invoca la función firstName('Peter'), pasando el nombre "Peter" como argumento.

```javascript
    // Función de flecha con múltiples argumentos
    fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
    fullName('Ana', 'Llorente');
```
En este bloque de código, se define una función de flecha llamada fullName que toma dos argumentos: fName (nombre) y lName (apellido). La función imprime el nombre completo en la consola con el apellido seguido por una coma y el nombre, todo en una sola línea. Luego, se invoca la función fullName('Ana', 'Llorente'), pasando los nombres "Ana" y "Llorente" como argumentos.

```javascript
    // Función de flecha sin argumentos y sin nombre
    () => {
    console.log("Esta es una función de flecha sin argumentos y sin nombre");
    };
```
En este bloque de código, la sintaxis de la función de flecha () => {...} indica que es una función que no tiene ningún argumento, ya que los paréntesis () están vacíos. Además, no se le ha asignado ningún nombre a la función, lo que la convierte en una función anónima.

```javascript
    // Asignando la función a una variable
    const myFunction = () => {
        console.log("Esta es una función de flecha sin argumentos y sin nombre");
    };

    // Invocando la función
    myFunction();

    // Usando la función directamente
    setTimeout(() => {
        console.log("Esta es una función de flecha sin argumentos y sin nombre usada directamente");
    }, 1000);
```

- Asignando la función a una variable:
  
  En este bloque de código, se define una función de flecha sin argumentos y sin nombre. La función simplemente imprime un mensaje en la consola que indica que es una función de flecha sin argumentos y sin nombre. Luego, se asigna esta función a una variable llamada myFunction utilizando la palabra clave const.

- Invocando la función:
  
  En este bloque de código, se invoca la función myFunction() que acabamos de definir. Cuando esta línea se ejecuta, la función se llama y el mensaje "Esta es una función de flecha sin argumentos y sin nombre" se imprime en la consola.

- Usando la función directamente:
  
  En este bloque de código, se utiliza la función de flecha directamente como argumento de la función setTimeout(). La función de flecha se pasa como argumento para que se ejecute después de un retraso de 1000 milisegundos (1 segundo). Cuando se complete el retraso, la función de flecha se ejecutará y el mensaje "Esta es una función de flecha sin argumentos y sin nombre usada directamente" se imprimirá en la consola.


## 4.- ¿Qué es la deconstrucción de variables?

### Deconstrucción de Variables en JavaScript

La deconstrucción de variables es una característica de JavaScript que permite extraer valores de objetos o matrices y asignarlos a variables individuales de forma más concisa y legible.

### Deconstrucción de Objetos

En la deconstrucción de objetos, puedes extraer propiedades específicas de un objeto y asignarlas a variables con el mismo nombre o a nuevos nombres. Aquí tienes un ejemplo:

```javascript
    const persona = { nombre: 'Juan', edad: 30 };

    const { nombre, edad } = persona;

    console.log(nombre); // 'Juan'
    console.log(edad);   // 30
```

En este ejemplo, la deconstrucción de persona nos permite extraer las propiedades nombre y edad y asignarlas a las variables nombre y edad, respectivamente.

### Deconstrucción de Matrices

En la deconstrucción de matrices, puedes extraer elementos específicos de una matriz y asignarlos a variables individuales. Aquí tienes un ejemplo:

```javascript
    const numeros = [1, 2, 3];

    const [primerNumero, segundoNumero] = numeros;

    console.log(primerNumero); // 1
    console.log(segundoNumero); // 2
```

En este ejemplo, la deconstrucción de numeros nos permite extraer los primeros dos elementos de la matriz y asignarlos a las variables primerNumero y segundoNumero.

### Utilidad de la Deconstrucción de Variables

La deconstrucción de variables es útil para hacer el código más legible y expresivo al extraer valores de objetos o matrices de forma rápida y directa. Puedes utilizarla para descomponer datos complejos en partes más manejables y trabajar con ellas de manera individual.

En resumen, la deconstrucción de variables en JavaScript es una técnica poderosa que te permite extraer valores de objetos o matrices y asignarlos a variables individuales de forma clara y concisa.


## 5.- ¿Qué hace el operador de extensión en JS?


## 6.- ¿Qué es la programación orientada a objetos?


## 7.- ¿Qué es una promesa en JS?


## 8.- ¿Qué hacen async y await por nosotros?



## Bibliografía

### Recursos sobre bucles en JavaScript

1. **Documentación oficial de Mozilla Developer Network (MDN)**:
   - La documentación de JavaScript en MDN es una excelente fuente de información sobre bucles y otros aspectos del lenguaje. Puedes encontrar explicaciones detalladas, ejemplos de código y ejercicios prácticos.
   - Enlace: [MDN JavaScript Guide: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

2. **Libro "Eloquent JavaScript" por Marijn Haverbeke**:
   - Este libro es una excelente lectura para cualquier persona interesada en aprender JavaScript. Ofrece una explicación clara y detallada de los conceptos básicos y avanzados del lenguaje, incluidos los bucles.
   - Enlace: [Eloquent JavaScript](https://eloquentjavascript.net/)

3. **Libro "JavaScript: The Good Parts" por Douglas Crockford**:
   - Aunque este libro se enfoca en las mejores prácticas y las partes buenas de JavaScript, también cubre los conceptos fundamentales, incluidos los bucles, de manera concisa y práctica.
   - Enlace: [JavaScript: The Good Parts](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)

4. **Curso en línea en Codecademy**:
   - Codecademy ofrece cursos interactivos sobre JavaScript que cubren bucles y otros temas importantes del lenguaje. A través de ejercicios prácticos y proyectos, puedes aprender y practicar bucles en JavaScript.
   - Enlace: [Codecademy JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript)

Estas fuentes deberían proporcionarte una comprensión sólida de los bucles en JavaScript y cómo utilizarlos eficazmente en tus proyectos.

### Recursos sobre variables en JavaScript

1. **"Eloquent JavaScript" by Marijn Haverbeke**:
   - Este libro es muy recomendado para aquellos que desean aprender JavaScript desde cero o mejorar sus habilidades en el lenguaje. Ofrece una introducción completa y práctica a JavaScript, cubriendo desde los conceptos básicos hasta temas más avanzados.
   - [Sitio web del libro](https://eloquentjavascript.net/)

2. **"JavaScript: The Good Parts" by Douglas Crockford**:
   - En este libro, Douglas Crockford explora las partes buenas y las mejores prácticas de JavaScript. Es una lectura esencial para cualquier desarrollador que desee entender mejor cómo escribir un código JavaScript claro y efectivo.
   - [Más información sobre el libro](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)

3. **MDN Web Docs**:
   - La documentación oficial de JavaScript proporcionada por Mozilla Developer Network (MDN) es una excelente fuente de información sobre JavaScript. Ofrece explicaciones detalladas, ejemplos de código y referencias para cada aspecto del lenguaje.
   - [Documentación de JavaScript en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

4. **"You Don't Know JS" by Kyle Simpson**:
   - Esta serie de libros cubre diversos aspectos de JavaScript, desde los fundamentos hasta conceptos más avanzados como clausuras y prototipos. Es una lectura recomendada para aquellos que deseen profundizar en el funcionamiento interno de JavaScript.
   - [Sitio web de la serie "You Don't Know JS"](https://github.com/getify/You-Dont-Know-JS)

5. **Codecademy**:
   - Codecademy ofrece cursos interactivos gratuitos sobre JavaScript que son excelentes para principiantes y también para aquellos que deseen repasar o mejorar sus habilidades en el lenguaje.
   - [Cursos de JavaScript en Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)

Estas fuentes son recursos excelentes para aprender JavaScript y mejorar tus habilidades en el lenguaje. ¡Espero que te sean útiles!
