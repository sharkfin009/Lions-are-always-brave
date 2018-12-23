import renderer from './background';
import Parallax from 'parallax-js';

function init() {
  var app = document.getElementsByClassName("container");
  var background = renderer;
  app[0].appendChild(background.domElement);

  //parallax removed cos doesnt play well with ScrollMagic
  // var heading = document.getElementsByClassName("heading-container");
  // document.body.onload = par();
  // function par(){
  //   var scene = new Parallax(heading[0],{relativeInput:true});
  // }
  var controller = new ScrollMagic.Controller;
  var dan = document.getElementById('daniel');
  var carl = document.getElementById('carlos');

  var tl = new TimelineMax();

  tl.to(dan, 30, {
      x: -500,
      y: 0,
    })
    .to(carl, 30, {
      x: 500,
      y: 0,
    }, '-=30')
    .from('.heading', 60, {
      x: -400,
      y: 0,
    }, '-=30')
    .to('.heading', 20, {
      opacity: 0
    }, '-=20');

  var coverPage = new ScrollMagic.Scene({
      offset: 0,
      duration: 20000,
      triggerElement: ".coverpage",
    })
    .setPin(".coverPage")
    .addIndicators()
    .setTween(tl);

controller.addScene(coverPage);

  var hello = document.getElementById('hello');

//   var pageOne = new ScrollMagic.Scene({
//     offset: 4000,
//     duration: 6000,
//     triggerElement: ".page-one",
//   })
//   .setTween(tl)
//   .addIndicators();
//
// controller.addScene(pageOne);
}
init();
