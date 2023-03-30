// <!--=============== colors ===============-->
const blue = document.querySelector('#blue')
const purple = document.querySelector('#purple')
const pink = document.querySelector('#pink')
const teal = document.querySelector('#teal')
const red = document.querySelector('#red')
const orange = document.querySelector('#orange')
const brown = document.querySelector('#brown')
const gray = document.querySelector('#gray')
const body = document.querySelector('body')


$(function () {
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });
  $('#purple').click(function (e) {
    e.preventDefault()
    $("body").removeClass('blue');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('purple')
  })
  $('#blue').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('blue')
  })
  $('#pink').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('blue');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('pink')
  })
  $('#teal').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('blue');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('teal')
  })
  $('#red').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('blue');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('red')
  })
  $('#orange').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('blue');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('orange')
  })
  $('#brown').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('blue');
    $("body").removeClass('gray');
    $('body').addClass('brown')
  })
  $('#gray').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('blue');
    $('body').addClass('gray')
  })
})

 
var $window = $(window);
 
$(window).on('scroll', function() {
    $topOffset = $(this).scrollTop();
 
    console.log($topOffset);
 
});