console.log("Loop com Continue");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);   
  } else {
    continue;
  }
}

console.log("Loop com Break");

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    break;
  } else {
    console.log(i);   
  }
}