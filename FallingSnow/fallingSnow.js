(() => {
  //setup
  function setup() {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return {
      canvas,
      canvasContext: canvas.getContext("2d"),
      numberOfSnowBalls: 250,
    };
  }

  //random
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //create SnowBalls
  function createSnowBalls(canvas, numberOfSnowBalls) {
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        radius: random(2, 4)
      };
    });
  }

  //drawSnowBalls
  function drawSnowBall(canvasContext, snowBall) {
    canvasContext.beginPath();
    canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2);
    canvasContext.fillStyle = `rgba(0, 0, 128, ${snowBall.opacity})`;
    canvasContext.fill();
  }

  // run
  function run() {
    // destructuring object setup
    const { canvas, canvasContext, numberOfSnowBalls } = setup();
    // เรียกใช้ function createSnowBalls
    createSnowBalls(canvas, numberOfSnowBalls);
    // เรียกใช้งาน function drawSnowBalls
    snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
  }

  run();
})();
