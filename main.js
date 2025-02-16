let labels = document.querySelectorAll("label");
let inputs = document.querySelectorAll("input");
let btn = document.querySelector("button");
let spans = document.querySelectorAll("span");
let validation = document.querySelectorAll(`p`);
btn.onclick = function () {
  checkDay();
  checkMonth();
  checkYear();
  if (checkDay() && checkMonth() && checkYear()) {
    const date = new Date(
      inputs[2].value,
      inputs[1].value - 1,
      inputs[0].value
    );
    const now = new Date();
    const years = (now - date) / 1000 / 60 / 60 / 24 / 365;
    const months = (years - parseInt(years)) * 12;
    const days = (months - parseInt(months)) * 31;
    spans[0].textContent = parseInt(years);
    spans[1].textContent = parseInt(months);
    spans[2].textContent = parseInt(days);
  } else {
    spans.forEach((x) => (x.textContent = "- -"));
  }
};
function checkDay() {
  let dayF = false;
  if (inputs[0].value === "") {
    inputs.forEach((x) => (x.style.borderColor = "var(--Light-red)"));
    labels.forEach((x) => (x.style.color = "var(--Light-red)"));
    validation[0].textContent = "This field is required";
    validation[0].style.display = "block";
    dayF = false;
  } else if (
    isNaN(parseInt(inputs[0].value)) ||
    parseInt(inputs[0].value) > 31 ||
    parseInt(inputs[0].value) < 1
  ) {
    inputs.forEach((x) => (x.style.borderColor = "var(--Light-red)"));
    labels.forEach((x) => (x.style.color = "var(--Light-red)"));
    validation[0].textContent = "Must be valid day";
    validation[0].style.display = "block";
    dayF = false;
  } else {
    inputs.forEach((x) => (x.style.borderColor = "var(--Light-grey)"));
    labels.forEach((x) => (x.style.color = "var(--Smokey-grey)"));
    validation[0].style.display = "none";
    dayF = true;
  }
  return dayF;
}
function checkMonth() {
  let monthF = false;
  if (inputs[1].value === "") {
    inputs.forEach((x) => (x.style.borderColor = "var(--Light-red)"));
    labels.forEach((x) => (x.style.color = "var(--Light-red)"));
    validation[1].textContent = "This field is required";
    validation[1].style.display = "block";
    monthF = false;
  } else if (
    isNaN(parseInt(inputs[1].value)) ||
    parseInt(inputs[1].value) > 12 ||
    parseInt(inputs[1].value) < 1
  ) {
    inputs.forEach((x) => (x.style.borderColor = "var(--Light-red)"));
    labels.forEach((x) => (x.style.color = "var(--Light-red)"));
    validation[1].textContent = "Must be valid Month";
    validation[1].style.display = "block";
    monthF = false;
  } else {
    inputs.forEach((x) => (x.style.borderColor = "var(--Light-grey)"));
    labels.forEach((x) => (x.style.color = "var(--Smokey-grey)"));
    validation[1].style.display = "none";
    monthF = true;
  }
  return monthF;
}
function checkYear() {
  let yearF = false;
  if (inputs[2].value === "") {
    inputs.forEach((x) => (x.style.borderColor = "var(--Light-red)"));
    labels.forEach((x) => (x.style.color = "var(--Light-red)"));
    validation[2].textContent = "This field is required";
    validation[2].style.display = "block";
    yearF = false;
  } else if (
    isNaN(parseInt(inputs[2].value)) ||
    parseInt(inputs[2].value) >=
      parseInt(Date.now() / 1000 / 60 / 60 / 24 / 365 + 1970)
  ) {
    inputs.forEach((x) => (x.style.borderColor = "var(--Light-red)"));
    labels.forEach((x) => (x.style.color = "var(--Light-red)"));
    validation[2].textContent = "Must be in the past";
    validation[2].style.display = "block";
    yearF = false;
  } else {
    inputs.forEach((x) => (x.style.borderColor = "var(--Light-grey)"));
    labels.forEach((x) => (x.style.color = "var(--Smokey-grey)"));
    validation[2].style.display = "none";
    yearF = true;
  }
  return yearF;
}
