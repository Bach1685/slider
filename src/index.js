import { Slide } from "./slide.js";
import { Slider } from "./slider.js";

let slider = new Slider();

const cards = [new Slide(), new Slide(), new Slide()];

slider.addSlides(cards);

document.body.append(slider.innerHTML);

// setTimeout(() => {
// //   slider._slides[0]._innerHTML.style.marginLeft = "500px";
// //   slider._slides[1]._innerHTML.style.marginLeft = '500px';
// //   slider._slides[2]._innerHTML.style.marginLeft = '500px';
// }, 3000);
