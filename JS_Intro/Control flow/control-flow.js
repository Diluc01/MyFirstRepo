const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minimumSpace = 0.8;
const plants = minimumSpace * 20;
const week1Results = plants * 2;
const week2Results = week1Results * 2;
const week3Results = week2Results * 2;

if (week1Results > area * 0.8) {
  console.log("Pruned");
} else if (week1Results <= area * 0.8 && week1Results >= area * 0.5) {
  console.log("Monitored");
} else {
  console.log("Planted");
}

if (week2Results > area * 0.8) {
  console.log("Pruned");
} else if (week2Results <= area * 0.8 && week2Results >= area * 0.5) {
  console.log("Monitored");
} else {
  console.log("Planted");
}

if (week3Results > area * 0.8) {
  console.log("Pruned");
} else if (week3Results <= area * 0.8 && week3Results >= area * 0.5) {
  console.log("Monitored");
} else {
  console.log("Planted");
}
