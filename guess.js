let answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessed = [];

while (attempts < 7) {
  let input = prompt("Nhập số từ 1-100:");

  let guess = Number(input);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Vui lòng nhập số từ 1-100");
    continue;
  }

  if (guessed.includes(guess)) {
    alert("Bạn đã đoán số này rồi!");
    continue;
  }

  guessed.push(guess);
  attempts++;

  if (guess === answer) {
    alert(`Bạn đoán đúng sau ${attempts} lần!`);
    break;
  }

  if (guess < answer) {
    alert("Cao hơn");
  } else {
    alert("Thấp hơn");
  }
}

if (attempts === 7 && guessed[guessed.length - 1] !== answer) {
  alert(`Bạn thua! Đáp án là ${answer}`);
}
