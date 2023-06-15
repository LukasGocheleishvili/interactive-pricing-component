let view = document.querySelector(".title2 > span");
let cost = document.querySelectorAll(".price");
let cost2 = document.querySelectorAll(".month");
let slider = document.querySelector(".slider");
let toggle = document.getElementById("billing-toggle");
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener("input", function () {
  updateValue();
  view.textContent = pageViews[slider.value];

  let value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

  this.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;
});

toggle.addEventListener("change", function () {
  isYearly = this.checked;
  updateValue();
  updateToggleStyle();
});

function updateValue() {
  let updatedCost = isYearly
    ? perMonth[slider.value] * 0.75
    : perMonth[slider.value];

  cost.forEach((element) => {
    element.textContent = `$${updatedCost.toFixed(2)}`;
  });

  cost2.forEach((element) => {
    element.textContent = isYearly ? "/ year" : "/ month";
  });
}

function updateToggleStyle() {
  if (isYearly) {
    toggle.parentNode.style.background = "hsl(174, 77%, 80%)";
  } else {
    toggle.parentNode.style.background = "hsl(223, 50%, 87%)";
  }
}

updateToggleStyle();
