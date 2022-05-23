import { Slide } from "./slide.js";
import { Slider } from "./slider.js";

let slider = new Slider();

const cards = [new Slide(), new Slide(), new Slide()];

slider.addSlides(cards);

document.body.append(slider.HTML);