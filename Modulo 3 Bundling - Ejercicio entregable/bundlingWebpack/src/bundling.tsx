import * as React from "react";
import * as ReactDOM from "react-dom";
const logoImg = require('./content/logo_1.png');

ReactDOM.render(
  <div>
    <h1 className="world">Hello World!!!</h1>
  </div>,
  document.getElementById("root")
);

const img = document.createElement('img');
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

console.log(`We are in: ${process.env.NODE_ENV}`);
console.log(`Base url: ${process.env.API_BASE}`);