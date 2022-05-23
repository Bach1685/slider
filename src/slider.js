export class Slider {
  _slides;
  _innerHTML;
  _slidesAreaInnerHTML;
  _buttonLeftInnerHTML;
  _buttonRightInnerHTML;
  
  get innerHTML() {
    return this._innerHTML;
  }

  constructor() {
    this._innerHTML = document.createElement("div");
    this._innerHTML.classList.add("slider");

    this._buttonLeftInnerHTML = document.createElement("button");
    this._buttonLeftInnerHTML.classList.add("button");
    this._buttonLeftInnerHTML.classList.add("button--left");
    this._innerHTML.append(this._buttonLeftInnerHTML);

    this._slidesAreaInnerHTML = document.createElement("div");
    this._slidesAreaInnerHTML.classList.add("slidesArea");
    this._innerHTML.append(this._slidesAreaInnerHTML);

    this._buttonRightInnerHTML = document.createElement("button");
    this._buttonRightInnerHTML.classList.add("button");
    this._buttonRightInnerHTML.classList.add("button--right");
    this._innerHTML.append(this._buttonRightInnerHTML);
    this._slides = [];
  }

  addClasses(classesNames) {
    if (Array.isArray(classesNames)) {
      classesNames.forEach((className) =>
        this._innerHTML.classList.add(className)
      );
      return;
    }
    this._innerHTML.classList.add(className);
  }

  addSlides(slides) {
    if (Array.isArray(slides)) {
      slides.forEach((slide) => {
        this._slides.push(slide);
        this._slidesAreaInnerHTML.append(slide.innerHTML);
      });
      return;
    }
    this._slides.push(slides);
    this._slidesAreaInnerHTML.append(slides.innerHTML);
  }
}
