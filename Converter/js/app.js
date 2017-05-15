"use strict";

document.addEventListener("DOMContentLoaded", function(){
  const section = document.getElementById("conversions");
  const btn = document.getElementById("convertBtn");

  function convert(){
    let amount = document.getElementById("amount").value;
    let randomNum = Math.floor((Math.random() * 100));
    let date = new Date();
    let newConversion = document.createElement("p");
    let newDateElement = document.createElement("span");

    newConversion.innerText = (amount * 4.2 * (1+(randomNum + 50)/1000)).toFixed(4);
    newDateElement.innerText = date.getFullYear() + "."
      + ("0" + (date.getMonth() + 1)).slice(-2)
      + "." + ("0" + date.getDate()).slice(-2)
      + " " + ("0" + date.getHours()).slice(-2)
      + ":" + ("0" + date.getMinutes()).slice(-2);
    newConversion.classList.add("amountAfter");
    newDateElement.classList.add("date");
    section.appendChild(newConversion);
    section.appendChild(newDateElement);
  }

  btn.addEventListener("click", convert);
});
