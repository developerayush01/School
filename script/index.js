const checkbox = document.getElementById("check");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});