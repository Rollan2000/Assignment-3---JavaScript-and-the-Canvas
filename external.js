
// Get the Canvas Element and the 2D rendering context

var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext('2d');

// Adjusting the 5 card's sizes and the spacing

var cardWidth = 300;
var cardHeight = 500;
var cardPadding = 60;


//Add the back card and the 5 Front card images

var cardBackImage = 'images/Back_card.png';
var cardFrontImages = ['images/Blue_eyes_white_dragon-card.png','images/Dark_magician-card.png','images/VWXYZ_dragon catapult_cannon.png','images/Stardust_dragon-card.png','images/xyz_dragon_cannon-card.png'];

// Clicking the back card to reveal the front cards (monsters) part 1


function drawCard(x, y, imageIndex, isFlipped) {
   var cardImage = new Image();
  if (isFlipped) {
    cardImage.src = cardFrontImages[imageIndex];
  } else {
    cardImage.src = cardBackImage;
  }
  ctx.drawImage(cardImage, x, y, cardWidth, cardHeight);
}

function flipCard(index) {

   
  // Clicking to reveal the front cards (monsters) part 2


  let degree = 0;
  var flipInterval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < cardFrontImages.length; i++) {
      drawCard(i * (cardWidth + cardPadding) + cardPadding, cardPadding, i, i === index);
    }
    degree += 5;
    if (degree >= 180) {
      clearInterval(flipInterval);
    }
  }, 1);
}

for (let i = 0; i < cardFrontImages.length; i++) {
  drawCard(i * (cardWidth + cardPadding) + cardPadding, i, false);
}


canvas.addEventListener('click', function (event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  for (let i = 0; i < cardFrontImages.length; i++) {
    var cardX = i * (cardWidth + cardPadding) + cardPadding;
    if (x >= cardX && x <= cardX + cardWidth && y >= cardPadding && y <= cardPadding + cardHeight) {
      flipCard(i);
      break;
    }
  }
});

