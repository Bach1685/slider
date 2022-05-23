export class Slide {
  _innerHTML;
  get innerHTML() {
    return this._innerHTML;
  }
  
  constructor() {
    this._innerHTML = document.createElement("div");
    this._innerHTML.classList.add("slide");
  }

  addClasses(...classesNames) {
    classesNames.forEach((className) =>
      this._innerHTML.classList.add(className)
    );
  }
}
