# Chapter 10  Modules
**Modules** = stukje programma dat aangeeft op welke andere stukken het vertrouwt en welke functionaliteit het biedt voor andere modules om te gebruiken (de interface).

Een voordeel van het afzonderlijk stukjes samenstellen van een programma, en het feitelijk alleen kunnen uitvoeren van die stukken is dat je hetzelfde stuk in verschillende programma’s kunt toepassen.

**Packages** = stuk code dat kan worden gedistribueerd (gekopieerd en geïnstalleerd). Het kan een of meerdere modules bevatten en informatie bevatten over de andere pakketten waarvan het afhankelijk is. Er wordt meestal in een pakket uitgelegd wat het doet.

NPM is twee dingen: een online service waarmee je een pakket en een programma (gebundeld met Node.js) kan downloaden (en uploaden) waarmee je ze kunt installeren en beheren.

### Improvises modules
Je kunt JS functions gebruiken om local scopes en objecten te maken die module interfaces vertegenwoordigen.

```javascript
const weekDay = function() {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                 "Thursday", "Friday", "Saturday"];
  return {
    name(number) { return names[number]; },
    number(name) { return names.indexOf(name); }
  };
}();

console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday
```

### Evaluating data as code
Er zijn verschillende manieren om gegevens (een reeks codes) te nemen en uit te voeren als onderdeel van het huidige programma. De meest voor de hand liggende is via de speciale **eval** operator, die buiten de scope zal uitvoeren.

```javascript
const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2"));
// → 2
console.log(x);
// → 1
```

### CommonJS
De meest gebruikte methode om JS modules vast te zetten wordt CommonJS modules genoemd. Het belangrijkste concept is een function met de naam require. Wanneer je deze modulenaam aanroept, zorgt het ervoor dat de module wordt geladen en de bijbehorende interface wordt geretourneerd.
```javascript
const {formatDate} = require("./format-date");

console.log(formatDate(new Date(2017, 9, 13),
                       "dddd the Do"));
// → Friday the 13th
```

```javascript
const {parse} = require("ini");

console.log(parse("x = 10\ny = 20"));
// → {x: "10", y: "20"}
```

### ECMAScript modules

Vanaf 2015 heeft de JS standaard hun eigen module system, het heet ES (EMCAScript) modules. De belangrijkste concepten van afhankelijkheden en interfaces blijven hetzelfde, maar details verschillen.

```javascript
import ordinal from "ordinal";
import {days, months} from "date-names";

export function formatDate(date, format) { /* ... */ }
```

```javascript
export default ["Winter", "Spring", "Summer", "Autumn"];
```

```javascript
import {days as dayNames} from "date-names";

console.log(dayNames.length);
// → 7
```

### Building and bundling
Veel JS projecten zijn officieel niet eens geschreven in JS. Daarom zijn er extensies, zoals type checking. Hiervoor moeten de code compileert worden zodat browsers het kunnen uitvoeren.

### Module design
Het structureren van programma’s is subjectief.  Een aspect van module ontwerp is gebruikgemak, vooral als het door meerdere mensen gebruikt gaat worden.

```javascript
const {find_path} = require("dijkstrajs");

let graph = {};
for (let node of Object.keys(roadGraph)) {
  let edges = graph[node] = {};
  for (let dest of roadGraph[node]) {
    edges[dest] = 1;
  }
}

console.log(find_path(graph, "Post Office", "Cabin"));
// → ["Post Office", "Alice's House", "Cabin"]
```
- - - -

# Chapter 11 Asynchronous Programming
De processor is het centrale punt van de computer, het is het deel dat de afzonderlijke stappen uitvoert die deel uitmaken van onze programma’s.

### Asynchronicity
In een **synchroon** programmeermodel gebeuren dingen één voor één. Wanneer een function wordt aangeroepen die een langlopende actie uitvoert, wordt deze alleen geretourneerd als de actie is voltooid en het resultaat kan worden geretourneerd.  Hiermee worden programma’s stop gezet zolang de actie duurt.

Een asynchroon model zorgt ervoor dat meerdere dingen tegelijkertijd kunnen gebeuren. Wanneer een actie start, blijft je programma actief. Wanneer de actie is voltooid, wordt het programma geïnformeerd en krijgt het toegang tot het resultaat (bv. De gegevens die van de schijf zijn gelezen).

![plaatje](/bureaublad/screen)

### Callbacks
Een benadering van asynchroon programmeren is om functions die een langzame actie uitvoeren een extra argument te laten gebruiken, een callback function T.

```javascript
setTimeout(() => console.log("Tick"), 500);
```

Opslagbollen slaan stukjes JSON-codeerbare taal op onder namen.
```javascript
import {bigOak} from "./crow-tech";

bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  });
});
```

```javascript
import {defineRequestType} from "./crow-tech";

defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});
```

### Promises
In het geval van asynchrone acties kun je, ipv te regelen dat een functie op een bepaald moment in de toekomst wordt aangeroepen, een object retourneren dat deze toekomstige gebeurtenis vertegenwoordigt (**promise**).

```javascript
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
// → Got 15
```

```javascript
function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}

storage(bigOak, "enemies")
  .then(value => console.log("Got", value));
```

### Failure
Regelmatige JS berekeningen kunnen mislukken (fail) door een exertion te throwen. Asynchrone berekeningen hebben vaak zoiets nodig. Een netwerk kan mislukken of een code die deel uitmaakt van de asynchrone berekening kan een uitzondering opleveren.

Een van de meest dringende problemen met de callback-still van asynchrone programmering is dat het extreem moeilijk is om ervoor te zorgen dat fouten correct worden gereporteerd aan de callbacks.

Een veelgebruikte conventie is dat het eerste argument voor de callback wordt gebruikt om aan te geven dat de actie is mislukt en de tweede de waarde bevat die de actie heeft gegenereerd toen deze werd voltooid. Dit soort functions moeten altijd controleren of ze een exception hebben ontvangen en ervoor zorgen dat eventuele problemen die ze veroorzaken, inclusief exceptions die worden gegenereerd door functions die ze oproepen worden gepakt en aan de juiste function worden doorgegeven.
```javascript
new Promise((_, reject) => reject(new Error("Fail")))
  .then(value => console.log("Handler 1"))
  .catch(reason => {
    console.log("Caught failure " + reason);
    return "nothing";
  })
  .then(value => console.log("Handler 2", value));
// → Caught failure Error: Fail
// → Handler 2 nothing
```

### Networks are hard
```javascript
class Timeout extends Error {}

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);
        else resolve(value);
      });
      setTimeout(() => {
        if (done) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout("Timed out"));
      }, 250);
    }
    attempt(1);
  });
}
```

```javascript
function requestType(name, handler) {
  defineRequestType(name, (nest, content, source,
                           callback) => {
    try {
      Promise.resolve(handler(nest, content, source))
        .then(response => callback(null, response),
              failure => callback(failure));
    } catch (exception) {
      callback(exception);
    }
  });
}
```

### Collections of promises
Elke nestcomputer bewaart een reeks andere nesten binnen transmissieafstand in zijn eigenschap buren. Om te controleren welke van die momenteel bereikbaar zijn, zou je een function kunnen schrijven die probeert om een ‘ping’-verzoek (een verzoek dat eenvoudig om een antwoord vraagt) te sturen naar elk van hen om te kijken welke terugkomen.

```javascript
requestType("ping", () => "pong");

function availableNeighbors(nest) {
  let requests = nest.neighbors.map(neighbor => {
    return request(nest, neighbor, "ping")
      .then(() => true, () => false);
  });
  return Promise.all(requests).then(result => {
    return nest.neighbors.filter((_, i) => result[i]);
  });
}
```

Wanneer een buur niet beschikbaar is willen we niet dat de hele gecombineerde belofte faalt.  Dus de function die is toegewezen aan de reeks buren om ze in verzoekbeloften te plaatsen, koppelt handlers aan die succesvolle verzoeken produceren om true en false te produceren.

### Network flooding
```javascript
import {everywhere} from "./crow-tech";

everywhere(nest => {
  nest.state.gossip = [];
});

function sendGossip(nest, message, exceptFor = null) {
  nest.state.gossip.push(message);
  for (let neighbor of nest.neighbors) {
    if (neighbor == exceptFor) continue;
    request(nest, neighbor, "gossip", message);
  }
}

requestType("gossip", (nest, message, source) => {
  if (nest.state.gossip.includes(message)) return;
  console.log(`${nest.name} received gossip '${
               message}' from ${source}`);
  sendGossip(nest, message, source);
});
```

### Message routing
Als een bepaalde node met een andere node wil praten, is flooding geen efficiënte benadering, al helemaal als het netwerk groot is.
Een alternatieve manier is om een reeks berichten op te stellen waarop berichten van node naar node kunnen springen totdat ze hun bestemming bereiken.

```javascript
requestType("connections", (nest, {name, neighbors},
                            source) => {
  let connections = nest.state.connections;
  if (JSON.stringify(connections.get(name)) ==
      JSON.stringify(neighbors)) return;
  connections.set(name, neighbors);
  broadcastConnections(nest, name, source);
});

function broadcastConnections(nest, name, exceptFor = null) {
  for (let neighbor of nest.neighbors) {
    if (neighbor == exceptFor) continue;
    request(nest, neighbor, "connections", {
      name,
      neighbors: nest.state.connections.get(name)
    });
  }
}

everywhere(nest => {
  nest.state.connections = new Map;
  nest.state.connections.set(nest.name, nest.neighbors);
  broadcastConnections(nest, nest.name);
});
```

### Async functions
Een async function is gemarkeerd door het woord async voor het function keyword.  Methods kunnen ook async worden gemaakt.
```javascript
async function findInStorage(nest, name) {
  let local = await storage(nest, name);
  if (local != null) return local;

  let sources = network(nest).filter(n => n != nest.name);
  while (sources.length > 0) {
    let source = sources[Math.floor(Math.random() *
                                    sources.length)];
    sources = sources.filter(n => n != source);
    try {
      let found = await routeRequest(nest, source, "storage",
                                     name);
      if (found != null) return found;
    } catch (_) {}
  }
  throw new Error("Not found");
}
```

### Generators
Het vermogen om functions te pauzeren en vervolgens weer te hervatten is niet exclusief voor async functions. JS heeft ook een function met de de naam generator functions. Wanneer je een function definieert met function * wordt het een generator. Wanneer je een generator aanroept, wordt een iterator geretourneerd.
```javascript
function* powers(n) {
  for (let current = n;; current *= n) {
    yield current;
  }
}

for (let power of powers(3)) {
  if (power > 50) break;
  console.log(power);
}
// → 3
// → 9
// → 27
```
### The event loop
Asynchroon gedrag gebeurt op zijn eigen lege function call stack.
```javacsript
try {
  setTimeout(() => {
    throw new Error("Woosh");
  }, 20);
} catch (_) {
  // This will not run
  console.log("Caught!");
}
```


```javascript
let start = Date.now();
setTimeout(() => {
  console.log("Timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start);
// → Wasted time until 50
// → Timeout ran at 55
```
