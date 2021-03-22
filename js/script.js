
function prevClick(){

  var activeImg = $('.active');
  var activeCircle = $('.activeCic')

  if (activeImg.hasClass('first')) {

    var prevImg = $('img.last');
    activeImg.removeClass('active');
    prevImg.addClass('active');

  }
  else {

    var prevImg = activeImg.prev('img');
    activeImg.removeClass('active');
    prevImg.addClass('active');

  }

  // Cerchi girano insieme con le foto
  if (activeCircle.hasClass('first')) {

    var prevLi = $('li.last');
    activeCircle.removeClass('activeCic');
    prevLi.addClass('activeCic');

  }
  else {

    var prevLi = activeCircle.prev('li');
    activeCircle.removeClass('activeCic');
    prevLi.addClass('activeCic');

  }



}

function nextClick(){

  var activeImg = $('.active');
  var activeCircle = $('.activeCic')

  if (activeImg.hasClass('last')) {

    var nextImg = $('img.first');
    activeImg.removeClass('active');
    nextImg.addClass('active');

  }
  else {

    var nextImg = activeImg.next('img');
    activeImg.removeClass('active');
    nextImg.addClass('active');

  }

  // Cerchi girano insieme con le foto
  if (activeCircle.hasClass('last')) {

    var nextLi = $('li.first');
    activeCircle.removeClass('activeCic');
    nextLi.addClass('activeCic');

  }
  else {

    var nextLi = activeCircle.next('li');
    activeCircle.removeClass('activeCic');
    nextLi.addClass('activeCic');

  }

}

function init() {

  $('.next').click(nextClick);
  $('.prev').click(prevClick);

}

$(document).ready(init);
