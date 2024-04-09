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

En la deconstrucción de objetos, puedes extraer propiedades específicas de un objeto y asignarlas a variables con el mismo nombre o a nuevos nombres. Un ejemplo:

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

La deconstrucción de variables es útil para hacer el código más legible y expresivo al extraer valores de objetos o matrices de forma rápida y directa. Se puede utilizar para descomponer datos complejos en partes más manejables y trabajar con ellas de manera individual.

En resumen, la deconstrucción de variables en JavaScript es una técnica poderosa que te permite extraer valores de objetos o matrices y asignarlos a variables individuales de forma clara y concisa.


## 5.- ¿Qué hace el operador de extensión en JS?

El operador de extensión, también conocido como el operador de propagación (...), es una característica de JavaScript que permite descomponer elementos de un objeto o una matriz para usarlos de manera más conveniente en otro contexto.

En resumen, el operador de extensión permite expandir elementos de una estructura de datos, como un objeto o una matriz, para usarlos individualmente o combinarlos con otros elementos.

Ejemplo de código:

Imagina que tienes un objeto y quieres crear un nuevo objeto que contenga todas las propiedades del objeto original y algunas propiedades adicionales. Puedes usar el operador de extensión para lograrlo.

```javascript
    // Objeto original
    const persona = { nombre: 'Juan', edad: 30 };

    // Crear un nuevo objeto con todas las propiedades del objeto original y una propiedad adicional
    const nuevaPersona = { ...persona, ciudad: 'Madrid' };

    console.log(nuevaPersona);
    // Output: { nombre: 'Juan', edad: 30, ciudad: 'Madrid' }
```

El operador de extensión (...) en JavaScript facilita la manipulación y combinación de datos al permitir expandir elementos de objetos o matrices en un nuevo contexto.

Un ejemplo más práctico y dinámico:

Imagina que tenemos una función llamada sumar que acepta varios números como argumentos y quieres sumarlos todos. Puedes usar el operador de extensión para pasar todos los argumentos a la función sumar de manera dinámica, sin importar cuántos haya.

```javascript
    function sumar(...numeros) {
        return numeros.reduce((total, num) => total + num, 0);
    }

    const resultado = sumar(1, 2, 3, 4, 5);
    console.log(resultado); // Output: 15
```

En este ejemplo, la función sumar utiliza el operador de extensión `...numeros` para recoger todos los argumentos pasados a la función en un array llamado numeros. Luego, se utiliza el método reduce para sumar todos los números en el array numeros. Esto permite que la función sumar pueda aceptar cualquier cantidad de argumentos y sumarlos todos de manera flexible.

### Ejemplos de Uso

### Primer ejemplo de para qué se puede usar el operador de expansión 

Creo Una variable llamada `carritoDeCompras` y dentro de esta variable, simplemente tenemos varios IDs de productos. Si estás construyendo algún tipo de aplicación en React o Angular, podrías tener un tipo de funcionalidad donde un usuario puede hacer clic en un botón de agregar al carrito y luego lo cargarías en algún tipo de colección como esta.

```javascript
    // Combinando Arrays
    let carritoDeCompras = [345, 375, 765, 123];
```
Imaginemos que tu carrito de compras está lleno de estos cuatro IDs de productos y luego digamos que el usuario dice que quiere seguir comprando. Y así que tienen una nueva variable llamada `nuevosItems` y voy a establecerla simplemente en unos cuantos IDs de productos más, así:

```javascript
    let nuevosItems = [98, 123];
```
Si el usuario quisiera agregar todos estos nuevos artículos al carrito, hay varias formas de hacderlo:

__Formas antiguas__ 

```javascript
    shoppingCart.push(nuevosItems);

    shoppingCart.push(nuevosItems);
    console.log(shoppingCart); // [ 345, 375, 765, 123, [ 93, 123 ] ]
```

Lo que hace push hace es agregar un nuevo elemento a un array. Pero los arrays de JavaScript puedes tener múltiples tipos de datos. Arrays anidados, objetos y todo tipo de elementos diferentes. Por eso JavaScript no entiende cuando quieres agregar un nuevo array. No se da cuenta de que simplemente quieres agregar algunos elementos más. Y ahí es donde puede entrar en juego el operador de expansión y permitirte hacer eso.

```javascript
    shoppingCart.push(...newItems);
    console.log(shoppingCart);  //[345, 375, 765, 123, 98, 123]
```
Ahora ha tomado estos elementos y los distribuye para expandirlos.  Y en lugar de estar dentro de este array, simplemente busca los elementos en el array y los agrega.

### Segundo ejemplo sería copiar arrays. 

Un proceso muy común dentro de programas basados en React o Angular es que no se supone que debes hacer cambios en una estructura de datos. En otras palabras, si tienes una estructura, una vez más, como `shoppingCart`. Si digo `const shoppingCart` y simplemente voy a tomar mis IDs de productos del primer `shoppingCart`.

```javascript
    const shoppingCart = [345, 375, 765, 123];
```
La convención común es que ni siquiera harías cambios en `shoppingCart`. Y esa es parte de la razón por la que se debería usar variables `let` en lugar de una variable `const`.

Pero en un programa como uno que construirías con React o Angular, la convención común es que no cambiarías `shoppingCart`, sino que crearías un nuevo `shoppingCart` y luego agregarías los nuevos elementos a ese. Y parte de la razón es que quieres que tu programa tenga la menor cantidad posible de efectos secundarios. Y si haces un cambio en una estructura de datos existente, entonces si alguna otra parte del programa llama a esa estructura de datos y no se da cuenta de que has hecho cambios en ella, podrías encontrarte con algunos errores bastante desagradables.

Por ejemplo, si agregaste algún tipo de string o algo así al `shoppingCart` y luego alguna otra parte del programa pensó que el `shoppingCart` solo tenía enteros y luego ejecutó un proceso sobre él que solo funciona con enteros, entonces encontraría un error.

Si quieres usar una estructura de datos y luego hacer cambios en ella, lo que quieres hacer es hacer una copia de ella. Hay dos formas que funcionan y una que no. 

__Forma que no funciona__

```javascript
    const shoppingCart = [345, 375, 765, 123];
    const updatedCart = shoppingCart;
    updatedCart.push(5);
    console.log(updatedCart);    // [345, 375, 765, 123, 5]
    console.log(shoppingCart);    // [345, 375, 765, 123, 5]
```

En este caso no funciona, porque realmente no estoy haciendo un acopia del array, sino que le estoy pasando una referencia del originarl `shoppingCart` y es por eso que modifica el original y el nuevo. Y esto es lo que no hay que hacer.

__Forma que funciona__ antigua (slice())

```javascript
    const shoppingCart = [345, 375, 765, 123];
    const updatedCart = shoppingCart.slice();
    updatedCart.push(5);
    console.log(updatedCart);    // [345, 375, 765, 123, 5]
    console.log(shoppingCart);    // [345, 375, 765, 123]
```
Es una forma antigua de usar, pero todavía hay muchos desarrolladores que la utilizan. Slice realiza una copia exacta del original y por eso no la modifica.

__Forma que funciona__  moderna con operador de expansión

```javascript
    const shoppingCart = [345, 375, 765, 123];
    const updatedCart = [...shoppingCart];
    updatedCart.push(5);
    console.log(updatedCart);    // [345, 375, 765, 123, 5]
    console.log(shoppingCart);    // [345, 375, 765, 123]
```
### Tercer ejemplo usar con los argumentos de funciones

Usando por ejemplo la biblioteca `Math`.

```javascript
    console.log(Math.max(1, 5, 1, 10, 2, 3));   //10
```

Ahora, si tuvieras una gran colección de valores y quisieras ver cuál es el más alto.

```javascript
    const orderTotals = [1, 5, 1, 10, 2, 3];
```
Y queremos ver cuál es el más grande y intentamos pasar la variable que tiene dicha colección, nos dará un error.

```javascript
    const orderTotals = [1, 5, 1, 10, 2, 3];
    console.log(Math.max(orderTotals));  // NaN "no es un número"
```

Lo que estamos haciendo con `orderTotals` es que solo estamos pasando un argumento. Solo estamos pasando un argumento y ni siquiera es un número, es un array. Y por eso `Math.max` no sabe qué hacer con él. Y esa es la razón por la que no es un número.

Con el operador de expansión, lo que va a hacer es tomar este array y lo va a expandir. Va a tomar cada elemento en el array y luego lo convertirá en un conjunto de argumentos de función. Así que si guardo y ejecuto, verás que ahora volvemos a obtener el valor correcto.

```javascript
    const orderTotals = [1, 5, 1, 10, 2, 3];
    console.log(Math.max(...orderTotals));
```

### Cuarto ejemplo usar el operador de expansión para trabajar con la deconstrucción de objetos. 

Crear un objeto con una alineación de béisbol:

```javascript
    const pitchers = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregerson'
    }
```
Y existe la posibilidad de que podamos tener cualquier cantidad de lanzadores de relevo (relief) si estás construyendo esto para una aplicación de registro de puntuaciones o algo así. Entonces no vas a saber cuántos lanzadores de relevo tienes en un equipo dado, cambia prácticamente a diario. Así que no puedes codificar esto, sabes que vas a tener un titular, sabes que vas a tener un cerrador y tienes algunas reglas fijas y sólidas. Pero luego hay una serie de elementos que van a ser variables, que van a cambiar cada vez. Y ahí es donde el operador de expansión puede ayudarnos a realizar la deconstrucción. 

A grego llaves delante y así es como podemos realizar la deconstrucción de objetos, hemos hablado sobre la construcción de variables y arrays. Esto es específicamente cómo podemos trabajar con la deconstrucción de objetos. Agregando las claves starter y closer y lo imprimo por consola:

```javascript
    const { starter, closer, ...relieves } = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregerson'
    }

    console.log(starter);
    console.log(closer);
    console.log(relieves);
    // "Verlander"
    // "Giles"
    // { relief_1: 'Morton', relief_2: 'Gregerson' }
```

## 6.- ¿Qué es la programación orientada a objetos?

La programación orientada a objetos (POO) es un paradigma de programación que se basa en el concepto de "objetos", que son entidades que combinan estado (datos) y comportamiento (métodos) en un solo lugar. En la POO, los objetos interactúan entre sí a través de mensajes, lo que permite modelar y representar sistemas complejos de manera más intuitiva y modular.

Los principales conceptos de la programación orientada a objetos incluyen:

- **Clases**: Las clases son plantillas o moldes para crear objetos. Definen las propiedades y métodos que los objetos de esa clase tendrán.
- **Objetos**: Los objetos son instancias de una clase. Cada objeto tiene su propio estado (datos) y comportamiento (métodos), pero comparte la estructura definida por la clase.
- **Encapsulamiento**: El encapsulamiento es el proceso de ocultar la implementación interna de un objeto y exponer solo la interfaz pública. Esto permite proteger los datos de un objeto y garantizar su integridad.
- **Herencia**: La herencia es un mecanismo que permite que una clase herede propiedades y métodos de otra clase. Esto promueve la reutilización de código y facilita la creación de jerarquías de clases.
- **Polimorfismo**: El polimorfismo permite que un objeto se comporte de diferentes maneras según el contexto. Esto se logra mediante el uso de métodos con el mismo nombre pero diferentes implementaciones en diferentes clases.

Ejemplo de cada uno de los conceptos principales:

### CLASES

```javascript
    // Definición de una clase "Perro"
    class Perro {
    // Constructor que inicializa la propiedad nombre
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    // Método para ladrar
    ladrar() {
        console.log("¡Guau! ¡Guau!");
    }
    }
```
### OBJETOS

Siguiendo con elejemplo anterior de clase Perro:

```javascript
    // Creación de un objeto perro usando la clase
    const miPerro = new Perro("Rex");

    // Llamada al método para ladrar
    miPerro.ladrar();
```

### ENCAPSULAMIENTO

```javascript
    // Definición de una clase "CuentaBancaria"
    class CuentaBancaria {
    // Constructor que inicializa el saldo
    constructor(saldoInicial) {
        let saldo = saldoInicial; // Propiedad privada
        
        // Método para obtener el saldo
        this.getSaldo = function() {
        return saldo;
        };
        
        // Método para depositar dinero
        this.depositar = function(monto) {
        saldo += monto;
        };
        
        // Método para retirar dinero
        this.retirar = function(monto) {
        saldo -= monto;
        };
    }
    }

    // Creación de un objeto cuenta bancaria usando la clase
    const miCuenta = new CuentaBancaria(1000);

    // Intento de acceder al saldo directamente (no es posible debido al encapsulamiento)
    console.log(miCuenta.saldo); // Output: undefined

    // Acceso al saldo a través del método getSaldo
    console.log(miCuenta.getSaldo()); // Output: 1000
```

### HERENCIA

```javascript
    // Definición de una clase "Animal"
    class Animal {
    // Método para comer
    comer() {
        console.log("El animal está comiendo.");
    }
    }

    // Definición de una clase "Perro" que hereda de la clase "Animal"
    class Perro extends Animal {
    // Método para ladrar
    ladrar() {
        console.log("¡Guau! ¡Guau!");
    }
    }

    // Creación de un objeto perro usando la clase
    const miPerro = new Perro();

    // Llamada al método para comer de la clase padre
    miPerro.comer(); // Output: El animal está comiendo.

    // Llamada al método para ladrar la clase perro
    miPerro.ladrar(); // Output: ¡Guau! ¡Guau!
```

### POLIMORFISMO

```javascript
    // Definición de una clase "Vehiculo"
    class Vehiculo {
    // Método para obtener la descripción del vehículo
    describir() {
        console.log("Este es un vehículo genérico.");
    }
    }

    // Definición de una clase "Automovil" que hereda de la clase "Vehiculo"
    class Automovil extends Vehiculo {
    // Método para obtener la descripción específica del automóvil
    describir() {
        console.log("Este es un automóvil.");
    }
    }

    // Definición de una clase "Motocicleta" que hereda de la clase "Vehiculo"
    class Motocicleta extends Vehiculo {
    // Método para obtener la descripción específica de la motocicleta
    describir() {
        console.log("Esta es una motocicleta.");
    }
    }

    // Creación de un array de vehículos
    const vehiculos = [new Automovil(), new Motocicleta()];

    // Iteración sobre el array y llamada al método describir de cada vehículo
    vehiculos.forEach(vehiculo => {
    vehiculo.describir();
    });
```

## 7.- ¿Qué es una promesa en JS?

Una promesa en JavaScript es un objeto que representa la eventual finalización (o falla) de una operación asíncrona. Es una forma de manejar operaciones asíncronas de manera más elegante y fácilmente legible que los callbacks anidados.

Las promesas tienen tres estados posibles:

1. `Pendiente` (pending): Estado inicial de la promesa. La operación aún no se ha completado.
2. `Resuelta` (fulfilled): La operación se completó exitosamente.
3. `Rechazada` (rejected): La operación falló.

Una vez que una promesa está en uno de estos estados, permanece en ese estado y no puede cambiar.

Las promesas en JavaScript se pueden crear usando el constructor Promise. Este constructor toma una función ejecutora como argumento, que a su vez toma dos argumentos, resolve y reject, que son funciones proporcionadas por JavaScript para cambiar el estado de la promesa de pendiente a resuelta o rechazada, respectivamente.

Ejemplo de uso de promesa:

```javascript
    // Ejemplo de una función que retorna una promesa
    function obtenerDatos() {
    // Retorna una nueva promesa
    return new Promise((resolve, reject) => {
        // Simulación de una operación asíncrona (por ejemplo, una solicitud HTTP)
        setTimeout(() => {
            const exito = true;
            if (exito) {
                // Si la operación fue exitosa, llamamos a resolve con los datos obtenidos
                resolve("Datos obtenidos correctamente");
            } else {
                // Si la operación falló, llamamos a reject con un error
                reject("Error al obtener los datos");
            }
            }, 2000); // Simulación de un tiempo de espera de 2 segundos
        });
    }

    // Uso de la promesa
    obtenerDatos()
        .then(datos => {
            // Si la promesa se resuelve exitosamente, se ejecuta este código
            console.log(datos); // Output: Datos obtenidos correctamente
        })
        .catch(error => {
            // Si la promesa es rechazada, se ejecuta este código
            console.error(error); // Output: Error al obtener los datos
        });
```

### Fech 

`fetch` es una función incorporada en JavaScript que se utiliza para realizar solicitudes de red (por ejemplo, solicitudes HTTP) de manera asíncrona. Se utiliza principalmente para realizar solicitudes AJAX y obtener recursos de servidores web.

Una de las características más poderosas de fetch es que devuelve una promesa, lo que facilita el manejo de respuestas de red de manera asíncrona y elegante mediante el uso de then y catch.

Un ejemplo:

```javascript
    const postsPromise = fetch('https://api.dailysmarty.com/posts');

    postsPromise
    .then(response => {
        // Verificamos si la respuesta de la solicitud es exitosa (código de estado 200)
        if (!response.ok) {
        throw new Error('Ocurrió un error al obtener los datos');
        }
        // Parseamos la respuesta como JSON
        return response.json();
    })
    .then(postsData => {
        // Iteramos sobre los datos de los posts y mostramos los títulos
        postsData.posts.forEach(post => {
        console.log(post.title);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

Utilizamos fetch para hacer una solicitud a la URL de la API.

Luego, encadenamos métodos .then() para manejar la respuesta de la solicitud. En el primer .then(), verificamos si la respuesta es exitosa y parseamos los datos JSON. En el segundo .then(), iteramos sobre los datos de los posts y mostramos los títulos.
Utilizamos .catch() para manejar cualquier error que ocurra durante el proceso de obtención de datos.

Este código solicitará los datos de la API, los parseará como JSON y luego imprimirá los títulos de cada post en la consola.

### Agrupando promesas

Una agrupación de promesas en JavaScript es cuando tienes un conjunto de promesas y deseas esperar a que todas se resuelvan o se rechacen antes de realizar alguna acción adicional. Se utiliza para coordinar múltiples tareas asíncronas y ejecutar un código una vez que todas esas tareas hayan finalizado.

Un ejemplo común es cuando necesitas hacer varias solicitudes a diferentes endpoints de una API y quieres procesar los resultados solo después de que todas las solicitudes hayan sido completadas.

Aquí tienes un ejemplo de código que utiliza Promise.all() para agrupar promesas:

```javascript
    // Supongamos que tenemos tres funciones que devuelven promesas que representan solicitudes a diferentes endpoints de una API
    const request1 = fetch('https://api.example.com/endpoint1');
    const request2 = fetch('https://api.example.com/endpoint2');
    const request3 = fetch('https://api.example.com/endpoint3');

    // Utilizamos Promise.all() para agrupar las promesas
    Promise.all([request1, request2, request3])
    .then(responses => {
        // responses es un array que contiene las respuestas de las tres solicitudes
        // Podemos trabajar con los datos de cada respuesta aquí
        return Promise.all(responses.map(response => response.json())); // Parseamos cada respuesta como JSON
    })
    .then(data => {
        // data es un array que contiene los datos JSON de las tres respuestas
        // Podemos trabajar con los datos de cada respuesta aquí
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```
En este ejemplo:

- Creamos tres promesas request1, request2 y request3, que representan solicitudes a diferentes endpoints de una API.
Utilizamos Promise.all([request1, request2, request3]) para agrupar estas promesas en una sola promesa. Esta nueva promesa se resolverá solo cuando todas las promesas en el array hayan sido resueltas, o se rechazará si alguna de ellas es rechazada.

- En el primer .then(), obtenemos un array responses que contiene las respuestas de las tres solicitudes. Aquí podríamos realizar algún procesamiento adicional si fuera necesario.
  
- Luego, usamos responses.map(response => response.json()) para mapear cada respuesta a su método json(), lo que devuelve una promesa para parsear el cuerpo de la respuesta como JSON.
  
- Finalmente, en el segundo .then(), obtenemos un array data que contiene los datos JSON de las tres respuestas. Podemos trabajar con estos datos según sea necesario.
  
- En resumen, Promise.all() nos permite esperar a que múltiples promesas se resuelvan o se rechacen antes de continuar con la ejecución del código. Esto es útil cuando necesitamos coordinar varias tareas asíncronas y queremos manejarlas de manera eficiente.


## 8.- ¿Qué hacen async y await por nosotros?

`async` y `await` se utilizan para simplificar el manejo de operaciones asíncronas en JavaScript. Permiten escribir código que es más legible y fácil de entender, al hacer que las operaciones asíncronas se vean y se comporten de manera similar a las operaciones síncronas. Esto mejora la claridad del código y facilita el manejo de la lógica asíncrona en JavaScript.


- `async`: Es una palabra clave que se utiliza para declarar una función asíncrona. Cuando declaras una función como async, esto significa que esa función siempre devolverá una promesa, incluso si no la estás devolviendo explícitamente. Esto facilita el manejo de operaciones asíncronas dentro de la función.

- `await`: Es una palabra clave que se utiliza dentro de una función async para esperar a que una promesa se resuelva antes de continuar con la ejecución del código. Esto hace que el código parezca síncrono, incluso cuando está tratando con operaciones asíncronas.

```javascript
    const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('User logged in...');
        }, 2000);
    });
    }

    const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Updating last login...');
        }, 2000);
    });
    }

    async function loginActivities() {
    const returnedLogin = await login();
    console.log(returnedLogin);

    const returnedUpdateAccount = await updateAccount();
    console.log(returnedUpdateAccount);
    }

    loginActivities();
```

### Async y await usando closures (cierres)

Cuando utilizas closures con async y await en JavaScript, estás combinando dos conceptos poderosos para controlar el flujo asíncrono y el ámbito de las variables en tu código.

Un cierre (closure) en JavaScript es una función que tiene acceso al ámbito en el que fue creada, incluso después de que esa función haya salido de ese ámbito. Esto significa que una función dentro de otra función puede acceder a las variables de la función exterior, incluso después de que la función exterior haya terminado de ejecutarse.

Cuando usas async y await dentro de una función que tiene acceso a variables externas (creando así un cierre), estas variables pueden ser utilizadas dentro de las funciones asíncronas con await. Esto es útil porque te permite compartir información entre el ámbito exterior y las funciones asíncronas que estás esperando.

Además, cuando utilizas closures con async y await en situaciones como un login con actualización de cuenta, puedes obtener resultados simultáneos de múltiples promesas, incluso si estás esperando por ellas con await. Es decir no ejecuta el resolve del primer promise y milisegundos después el del segundo. 

Esto se debe a que las funciones asíncronas creadas con async y await son capaces de mantener el contexto y el estado de las variables exteriores a través de los closures. Por lo tanto, aunque estemos esperando a que una operación asíncrona se complete antes de continuar con la ejecución del código, otras operaciones que también están en curso pueden continuar ejecutándose en segundo plano.

```javascript
    const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('User logged in...');
        }, 2000);
    });
    }

    const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Updating last login...');
        }, 2000);
    });
    }

    async function loginActivities(login, updateAccount) {
    const returnedLogin = await login();
    console.log(returnedLogin);

    const returnedUpdateAccount = await updateAccount();
    console.log(returnedUpdateAccount);
    }

    loginActivities(login(), updateAccount());
```

### Async y await con varias consultas a APIs externas

```javascript
    async function queryApis() {
    const postsPromise = fetch('https://api.dailysmarty.com/posts');
    const posts = await postsPromise.then(res => res.json());
    console.log(posts);

    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
    }

    queryApis();
```

Lo lógico es que controlemos los errores. Si una llamada da error nos de el mensaje correspondiente. Es importante encapsular en un try catch todos los procesos que no queramos que ese ejecuten si da error en la llamada a la API. 

En este caso son dos llamadas a APIs y no nos importa si la primera da error queremos que siga y lo intente con la segunda por eso encapsulamos a cada llamada con un try catch.

```javascript
    async function queryApis() {
    try {
        const postsPromise = fetch('http://api.dailysmarty.com/posts');
        const posts = await postsPromise.then(res => res.json());
        console.log(posts);
    } catch(err) {
        console.log(err);
        console.log('There was an error with the DailySmarty API');
    }

    try {
        const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
        const repos = await reposPromise.then(res => res.json());
        console.log(repos);
    } catch(err) {
        console.log(err);
        console.log('There was an error with the GitHub API');
    }
    }

    queryApis();
```

## Bibliografía

1. **Libro "Eloquent JavaScript" por Marijn Haverbeke**:
   - Este libro es una excelente lectura para cualquier persona interesada en aprender JavaScript. Ofrece una explicación clara y detallada de los conceptos básicos y avanzados del lenguaje, incluidos los bucles.
   - Enlace: [Eloquent JavaScript](https://eloquentjavascript.net/)

2. **Libro "JavaScript: The Good Parts" por Douglas Crockford**:
   - Aunque este libro se enfoca en las mejores prácticas y las partes buenas de JavaScript, también cubre los conceptos fundamentales.
   - Enlace: [JavaScript: The Good Parts](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)

3. **Curso en línea en Codecademy**:
   - Codecademy ofrece cursos interactivos sobre JavaScript que cubren bucles y otros temas importantes del lenguaje. A través de ejercicios prácticos y proyectos, puedes aprender y practicar bucles en JavaScript.
   - Enlace: [Codecademy JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript)

4. **MDN Web Docs**:
   - La documentación oficial de JavaScript proporcionada por Mozilla Developer Network (MDN) es una excelente fuente de información sobre JavaScript. Ofrece explicaciones detalladas, ejemplos de código y referencias para cada aspecto del lenguaje.
   - [Documentación de JavaScript en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
  
5. **"You Don't Know JS" by Kyle Simpson**:
   - Esta serie de libros cubre diversos aspectos de JavaScript, desde los fundamentos hasta conceptos más avanzados como clausuras y prototipos. Es una lectura recomendada para aquellos que deseen profundizar en el funcionamiento interno de JavaScript.
   - [Sitio web de la serie "You Don't Know JS"](https://github.com/getify/You-Dont-Know-JS)


### Recursos sobre bucles en JavaScript

1. **Documentación oficial de Mozilla Developer Network (MDN)**:
   - La documentación de JavaScript en MDN es una excelente fuente de información sobre bucles y otros aspectos del lenguaje. Puedes encontrar explicaciones detalladas, ejemplos de código y ejercicios prácticos.
   - Enlace: [MDN JavaScript Guide: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)


### Recursos sobre variables en JavaScript

1. **"JavaScript for Beginners: Understanding let, const, and var" by freeCodeCamp**:
   - Este artículo de freeCodeCamp proporciona una introducción clara y concisa a las diferencias entre `const`, `let` y `var` en JavaScript. Explica cómo cada una de estas palabras clave se utiliza para declarar variables, sus alcances y cuándo se deben utilizar.
   - [Artículo en freeCodeCamp](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

### Recursos sobre funciones flecha en JavaScript

1. **MDN Web Docs**:
   - La documentación oficial de JavaScript proporcionada por Mozilla Developer Network (MDN) ofrece una explicación detallada sobre las funciones flecha, incluyendo su sintaxis, comportamiento y ejemplos de uso.
   - [Documentación de funciones flecha en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

2. **YouTube**:
   - Plataformas como YouTube ofrecen una gran cantidad de tutoriales y conferencias sobre JavaScript, donde puedes encontrar explicaciones detalladas sobre las funciones flecha y ejemplos de su uso en la práctica.
   - [Canal de JavaScript en YouTube](https://www.youtube.com/results?search_query=javascript+arrow+functions)

### Recursos desconstrucciones de variables en JavaScript

1. **MDN Web Docs**:
   - La documentación oficial de JavaScript proporcionada por Mozilla Developer Network (MDN) ofrece una explicación detallada sobre la deconstrucción de variables, incluyendo ejemplos de uso y casos de uso comunes. Es una excelente referencia para principiantes que desean aprender más sobre esta característica.
   - [Documentación de JavaScript en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


### Recursos sobre operador de extensión

1. **MDN Web Docs**:
   - La documentación oficial de JavaScript proporcionada por Mozilla Developer Network (MDN) ofrece una explicación detallada sobre el operador de propagación, incluyendo ejemplos de uso y casos de uso comunes.
   - [Documentación sobre el operador de propagación en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Recursos sobre POO

1. **Pildoras informáticas**:
   - Video de javaScript proporcionado por Pildoras informáticas:
   - [Video 9 sobre POO](https://www.pildorasinformaticas.es/unit/javascript-desde-0-poo-i-video-9/)

2. **Gekks.ms**:
   - Documentación de JavaScript proporcionada por geeks.ms sobre POO:
   - [Documentación sobre POO](https://geeks.ms/etomas/2013/10/25/es-javascript-orientado-a-objetos/)


### Recursos sobre Promise

1. **MDN Web Docs**:
   - La documentación oficial de JavaScript proporcionada por Mozilla Developer Network (MDN) ofrece una explicación detallada sobre promesas.
   - [Documentación sobre promesas en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

2. **Salesforce**:
   - Documentación sobre promesas de JavaScript.
   - [Documentación sobre promesas en salesforce](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_promises.htm)

### Recursos sobre async y await

1. **MDN Web Docs**:
   - La documentación oficial de JavaScript proporcionada por Mozilla Developer Network (MDN) ofrece una explicación detallada
   - [Documentación sobre async y await en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)


