(() => {
  "use strict";
  class n {
    _innerHTML;
    get innerHTML() {
      return this._innerHTML;
    }
    constructor() {
      (this._innerHTML = document.createElement("div")),
        this._innerHTML.classList.add("slide");
    }
    addClasses(...n) {
      n.forEach((n) => this._innerHTML.classList.add(n));
    }
  }
  let t = new (class {
    _slides;
    _innerHTML;
    _slidesAreaInnerHTML;
    _buttonLeftInnerHTML;
    _buttonRightInnerHTML;
    get innerHTML() {
      return this._innerHTML;
    }
    constructor() {
      (this._innerHTML = document.createElement("div")),
        this._innerHTML.classList.add("slider"),
        (this._buttonLeftInnerHTML = document.createElement("button")),
        this._buttonLeftInnerHTML.classList.add("button"),
        this._buttonLeftInnerHTML.classList.add("button--left"),
        this._innerHTML.append(this._buttonLeftInnerHTML),
        (this._slidesAreaInnerHTML = document.createElement("div")),
        this._slidesAreaInnerHTML.classList.add("slidesArea"),
        this._innerHTML.append(this._slidesAreaInnerHTML),
        (this._buttonRightInnerHTML = document.createElement("button")),
        this._buttonRightInnerHTML.classList.add("button"),
        this._buttonRightInnerHTML.classList.add("button--right"),
        this._innerHTML.append(this._buttonRightInnerHTML),
        (this._slides = []);
    }
    addClasses(n) {
      Array.isArray(n)
        ? n.forEach((n) => this._innerHTML.classList.add(n))
        : this._innerHTML.classList.add(className);
    }
    addSlides(n) {
      Array.isArray(n)
        ? n.forEach((n) => {
            this._slides.push(n), this._slidesAreaInnerHTML.append(n.innerHTML);
          })
        : (this._slides.push(n), this._slidesAreaInnerHTML.append(n.innerHTML));
    }
  })();
  const e = [new n(), new n(), new n()];
  t.addSlides(e), document.body.append(t.innerHTML);
})();
