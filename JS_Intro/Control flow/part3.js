const area = PI * radius * radius;
const minimumSpace = 0.8;
const plants = minimumSpace * 100;
const week1Results = plants * 2;
const week2Results = week1Results * 2;
const week3Results = week2Results * 2;

try {
  if (plants > area) {
    throw new Error("There is not enough space");
  } else {
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
  }
} catch (err) {
  console.log(err);
}
