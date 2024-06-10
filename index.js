let player1 = document.getElementById("first_player");
let player2 = document.getElementById("second_player");
let ball = document.getElementById("ball");

let score1 = document.getElementById("team1");
let score2 = document.getElementById("team2");

let scr1 = 0;
let scr2 = 0;

let element = document.querySelector(".main-section");

let step = 10;

let player1_top = player1.offsetTop;
let player1_left = player1.offsetLeft;

let player2_top = player2.offsetTop;
let player2_left = player2.offsetLeft;

let ball_top = ball.offsetTop;
let ball_left = ball.offsetLeft;

const player1_default_top = player1_top;
const player1_default_left = player1_left;
const player2_default_top = player2_top;
const player2_default_left = player2_left;
const ball_default_top = ball_top;
const ball_default_left = ball_left;

document.addEventListener("keydown", FirstPlayerMove);
document.addEventListener("keydown", SecondPlayerMove);

if (window.onload) {
  scr1 = 0;
  scr2 = 0;
}

function FirstPlayerMove(event) {
  if (
    player1_top >= 0 &&
    player1_top <= element.offsetHeight - 80 &&
    player1_left >= 0 &&
    player1_left <= element.offsetWidth - 80
  ) {
    switch (event.key) {
      case "w":
        player1_top -= step;

        if (
          player1_top > ball_top &&
          player1_top < ball_top + 15 &&
          ball_top >= 0 &&
          player1_left >= ball_left - 25 &&
          player1_left <= ball_left + 25
        ) {
          BallMoveUp();
        }

        if (ball_top <= 0) {
          ball_top += 80;
          ball.style.top = ball_top + "px";
        }
        break;
      case "s":
        player1_top += step;

        if (
          player1_top < ball_top &&
          player1_top > ball_top - 65 &&
          ball_top <= element.offsetHeight - 50 &&
          player1_left >= ball_left - 25 &&
          player1_left <= ball_left + 25
        ) {
          BallMoveDown();
        }

        if (ball_top >= element.offsetHeight - 50) {
          ball_top -= 80;
          ball.style.top = ball_top + "px";
        }
        break;
      case "a":
        player1_left -= step;

        if (
          player1_left > ball_left &&
          player1_left < ball_left + 30 &&
          ball_left >= 0 &&
          player1_top >= ball_top - 45 &&
          player1_top <= ball_top + 20
        ) {
          BallMoveLeft();
        }

        if (
          ball_left <= 0 &&
          (ball_top <= element.offsetHeight * 0.4 ||
            ball_top >= element.offsetHeight * 0.54)
        ) {
          ball_left += 80;
          ball.style.left = ball_left + "px";
        }
        if (
          ball_left <= 0 &&
          ball_top >= element.offsetHeight * 0.4 &&
          ball_top <= element.offsetHeight * 0.54
        ) {
          player1_top = player1_default_top;
          player1_left = player1_default_left;
          player2_top = player2_default_top;
          player2_left = player2_default_left;
          ball_top = ball_default_top;
          ball_left = ball_default_left;
          ball.style.left = ball_default_left + "px";
          ball.style.top = ball_default_top + "px";
          scr2 += 1;
          score2.innerHTML = scr2.toString();
        }

        break;
      case "d":
        player1_left += step;

        if (
          player1_left < ball_left &&
          player1_left > ball_left - 60 &&
          ball_left <= element.offsetWidth - 50 &&
          player1_top >= ball_top - 45 &&
          player1_top <= ball_top + 20
        ) {
          BallMoveRight();
        }
        if (
          ball_left >= element.offsetWidth - 50 &&
          (ball_top <= element.offsetHeight * 0.4 ||
            ball_top >= element.offsetHeight * 0.54)
        ) {
          ball_left -= 80;
          ball.style.left = ball_left + "px";
        }
        if (
          ball_left >= element.offsetWidth - 50 &&
          ball_top >= element.offsetHeight * 0.4 &&
          ball_top <= element.offsetHeight * 0.54
        ) {
          player1_top = player1_default_top;
          player1_left = player1_default_left;
          player2_top = player2_default_top;
          player2_left = player2_default_left;
          ball_top = ball_default_top;
          ball_left = ball_default_left;
          ball.style.left = ball_default_left + "px";
          ball.style.top = ball_default_top + "px";
          scr1 += 1;
          score1.innerHTML = scr1.toString();
        }
        break;
    }

    player1.style.left = player1_left + "px";
    player1.style.top = player1_top + "px";
    console.log(player1_top);
    console.log(player1_left);
  } else if (player1_top == -10 && player1_left > -10 && player1_left < 830) {
    switch (event.key) {
      case "s":
        player1_top += step;
        break;
      case "a":
        player1_left -= step;

        if (
          player1_left > ball_left &&
          player1_left < ball_left + 30 &&
          ball_left > 0 &&
          player1_top >= ball_top - 45 &&
          player1_top <= ball_top + 20
        ) {
          BallMoveLeft();
        }

        if (ball_top <= 0 && ball_left < 0) {
          ball_top += 80;
          ball_left += 80;

          ball.style.top = ball_top + "px";
          ball.style.left = ball_left + "px";
        }
        break;
      case "d":
        player1_left += step;

        if (
          player1_left < ball_left &&
          player1_left > ball_left - 60 &&
          ball_left <= element.offsetWidth - 50 &&
          player1_top >= ball_top - 45 &&
          player1_top <= ball_top + 20
        ) {
          BallMoveRight();
        }

        if (ball_top <= 0 && ball_left >= element.offsetWidth - 50) {
          ball_top += 80;
          ball_left -= 80;

          ball.style.top = ball_top + "px";
          ball.style.left = ball_left + "px";
        }
        break;
    }

    player1.style.left = player1_left + "px";
    player1.style.top = player1_top + "px";
  } else if (player1_top == 530 && player1_left > -10 && player1_left < 830) {
    switch (event.key) {
      case "w":
        player1_top -= step;
        break;
      case "a":
        player1_left -= step;
        break;
      case "d":
        player1_left += step;
        break;
    }

    player1.style.left = player1_left + "px";
    player1.style.top = player1_top + "px";
  } else if (player1_left == -10 && player1_top > -10 && player1_top < 530) {
    switch (event.key) {
      case "w":
        player1_top -= step;
        break;
      case "s":
        player1_top += step;
        break;
      case "d":
        player1_left += step;
        break;
    }

    player1.style.left = player1_left + "px";
    player1.style.top = player1_top + "px";
  } else if (player1_left == 830 && player1_top > -10 && player1_top < 530) {
    switch (event.key) {
      case "w":
        player1_top -= step;
        break;
      case "s":
        player1_top += step;
        break;
      case "a":
        player1_left -= step;
        break;
    }

    player1.style.left = player1_left + "px";
    player1.style.top = player1_top + "px";
  } else if (player1_top == -10 && player1_left == -10) {
    switch (event.key) {
      case "s":
        player1_top += step;
        break;
      case "d":
        player1_left += step;
        break;
    }

    player1.style.left = player1_left + "px";
    player1.style.top = player1_top + "px";
  } else if (player1_top == -10 && player1_left == 830) {
    switch (event.key) {
      case "s":
        player1_top += step;
        break;
      case "a":
        player1_left -= step;
        break;
    }

    player1.style.left = player1_left + "px";
    player1.style.top = player1_top + "px";
  } else if (player1_top == 530 && player1_left == -10) {
    switch (event.key) {
      case "w":
        player1_top -= step;
        break;
      case "d":
        player1_left += step;
        break;
    }

    player1.style.left = player1_left + "px";
    player1.style.top = player1_top + "px";
  } else if (player1_top == 530 && player1_left == 830) {
    switch (event.key) {
      case "w":
        player1_top -= step;
        break;
      case "a":
        player1_left -= step;
        break;
    }

    player1.style.left = player1_left + "px";
    player1.style.top = player1_top + "px";
  }
}

function SecondPlayerMove(event) {
  if (
    player2_top >= 0 &&
    player2_top <= element.offsetHeight - 80 &&
    player2_left >= 0 &&
    player2_left <= element.offsetWidth - 80
  ) {
    switch (event.key) {
      case "ArrowUp":
        player2_top -= step;

        if (
          player2_top > ball_top &&
          player2_top < ball_top + 15 &&
          ball_top >= 0 &&
          player2_left >= ball_left - 25 &&
          player2_left <= ball_left + 25
        ) {
          BallMoveUp();
        }

        if (ball_top <= 0) {
          ball_top += 80;
          ball.style.top = ball_top + "px";
        }
        break;
      case "ArrowDown":
        player2_top += step;

        if (
          player2_top < ball_top &&
          player2_top > ball_top - 65 &&
          ball_top <= element.offsetHeight - 50 &&
          player2_left >= ball_left - 25 &&
          player2_left <= ball_left + 25
        ) {
          BallMoveDown();
        }

        if (ball_top >= element.offsetHeight - 50) {
          ball_top -= 80;
          ball.style.top = ball_top + "px";
        }
        break;
      case "ArrowLeft":
        player2_left -= step;

        if (
          player2_left > ball_left &&
          player2_left < ball_left + 30 &&
          ball_left >= 0 &&
          player2_top >= ball_top - 45 &&
          player2_top <= ball_top + 20
        ) {
          BallMoveLeft();
        }

        if (
          ball_left <= 0 &&
          (ball_top <= element.offsetHeight * 0.4 ||
            ball_top >= element.offsetHeight * 0.54)
        ) {
          ball_left += 80;
          ball.style.left = ball_left + "px";
        }
        if (
          ball_left <= 0 &&
          ball_top >= element.offsetHeight * 0.4 &&
          ball_top <= element.offsetHeight * 0.54
        ) {
          player1_top = player1_default_top;
          player1_left = player1_default_left;
          player2_top = player2_default_top;
          player2_left = player2_default_left;
          ball_top = ball_default_top;
          ball_left = ball_default_left;
          ball.style.left = ball_default_left + "px";
          ball.style.top = ball_default_top + "px";
          scr2 += 1;
          score2.innerHTML = scr2.toString();
        }
        break;
      case "ArrowRight":
        player2_left += step;

        if (
          player2_left < ball_left &&
          player2_left > ball_left - 60 &&
          ball_left <= element.offsetWidth - 50 &&
          player2_top >= ball_top - 45 &&
          player2_top <= ball_top + 20
        ) {
          BallMoveRight();
        }
        if (
          ball_left >= element.offsetWidth - 50 &&
          (ball_top <= element.offsetHeight * 0.4 ||
            ball_top >= element.offsetHeight * 0.54)
        ) {
          ball_left -= 80;
          ball.style.left = ball_left + "px";
        }
        if (
          ball_left >= element.offsetWidth - 50 &&
          ball_top >= element.offsetHeight * 0.4 &&
          ball_top <= element.offsetHeight * 0.54
        ) {
          player1_top = player1_default_top;
          player1_left = player1_default_left;
          player2_top = player2_default_top;
          player2_left = player2_default_left;
          ball_top = ball_default_top;
          ball_left = ball_default_left;
          ball.style.left = ball_default_left + "px";
          ball.style.top = ball_default_top + "px";
          scr1 += 1;
          score1.innerHTML = scr1.toString();
        }
        break;
    }

    player2.style.left = player2_left + "px";
    player2.style.top = player2_top + "px";
    console.log(player2_top);
    console.log(player2_left);
  } else if (player2_top == -10 && player2_left > -10 && player2_left < 830) {
    switch (event.key) {
      case "ArrowDown":
        player2_top += step;
        break;
      case "ArrowLeft":
        player2_left -= step;
        break;
      case "ArrowRight":
        player2_left += step;
        break;
    }

    player2.style.left = player2_left + "px";
    player2.style.top = player2_top + "px";
  } else if (player2_top == 530 && player2_left > -10 && player2_left < 830) {
    switch (event.key) {
      case "ArrowUp":
        player2_top -= step;
        break;
      case "ArrowLeft":
        player2_left -= step;
        break;
      case "ArrowRight":
        player2_left += step;
        break;
    }

    player2.style.left = player2_left + "px";
    player2.style.top = player2_top + "px";
  } else if (player2_left == -10 && player2_top > -10 && player2_top < 530) {
    switch (event.key) {
      case "ArrowUp":
        player2_top -= step;
        break;
      case "ArrowDown":
        player2_top += step;
        break;
      case "ArrowRight":
        player2_left += step;
        break;
    }

    player2.style.left = player2_left + "px";
    player2.style.top = player2_top + "px";
  } else if (player2_left == 830 && player2_top > -10 && player2_top < 530) {
    switch (event.key) {
      case "ArrowUp":
        player2_top -= step;
        break;
      case "ArrowDown":
        player2_top += step;
        break;
      case "ArrowLeft":
        player2_left -= step;
        break;
    }

    player2.style.left = player2_left + "px";
    player2.style.top = player2_top + "px";
  } else if (player2_top == -10 && player2_left == -10) {
    switch (event.key) {
      case "ArrowDown":
        player2_top += step;
        break;
      case "ArrowRight":
        player2_left += step;
        break;
    }

    player2.style.left = player2_left + "px";
    player2.style.top = player2_top + "px";
  } else if (player2_top == -10 && player2_left == 830) {
    switch (event.key) {
      case "ArrowDown":
        player2_top += step;
        break;
      case "ArrowLeft":
        player2_left -= step;
        break;
    }

    player2.style.left = player2_left + "px";
    player2.style.top = player2_top + "px";
  } else if (player2_top == 530 && player2_left == -10) {
    switch (event.key) {
      case "ArrowUp":
        player2_top -= step;
        break;
      case "ArrowRight":
        player2_left += step;
        break;
    }

    player2.style.left = player2_left + "px";
    player2.style.top = playe2_top + "px";
  } else if (player2_top == 530 && player2_left == 830) {
    switch (event.key) {
      case "ArrowUp":
        player2_top -= step;
        break;
      case "ArrowLeft":
        player2_left -= step;
        break;
    }

    player2.style.left = player2_left + "px";
    player2.style.top = player2_top + "px";
  }
}

function BallMoveDown() {
  ball_top += step;
  ball.style.top = ball_top + "px";
}

function BallMoveUp() {
  ball_top -= step;
  ball.style.top = ball_top + "px";
}

function BallMoveLeft() {
  ball_left -= step;
  ball.style.left = ball_left + "px";
}

function BallMoveRight() {
  ball_left += step;
  ball.style.left = ball_left + "px";
}
