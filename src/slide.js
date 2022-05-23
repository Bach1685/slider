export class Slide {
  _HTML;
  get HTML() {
    return this._HTML;
  }
  
  constructor() {
    this._HTML = document.createElement("div");
    this._HTML.classList.add("slide");
  }

  addClasses(classesNames) {
    if (Array.isArray(classesNames)) {
      this._HTML.classList.add(...classesNames);
    } else {
      this._HTML.classList.add(classesNames);
    }
  }
}
