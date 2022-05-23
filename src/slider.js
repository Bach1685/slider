export class Slider {
  _slides;
  _HTML;
  _slidesAreaHTML;
  _buttonLeftHTML;
  _buttonRightHTML;

  get HTML() {
    return this._HTML;
  }

  constructor() {
    this._HTML = document.createElement("div");
    this._HTML.classList.add("slider");

    this._buttonLeftHTML = document.createElement("button");
    this._buttonLeftHTML.classList.add("button");
    this._buttonLeftHTML.classList.add("button--left");
    this._HTML.append(this._buttonLeftHTML);

    this._slidesAreaHTML = document.createElement("div");
    this._slidesAreaHTML.classList.add("slidesArea");
    this._HTML.append(this._slidesAreaHTML);

    this._buttonRightHTML = document.createElement("button");
    this._buttonRightHTML.classList.add("button");
    this._buttonRightHTML.classList.add("button--right");
    this._HTML.append(this._buttonRightHTML);
    this._slides = [];
  }

  addClasses(classesNames) {
    if (Array.isArray(classesNames)) {
      this._HTML.classList.add(...classesNames);
    } else {
      this._HTML.classList.add(classesNames);
    }
  }

  addSlides(slides) {
    if (Array.isArray(slides)) {
      this._slides.push(...slides);
      this._slidesAreaHTML.append(...slides.map((slide) => slide.HTML));
      return;
    }
    this._slides.push(...slides);
    this._slidesAreaHTML.append(slides.HTML);
  }
}
