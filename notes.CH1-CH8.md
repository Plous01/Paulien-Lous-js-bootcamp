# Introduction
**Programming** = the act of constructing a program (set of precise intrustions).

Programming language = artificially constructed language used to intruct computers.

**ECMAScript** = a standard document to describe the way the JavaScript language should work so that various pieces of software that claimed to support JavaScript were actually talking about the same language.

Node.js provide an environment for programming JavaScript outsite of the browser.
- - - -
# Chapter 1 Values, Types, and Operators
**Bits** = tweetallige cijfers die slechts uit enen en nullen bestaan.

### Values (waarden)
Values met een nummer zijn numerieke values.   
* _Bijvoorbeeld_: 20

JavaScript gebruikt een vast aantal bits (64) om een getalwaarde in op te slaan. Dat is enorm, want: 2^64 binaire cijfers.

* Fractionele nummers worden met een punt geschreven.
_Bijvoorbeeld:_ 9.81_

* Grote getallen
_Bijvoorbeeld_ 2.99e8 (2.998 x 10^8 = 299.800.00)_

! **fractionele getallen** behandelen als benadering, niet als precieze waarden.

### Arithmetic
_Bijvoorbeeld_: (100 + 8) * 11_

**Operators:**
* **+**(optellen)
* **-**(aftrekken)
* *****(vermenigvuldigen)
* **/**(delen)
* **%** (restbewerking/modulo)

### Special numbers
Drie values in JS die gezien worden als nummers, maar zich niet zoals normale getallen gedragen:
* **Infinity**_(positive infinities)_
* **-Infinity**_(negatieve infinities)_
* **NaN**_(not a number)_

### Strings
Strings representeren tekst, in quotes (die hetzelfde zijn voor en na de tekst).
_Bijvoorbeeld_: ‘Down on the sea’ of “Lie on the ocean”_

**Newlines** = karakters als je op ENTER klikt.

_Speciale betekenis, gebruik een \_
_/_Bijvoorbeeld_: /_
“This is the first line\nAnd this is the second”
___Daar staat dus: ___
This is the first line
And this is the second

Geen speciale betekenis, gebruik
___Bijvoorbeeld:___ “A newline character is written like \”\\n\”.”/
__Daar staat dus:_/_ A newline character is written like “\n”.

**Unicode standard** = internationale standaard voor de codering van binaire codes naar grafische tekens en symbolen, vergelijkbaar met ASCII.

Als we een nummer hebben voor elk karakter, dan kan een string beschreven worden als een reeks nummers.

Strings kunnen niet gedeeld of vermenigvuldigd worden, maar met een + lijm je als het ware twee strings samen.

**Backtick-quoted strings (template literals**) kunnen lijnen overspannen en andere waarden insluiten.
__Bijvoorbeeld:__ `half of 100 is ${100 / 2}`
__Daar staat dus:__  half of 100 is 50

### Unary operators
Niet alle operators zijn symbolen, bv. de typeof operator (die een string value produceert in het type dat je hem hebt gegeven).
```javascript
//_Bijvoorbeeld:_/
console.log(typeof 4.5)
// → number
console.log(typeof “x”)
// → string
```
**Binary operators** = operators die twee waarden gebruiken.
**Unary operators** = operators die een waarde gebruiken.
**Ternary operators** = operators die drie waarden gebruiken.

Minus operator kan zowel binary als unary worden gebruikt
```javascript
//_Bijvoorbeeld:_/
console.log(- (10 - 2))
// → -8
```

### Boolean values
Boolean heeft twee waarden, namelijk true of false.

#### Comparison
```javascript
//```javascript_Bijvoorbeeld:_/
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
```

Hoofdletters zijn altijd ‘less’ dan kleine letters, dus “Z” kleiner dan “a”.

Andere vergelijkbare operators:
* >= groter dan of gelijk aan
* <= kleiner dan of gelijk aan
* == gelijk aan
* != niet gelijk aan

Uitzondering:
console.log(NaN == NaN)
 → false

#### Logical operators
JS supports drie logical operators:
* && And
* || Or
* ! Not (!true geeft false, en !false geeft true)

|| heeft de laagste prioriteit, vervolgens &&, dan de vergelijkingsoperatoren (>, ==, etc.).

**Ternary operator** werkt op drie waarden (ook wel de conditional operator). De waarde aan de linkerkant van vraagteken kiest welke van de andere waarde eruit komt. Als het waar is dan de middelste waarde, als het false is de waarde rechts.
```JavaScript
/_Bijvoorbeeld:_/
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```

### Empty values
Twee speciale values: **empty** en **undefined** (die afwezigheid zinvolle waarde aanduiden).

### Automatic type conversion
**Type coercion** = wanneer een operator wordt toegepast op het verkeerde type waarde, zal JS die waarde converteren naar het type dat het nodig heeft.

```javascript
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```

Als je niet wil dat conversies met typen gebeuren, gebruik dan === en !== (dan moeten ze exact aan elkaar gelijk zijn, of juist niet).

#### Short-circuiting of logical operators
```JavaScript
console.log(null || “user”)
// → user
console.log(“Agnes” || “user”)
// → Agnes
```

- - - -

# Chapter 2 Program structure
### Expressions and statements
**Expression** = een fragment code die een waarde produceert.

Een programma is een lijst van statements.

Een **statement** staat op zichzelf, dus het is alleen iets als het de wereld beïnvloedt.

* Het zou iets op het scherm kunnen weergeven of het zou de interne status van de machine kunnen veranderen op een manier die van invloed is op de uispraken die erna komen (**side effects**).

### Bindings
Om values te vangen en vast te houden  binding, of variabele.

`let caught = 5 * 5;`

Nadat een binding is gedefinieerd kan de naam worden gebruikt als een expression.

```javascript
let ten = 10;
console.log(ten * ten);
// → 100
```

### Binding names
Een naam mag niet beginnen met een nummer. Een naam mag een $ of een _ bevatten, maar verder niets.

### The environment
**Enviroment**= de collectie van bindings en hun values die bestaan op een bepaald moment.

### Functions
Veel van de values in de default environment hebben het type function (een stukje programma verpakt in een value).

**Prompt**  bevat een function die een klein dialoogvenster toont waarin om invoer van de gebruiker wordt gevraagd.

**Invoking, calling of applying**  uitvoeren van een function.

**Arguments** = values die je toekent aan een function

### The console.log function
De **console.log function** is geen eenvoudige binding. Het is in feite een expressie die de log-eigenschap ophaalt uit de waarde die door de consolebinding wordt gehouden.

### Control flow
Als je programma meer dan een statement heeft, dan wordt de code gelezen van boven naar beneden.

### Contructional execution
**Conditional execution** = wanneer je een vertakkende weg wil maken, waar het programma de juiste tak naamt op basis van de situatie bij de hand.

Conditional execution door een **if/else statement.**

**Number.isNaN** = standaard JS function die true returned alleen als het argument dat gegeven is NaN.

{} kunnen gebruikt worden om een willekeurig aantal statements te groeperen in een enkel statement.

### While and do loops
**Looping control flows**  kunnen we teruggaan naar een bepaald punt in het programma waar we eerder waren en dit herhalen.

**While** = als je niet weet hoe vaak de code gedraaid moet worden.
Do while = de loopt draait sowieso een keer, ongeacht als de condition false is.

De loop blijft draaien net zolang totdat de expression een waarde oplevert wanneer deze wordt geconverteerd naar boolean.

```javascript
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024
```

Een **do-loop** voert zijn body minstens een keer uit, en hij bekijkt dan of hij moet stoppen na die ene keer.

```javascript
let yourName;
do {
  yourName = prompt(“Who are you?”);
} while (!yourName);
console.log(yourName);
```

### Indenting code
Inspringen is belangrijk zodat de structuur duidelijk wordt.

### For loops
Een **for loop** heeft een counter die aangeeft hoe vaak de loop gaat draaien.

```javascript
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
```

```javascript
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```

### Breaking out of a loop
Met het statement **break** kun je gelijk uit de loop ‘jumpen’.

```javascript
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
```

Continue is vergelijkbaar met break, dan gaat ‘ie gelijk naar de volgende iteratie in de loop.

### Updating bindings succinctly (kort en bonding)
`counter = counter + 1### `; is hetzelfde als `counter += 1;`

Voor counter+=1 ### en counter-=1 ### zijn er nog kortere versies: counter++ ### en counter—.

### Dispatching on a value with switch
Er is een construct genaamd switch dat bedoeld is om een dergelijke ‘verzending’ op een meer directe manier uit te drukken. Elke case duidt op een mogelijke value voor deze variabele en de code die moet draaien als de variabele matches true zijn.

```javascript
switch (prompt(“What is the weather like?”)) {
  case “rainy”:
    console.log(“Remember to bring an umbrella.”);
    break;
  case “sunny”:
    console.log(“Dress lightly.”);
  case “cloudy”:
    console.log(“Go outside.”);
    break;
  default:
    console.log(“Unknown weather type!”);
    break;
}
```

### Capitalization
Binding names mogen geen spaties hebben en het is handig om meerdere woorden te gebruiken.

Gebruik **camelcase**.

### Comments
**Comment** = stukje tekst dat deel uitmaakt van het programma, maar wat door de computer genegeerd wordt.
* voor een regel
* _*comment *_ voor meerdere regels
*
- - - -

# Chapter 3 Functions
**Functions** = kan je een aantal statements samenvoegen die een taak moeten uitvoeren. Je kan een functie hergebruiken, in tegenstelling tot dezelfde statements.

### Defining a function
Een function is een regular binding waar de value van de binding een function is.

Geen parameter:

```javascript
const makeNoise = function() {
  console.log(“Pling!”);
};

makeNoise();
// → Pling!
```

Twee parameters:

```javascript
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024
```

Een **return** statement bepaalt de waarde die de function teruggeeft. Parameters van een function gedragen zich als normale bindings, maar hun beginwaarden worden gegeven door de caller van de function, niet door de code in de function.

### Bindings and scopes
Elke binding heeft een scope, die deel uitmaakt van het programma waarin de binding zichtbaar is.

**Global scope** = als je een variabele buiten de function zet, dan kan het overal gebruikt worden in het script.

**Local scope** = als een variabele in een function wordt gebruikt, en hij dus alleen hier binnenin kan worden gebruikt.

Bindings die gedeclareerd zijn met let en const zijn in feite local van het block waarin ze gedefinieerd zijn, dus als je een loopje maakt, dan kan de code voor- en na de loop ze niet zien.

```javascript
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40

```

```javascript
const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
```

### Nested scope
Blocks en functions kunnen in andere blocks en functions worden gemaakt en zorgen voor meedere graden van lokaliteit.

```javascript
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += “s”;
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, “can”, “chickpeas”);
  ingredient(0.25, “cup”, “tahini”);
  ingredient(0.25, “cup”, “lemon juice”);
  ingredient(1, “clove”, “garlic”);
  ingredient(2, “tablespoon”, “olive oil”);
  ingredient(0.5, “teaspoon”, “cumin”);
};
```

**Lexical scoping** = de reeks bindingen die zichtbaar zijn in een blok wordt bepaald door de plaats in de programmatekst. Elke local scope kan ook alle local scopes zien binnen zijn bereik, en al de scopes kunnen de global scope zien.

### Functions as values
Een function value kan alles doen wat andere values ook kunnen.

```javascript
> let launchMissiles = function() {
>   missileSystem.launch(“now”);
> };
> if (safeMode) {
>   launchMissiles = function() {/* do nothing */};
> }
```

### Declaration notation
```javascript
console.log(“The future says:”, future());

function future() {
  return “You’ll never have flying cars”;
}
```

Deze code werkt, ook al wordt de functie van onder de code gedefinieerd.

### Arrow functions
In plaats van het woord function, kun je ook => gebruiken.

```javascript
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```

Als er maar een parameter in de functie is, kan dat ook al volgt worden geschreven:
```javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
```

Als er geen enkele parameter is, dan komen er lege ()
```javascript
const horn = () => {
  console.log(“Toot”);
};
```

### The call stack
**Call stack** = omdat een functie terug moet springen naar de plaats die de functie heeft opgeroepen toen deze terugkeerde, moet de computer de context onthouden van waaruit de oproep plaatsvond. Call stack is dus de plaats waar de computer de context in opslaat. Elke keer dat een function wordt aangeroepen zal de huidige context bovenop de stack worden gezet. Als een functions returns, dan wordt de top context weggehaald van de stack om de uitvoering voort te zetten.

Als er geen ruimte meer is in de stack  ‘blow the stack’.

### Optional arguments
Als je te veel arguments doorgeeft, dan worden de extra arguments genegeerd. Bij te weinig worden ze undefined.
```javascript
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```

Als je een = operator na een parameter schrijft, gevolgd door een expression, dan zal de value of die expression het argument vervangen als die niet is gegeven.
```javascript
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```

### Closure
**Closure** = in staat zijn om te verwijzen naar een specifiek exemplaar van een lokale binding in een insluitende scope; een function die verwijst naar bindings van local scopes eromheen.
```javascript
function multiplier(factor) {
  return number => number * factor;
}
```

```javascript
let twice = multiplier(2);
console.log(twice(5));
// → 10
```
Beschouw function values als het bevatten van zowel de code in hun lichaam als de omgeving waarin ze zijn gemaakt. Wanneer het wordt aangeroepen, ziet het function body de omgeving waarin het is gemaakt, niet de omgeving waarin het wordt uitgeroepen.

### Recursion
**Recursive** = een function die zichzelf aanroept.
```javascript
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8
```

Bovenstaande functie duurt alleen drie keer zo lang als een loop. Een loopje werkt meestal sneller. Sommige recusive functions zijn makkelijker dan een loopje.
```javascript
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, “1”);
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
```

### Growing functions
Door .length achter een string expression te schrijven zal de lengte van de string geven.
```javascript
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = “0” + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = “0” + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

Bovenstaande code kun je veel makkelijker opschrijven:
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = “0” + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
```

### Functions and side effects
Functions kunnen onderverdeeld worden in:
* * Functions voor hun side effects
* * Functions die aangeroepen worden voor hun return value

Functions die waarden creëren zijn gemakkelijker op nieuwe manieren te combineren dan functions die direct bijwerkingen veroorzaken.

**Pure function** = specifieke value-producing function die geen side effects heeft e nook niet afhankelijk is van de side effects van andere code (bv. het leest geen globale bindingen waarvan de waarde kan veranderen).Wanneer een pure function met dezelfde argumenten wordt aangeroepen, deze altijd dezelfde waarde produceert. Rekensnelheid kan een reden zijn om purity te vermijden.

```javascript
// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;
```

# Chapter 4 Data structures: objects and arrays
**Object** maken het mogelijk om values te groeperen, voor meer complexe structuren.

### Data sets
**Array** = data type om sequences values in op te slaan. Het eerste index van een array is 0.

### Properties
Bijna alle JS values hebben properties, behalve null en undefined.
Twee manieren om toegang tot properties in JS te krijgen  via een . en een [].
* Beide value.x en value[x] geven toegang tot een property on value, maar niet per se dezelfde.

Property names zijn strings.

The .length property van een array geeft aan hoeveel elementen erin zitten.

### Methods
String en array object hebben een bepaald aantal properties die function values vasthoudt.

```javascript
let doh = “Doh”;
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
```

Properties die andere functies bevatten worden methods van de value genoemd waar ze bij horen.

**Stack** = data structure waarmee je values in kan pushen en ze weer in tegengesteld volgorde eruit kunt halen, zodat het laatst toegevoegde ding eerst wordt verwijderd.

### Objects
Object= een collectie van properties.
```javascript
let day1 = {
  squirrel: false,
  events: [“work”, “touched tree”, “pizza”, “running”]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
```

Braces hebben twee betekenissen in JS:
* Aan het begin van een statement starten ze een blok met statements
* Ze beschrijven een object

**Delete operator** snijdt een ‘tentakel’ van de octopus af (octopusmodel, ze grijpen values vast), het is een unary operator.
```javascript
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log(“left” in anObject);
// → false
console.log(“right” in anObject);
// → true
```

In operator, als het wordt toegepast bij een string en een object, vertelt je of dat object een property heeft met een naam, het is een binary operator.

Om te kijken welke properties een object heeft kun je deObject.keys function gebruiken.
```javascript
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → [“x”, “y”, “z”]
```

Er is een Object.assign function die alle properties van het ene object naar het andere object kopiëren.
```javascript
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

### Mutability
Het is onmogelijk om de values van nummers, strings of booleans te veranderen. In objects kun je properties veranderen.
```javascript
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```

### Array loops
Dit:
```javascript
for (let i = 0; i < JOURNAL.length; I++) {
  let entry = JOURNAL[I];
  // Do something with entry
}
```

Is hetzelfde als:
```javascript
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```

Wanneer er of staat na een variable definitie, dan zal het loopje over de elementen gaan die na of wordt gegeven.

### Further arrayology
**Push** en **pop** toevoegen en verwijderen elementen aan het einde van een array. De corresponderende methods heten **unshift** (voegt een of meerdere elementen toe aan het begin van een array en returned de lengte van de array) en **shift** (verwijdert eerste element en geeft het element terug als resultaat).

```javascript
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
```

Om te zoeken naar een speciale value, kun je de **indexOf** method gebruiken en die returned de index waarop de value was gevonden.

```javascript
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
```

**Slice** method neemt de begin- en eindindexen en een array retourneert met alleen de elementen ertusse, de startindex is inclusief, de eindindex is exclusief.

```javascript
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4, ].slice(2));
// → [2, 3, 4]
```

**Concat** method kan je gebruiken om meerdere arrays samen te lijmen, vergelijkbaar met de + operator.

```javascript
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove([“a”, “b”, “c”, “d”, “e”], 2));
// → [“a”, “b”, “d”, “e”]
```

### Strings and their properties
Values van het type string, nummer of boolean zijn geen objects en dus kan je geen nieuwe properties erop zetten.
```javascript
let kim = “Kim”;
kim.age = 88;
console.log(kim.age);
// → undefined
```

Ze hebben wel ingebouwde properties. Elke string value heeft een aantal methodes, zoals **slice** en **indexOf**. IndexOf kan kijken naar een string met meerdere karakters.
```javascript
console.log(“coconuts”.slice(4, 7));
// → nut
console.log(“coconut”.indexOf(“u”));
// → 5
console.log(“one two three”.indexOf(“ee”));
// → 11
```

**Trim** method verwijdert witruimte (spaties, newlines, tabs, vergelijkbare karakters) van de start en einde van een string.

```javascript
console.log(“  okay \n “.trim());
// → okay
```

**padStart** method neemt de gewenste lengte en padding karakter als arguments.

```javascript
console.log(String(6).padStart(3, “0”));
// → 006
```

Met **split** kun je een string splitsen bij elke occurence van een andere string. Met **join** kun je het weer toevoegen.
```javascript
let sentence = “Secretarybirds specialize in stomping”;
let words = sentence.split(“ “);
console.log(words);
// → [“Secretarybirds”, “specialize”, “in”, “stomping”]
console.log(words.join(“. “));
// → Secretarybirds. specialize. in. Stomping
```

Met een repeat method kun je de string herhalen, die een nieuwe string maakt die meerdere kopietjes van de originele string bevat die aan elkaar gelijmd zijn.
```javascript
console.log(“LA”.repeat(3));
// → LALALA
```

Met .length kun je achter de lengte komen.

```javascript
let string = “abc”;
console.log(string.length);
// → 3
console.log(string[1]);
// → b
```

### Rest parameters
Het kan handig zijn voor een function om alle argumenten te accepteren, bijvoorbeeld Math.max berekent het maximum van alle argumenten die het krijgt. Daarvoor moet je drie puntjes schrijven.

```javascript
function max(…numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```

Wanneer een dergelijke functie wordt aangeroepen, is de parameter rest gebonden aan een array die alle verdere argumenten bevat. Deze drie puntjes notatie kun je ook gebruiken om een function aan te roepen met een array van argumenten.

```javascript
let numbers = [5, 1, 7];
console.log(max(…numbers));
// → 7

let words = [“never”, “fully”];
console.log([“will”, …words, “understand”]);
// → [“will”, “never”, “fully”, “understand”]
```

### The Math object
```javascript
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}
```

**Math.random** returns een willekeurig getal tussen de 0 en 1. Elke keer slaat ie een nieuwe value op en geeft een getal terug dat daarvan is afgeleid, waardoor het getal random lijkt.

```javascript
console.log(Math.random());
// → 0.36993729369714856
```

Je kunt **Math.floor** gebruiken als je een geheel nummer wilt ipv een kommagetal. Hij rondt het af naar het dichtstbijzijnde getal.

```javascript
console.log(Math.floor(Math.random() * 10));
// → 2
```

Door bovenstaande met 10 te vermeningvuldigen is het een getal tussen 0 en 10 en omdat je **math.floor** gebruikt, zal het tussen de 0 en 9 zijn.

**Math.ceil** (naar boven afronden)
**Math.round** (naar het dichtstbijzijnde hele getal afronden)
**Math.abs** (waarbij absolute waarde van een getal wordt genomen, wat betekent dat negatieve waarden worden ontkend, maar positieve waarden worden behouden zoals ze zijn).

### Destructuring
Als je weet dat de value dat je bind een array is, dan kan je square brackets gebruiken om binnenin te kijken naar de value.

```javascript
let {name} = {name: “Faraji”, age: 23};
console.log(name);
// → Faraji
```

### JSON
Omdat properties alleen hun waarde grijpen, worden objects en arrays opgeslagen in het geheugen van de computer als een sequence van bits die de adressen bevatten (plaats in het geheugen). Dus een array met een array erin bestaat uit ten minste een geheugengebied voor de binnenste array en de buitenste array, die o.a. een binair getal bevat dat de positie van de binnenste array vertegenwoordigt.
Als je gegevens in een bestand voor later wilt opslaan of via het netwerk naar een andere computer wilt verzenden, moet je deze tangles met geheugenadressen op een manier converteren die kan worden opgeslagen of verzonden.  Dat kan door **serialize data**, via **JSON** (JavaScript Object Notation).

Toegang tot objects via value.prop of value[“prop”].

# Chapter 5 Higher-order functions
Het optellen van een reeks nummer gaat niet over loops en counters, maar over ranges en sums.

### Abstraction
**Abstractions** verbergen bepaalde details en laten alleen de belangrijkste kenmerken zien van het object.

* Probeert details te reduceren en weg te nemen, zodat de ontwikkeaar zich kan concentreren op enkele concepten tegelijk waardoor de code beter begrijpbaar en onderhoudbaar is
* Dankzij abstraction hoef je minder code te dupliceren

```javascript
let labels = [];
repeat(5, I => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → [“Unit 1”, “Unit 2”, “Unit 3”, “Unit 4”, “Unit 5”]
```

### Higher-order functions
Higher-order functions zijn functions die op andere functies werken, door ze als argumenten te gebruiken of door ze terug te geven. Higher-order functions komen in verschillende vormen.

Higher-order functions die nieuwe functions kunnen maken:
```javascript
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

Higher-order functions die andere functions veranderen:
```javascript
function noisy(f) {
  return (…args) => {
    console.log(“calling with”, args);
    let result = f(…args);
    console.log(“called with”, args, “, returned”, result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
```

We kunnen ook functions schrijven die zorgen voor een nieuwe control flow:
```javascript
function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, “is even”);
  });
});
// → 0 is even
// → 2 is even
```
Er bestaat een ingebouwde forEach method, die zoiets biedt als een for/ of loop als een highter-ordered function.
```javascript
[“A”, “B”].forEach(l => console.log(l));
// → A
// → B
```

### Script data set
Higher-ordered functions zijn erg handig en goed bij gegevensverwerking. Voor het verwerken van gegevens hebben we enkele echte gegevens nodig, dataset van scripts.
```javascript
{
  name: “Coptic”,
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: “ltr”,
  year: -200,
  living: false,
  link: “https://en.wikipedia.org/wiki/Coptic_alphabet”
}
```
Zo’n object vertelt de naam van het script, de unicode ranges, in welke richting het is geschreven, de tijd dat het geschrijven is, of het nog steeds gebruikt wordt en een link met meer informatie.  De richting ltr betekent left to right, rtl betekent right to left en ttb betekent top to bottom. Bij de ranges is de lowerbound (code 994 is a Coptic character) inclusive en de upper bound (code 1008 niet) non-inclusive.

### Filtering arrays
Om in het script de dataset te vinden die nog steeds gebruikt wordt, kun je de volgende function misschien gebruiken. Hij filtert namelijk alle elementen in een array die de test niet halen.

```javascript
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: “Adlam”, …}, …]
```

Wanneer een function **pure** is, zal ‘ie de array die gegeven is niet modificeren of veranderen, maar in plaats daarvan wordt een nieuwe array opgebouwd.

### Transforming with map
De map method transformeert een array door een function op alle elementen toe te passen en een nieuwe array te bouwen op basis van de geretourneerde waarden.
```javascript
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == “rtl”);
console.log(map(rtlScripts, s => s.name));
// → [“Adlam”, “Arabic”, “Imperial Aramaic”, …]
```

### Summarizing with reduce
Reduce (soms fold) bouwt een waarde op door herhaaldelijk een enkel element uit de array te nemen en het te combineren met de huidige value.

```javascript
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
```

Han is een script die soms gebruikt wordt voor Chinees, Japans en Koreaans. De U.S.-based Unicode Consortium heeft besloten om deze als een te zien, ook wel **Han unification.**

### Composability
Higher-order functions wanneer je operations moet samenstellen.
```javascript
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1188
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 188
```

### Strings and character codes
Een van de datasets kan zijn om uit te vinden wat voor script in een stukje tekst wordt gebruikt.

```javascript
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(121));
// → {name: “Latin”, …}
```

De som method is een andere higher-order function, heeft een testfunction nodig en vertelt of die function true returned voor een van de elementen in de array.

**UTF-16** = formaat dat wordt gebruikt door JS tekenreeksen, beschrijft de meest voorkomende tekens met behulp van een enkele 16-bits code-eenheid, maar gebruikt een paar van twee dergelijke eenheden voor anderen.

UTF-16 werkt prima als je eigen taal geen tekens met twee tekens gebruik, maar zodra iemand een dergelijk programma probeert te gebruiken met wat minder Chinese karakters breek het, maar dankzij de emoji is iedereen gestart met een 2-unit karakter.

```javascript
// Two emoji characters, horse and shoe
let horseShoe = “🐴👟”;
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)
```

**charCodeAt method** = geeft je een code unit, niet een volledige karakter code.

**codePointAt method** = geeft wel een volledige karakter code.

```javascript
let roseDragon = “🌹🐉”;
for (let char of roseDragon) {
  console.log(char);
}
// → 🌹
// → 🐉
```

### Recognizing text
**countBy function** = verwacht een collective en een function die een groepsnaam voor een bepaald element berekent. Hij returned een array van objects, elk van deze geeft een groep een naam en vertelt het aantal elementen dat in die groep is gevonden.

**findIndex** = zoekt naar de eerste value waarvan de gegeven function true returned (net als bij indexOf returned hij -1 als er niet zo’n element is gevonden).

**countBy** = function schrijven die verteld welk script er wordt gebruikt in een stukje tekst.

**forEach** = om te loopen over de elementen in een array.
**Filter method** = returns een nieuwe array met alleen de elementen die de function passen.
**Map** = een array transformeren door elk element door een function te laten gaan.
**Reduce** = alle elementen in een array te combineren tot een enkele value.
**Some method** = test of een element matches de gegeven function.

# Chapter 6 The secret life of objects
**Object-oriented programming** = reeks technieken die objects gebruiken (en gerelateerde concepten) als het centrale principe van programma organisatie.

### Encapsulation
Het kernidee van object-oriented programming is om een programma op te delen in kleinere stukjes en ervoor zorgen dat ieder stukje verantwoordelijk is voor z’n eigen status. Enige kennis over de manier waarop een stukje van hoe het programma werkt kan op deze manier lokaal worden bewaard.

Verschillende stukjes van het programma interacteren met elkaar via interfaces, beperkte sets van functions of bindings die nuttige functionaliteit bieden op een meer abstract niveau, waardoor hun precieze implementatie verborgen blijft.  

Zulke programma stukjes zijn gemodeleerd door gebruik te maken van objects. Hun interface bestaat uit een specifieke set van methods en properties (properties die deel uit maken van de interface heten **public**, de andere die zich in de code bevinden en waar je vanaf moet blijven heten **private**).

**Encapsulation** = de interface gescheiden van de implementatie.

In JS zijn ze hier nog mee bezig, maar nu meestal via comments of in documentatie, maar ook via een _ aan de start van een propertynaam om aan te geven dat die properties private zijn.

### Methods
**Methods** = properties de function values vasthouden, moet meestal wat doen met het object waarop ‘ie zit.

Wanneer een function wordt aangeroepen als een method – opgezocht als een eigenschap en onmiddellijk wordt opgeroepen zoals in object.method() – verwijst de binding die this in z’n body heeft genoemd automatisch naar het object.

```javascript
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: “white”, speak};
let hungryRabbit = {type: “hungry”, speak};

whiteRabbit.speak(“Oh my ears and whiskers, “ +
                  “how late it’s getting!”);
// → The white rabbit says ‘Oh my ears and whiskers, how
//   late it’s getting!’
hungryRabbit.speak(“I could use a carrot right now.”);
// → The hungry rabbit says ‘I could use a carrot right now.’
```
Als je iets expliciet wil doorgeven kun je de function’s call method gebruiken, die this value als z’n eerste argument neemt en behandelt verdere argumenten als normale parameters.

```javascript
speak.call(hungryRabbit, “Burp!”);`
// → The hungry rabbit says ‘Burp!’`
```

Aangezien elke function zijn eigen binding heeft, waarvan de waarde afhangt van de manier waarop deze wordt aangeroepen, kun je niet verwijzen naar de this van de wrapping scope in een reguliere function die is gedefinieerd met het function zoekwoord.

Arrow functions kunnen the this zien in de binding om de scope heen.

```javascript
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]
```

### Prototypes
De meeste objects hebben een prototype (=een ander object dat gebruikt wordt als terugvalbron van properties. Wanneer een object een aanvraag ontvangt voor een property die het niet heeft, wordt er naar het prototype gezocht naar de property, dan naar het prototype van het prototype.        

Object.prototype returns het prototype van een object.
```javascript
console.log(Object.getPrototypeOf({}) ==
            Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
```

```javascript
Functions zijn afgeleid af van Function.prototype en array zijn afgeleid van Array.prototype.
console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
// → true
```

Je kan Object.create gebruiken om een object te maken met een specific prototype.
```javascript
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = “killer”;
killerRabbit.speak(“SKREEEE!”);
// → The killer rabbit says ‘SKREEEE!’
```

### Classes
Een **class** definieerd de vorm van een type object – welke methods en properties het heeft, dit heet een **instance** van een class.

Prototypes zijn handig voor het definiëren van properties waarvoor alle exemplaren van een class dezelfde waarde delen, zoals methoden.

Als je het keyword **new** voor een function aanroept, wordt de function als een constructor behandeld. Dit betekent dat een object met het juiste prototype automatisch gemaakt wordt, gebonden aan **this** in de function, en **returned** aan het einde van de function.

```javascript
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
var pro

console.log(makeRabbit(‘eekhoorn’));
```

### Class notation
JS classes zijn constructor functions met een prototype property.
```javascript
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit(“killer”);
let blackRabbit = new Rabbit(“black”);
```

### Overriding derived properties
Als een property met dezelfde naam al in de naam van het prototype zit, dan zal deze property geen effect meer hebben op het object, omdat het soort van verborgen zit achter de property van het object zelf.

```javascript
Rabbit.prototype.teeth = “small”;
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = “long, sharp, and bloody”;
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
```

Overriding wordt ook gebruikt om de standaard function en array prototypes een andere toString method te geven dan het basis object prototype.

```javascript
console.log(Array.prototype.toString ==
            Object.prototype.toString);
// → false
console.log([1, 2].toString());
// → 1,2
```

toString (vergelijkbaar met .join(“,”) stopt komma’s tussen de values in een array.

### Maps
**Map** = datastructure die values aan andere values koppelt (bv. de naam koppelen aan een leeftijd).
```javascript
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
```

Gebruik maken van ‘plain objects’ als maps is niet handig. Voorkomen door:
* Objects zonder prototype maken (als je bv. null doorgeeft naar Object.create zal hij niet worden afgeleid van Object.prototype.
```javascript
console.log(“toString” in Object.create(null));
// → false
```

Object property names moeten strings zijn

```javascript
let ages = new Map();
ages.set(“Boris”, 39);
ages.set(“Liang”, 22);
ages.set(“Júlia”, 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
```

Object.keys returns alleen de keys van het object zelf, niet van die in het prototype.

### Polymorphism
String function  zet values om in een string.

```javascript
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
// → a black rabbit
```

**Polymorphism** = wanneer een stuk code is geschreven om te werken met objecten met een bepaalde interface, kan elk type object dat deze interface worden ondersteunt in de code worden ingeplugd en werkt het gewoon.

### Symbols
Property names kunnen strings zijn, maar ze kunnen ook symbols zijn.

**Symbols** = values die gemaakt worden met de Symbol function, ze zijn uniek (in tegen stelling tot strings) en je kunt ze maar een keer maken. Meedere symbols kunnen wel dezelfde naam hebben.

```javascript
let sym = Symbol(“name”);
console.log(sym == Symbol(“name”));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55
```

### The iterator interface
Iterable  dat het een method heeft met de Symbol.iterator symbol. Wanneer die aangeroepen wordt, dan zal die method een object returnen die een tweede interface geeft: iterator (het echt ding die itereert). Deze heeft een next method, die het volgende resultaat returned.

```javascript
let okIterator = “OK”[Symbol.iterator]();
console.log(okIterator.next());
// → {value: “O”, done: false}
console.log(okIterator.next());
// → {value: “K”, done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}
```

### Getters, setters, and statics
Getters = sommige methods die direct toegankelijk zijn verstoppen een method call, en die worden gedefinieerd door get voor de method te zetten in een object expression of class declaration. Dit kun je ook doen door een setter te gebruiken.
```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
```

### Inheritance
Sommige matrices zijn symmetric, dus als je ze spiegelt diagonaal linksboven naar rechtsonder blijft deze hetzelfde (de waarde die is opgeslagen bij x, y is altijd dezelfde als die bij y,x).

**Inheritance** = JS’ prototype systeem maakt mogelijk om een nieuwe class te maken, vergelijkbaar met de oude class, maar met nieuwe definities voor sommige properties. Hij is dus afgeleid van het oude prototype maar voegt een nieuwe definitie toe. De nieuwe class inherits properties en gedrag van de oude class.

```javascript
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2
```

Extends geeft aan dat deze class niet direct gebaseerd moet zijn op de default Object prototype, maar op een andere class (**superclass**. De afgeleide class is de **subclass**).

### The instanceof operator
Instaceof  omdat het soms handig is om te weten of een object van een bepaalde class komt.

### Summary
Je kunt getters en setters definiëren om methods aan te roepen elke keer dat een property toegankelijk is.
**Static method** = methods die opgeslagen zijn in een class’ constructor

# Chapter 8 Bugs and errors
**Bugs** = gebreken in computerprogramma’s
**Debugging** = proces van het vinden van fouten.

### Strict mode
Je kan JS strengen maken door strict mode te gebruiken. Dit doe je door “use strict” aan de top van een function body te zetten.
* * Hij merkt bv op dat je een let bent vergeten;
* * De this binding heeft de value undefined in functions die niet genoemd worden als methods.

```
function canYouSpotTheProblem() {
  “use strict”;
  for (let counter = 0; counter < 10; counter++) {
    console.log(“Happy happy”);
  }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined
```

Strict mode verbiedt om meerdere parameters aan een function te geven met dezelfde namen + hij verwijdert bepaalde problematische taalkenmerken (bv. het with statement).

### Types
JS houdt alleen rekening met types wanneer het programma wordt uitgevoerd en zelfs daar probeert ‘ie de waarden te converteren naar het type dat het verwacht.

Er zijn verschillende JS dialects die types toevoegen aan de taal en ze controleren, b. TypeScript.

### Testing
**Automated** **testing** = proces van een programma schrijven die een ander programma test.

Er is software die je helpt bij het bouwen en runnen van een collection tests (**test suites**) door een taal aan te bieden (in de vorm van functions en methods) die geschikt is om tests uit te drukken en door informatieve informatie af te geven wanneer een test mislukt (**test runners**).

Over het algemeen: hoe meer externe objecten waarmee de code samenwerkt, hoe moeilijker het is om de context in te stellen waarin deze moet worden getest.

### Debugging
Wat is het probleem?

Gebruik console.log om te kijken waar het fout gaat.

In browsers kun je breakpoint zetten op specifieke regels van je code en wanneer je code het breakpoint raakt, stopt het.

Je kunt ook een debugger statement neerzetten.

### Error propagation
Meestal wanneer fouten vaak voorkomen en de caller hier rekening mee moet houden, is het retourneren van een speciale value een goede manier om een fout aan te geven. Maar dit heeft ook nadelen (wat als de functions elk mogelijke value kan teruggeven? Plus het kan leiden tot awkward code).

### Exceptions
**Exception handling** = als een function niet normaal functioneert, stoppen met wat je aan het doen bent en gelijk naar de plek gaan en kijken hoe je het probleem gaat oplossen.

**Exceptions** = mechanisme die het mogelijk maakt om code met problemen om een exception te raisen of throwen, ze kunnen elke waarde zijn.

* Raisen lijkt op een super-charged return van een function  het springt niet alleen uit de huidige function, maar ook uit de callers, helemaal tot aan de eerste call die de huidige uitvoering startte (ook wel **upwinding the stack**).

```javascript
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == “left”) return “L”;
  if (result.toLowerCase() == “right”) return “R”;
  throw new Error(“Invalid direction: “ + result);
}

function look() {
  if (promptDirection(“Which way?”) == “L”) {
    return “a house”;
  } else {
    return “two angry bears”;
  }
}

try {
  console.log(“You see”, look());
} catch (error) {
  console.log(“Something went wrong: “ + error);
}
```

Het **throw** keyword wordt gebruikt om een **exception** te **raisen**. **Catching** door de code in een **try** block te zetten, gevolgd door het keyword **catch**.
