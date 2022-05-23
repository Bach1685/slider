// path — встроенный в Node.js модуль
const path = require("path");

module.exports = {
  // Указываем путь до входной точки:
  entry: "./src/index.js",
  // Описываем, куда следует поместить результат работы:
  output: {
    // Путь до директории (важно использовать path.resolve):
    path: path.resolve(__dirname, "dist"),
    // Имя файла со сборкой:
    filename: "bundle.js",
  },
};
