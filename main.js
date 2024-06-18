let i = 1;

while(i <= 10) {
    alert(i);
    i += 1;
}

for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    alert(i);
}

const number = 7;

for (let i = 1; i <= 10; i++) {
    alert(`${number} * ${i} = ${number * i}`);
}

const numbers1 = [1, 2, 3, 4, 5];
let a = 0;

while (a < numbers1.length) {
  alert(numbers1[a]);
  a++;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === 7) {
        break;
    }
    alert(numbers2[i])
}

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = 7;

for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] >= 7) {
        break;
    }
    alert(numbers3[i])
}

let c = 1;

while (c <= 20) {
    if (c % 3 === 0) {
        c++;
        continue;
    }
    alert(c);
    c++;
}