const checkboxes = document.querySelectorAll(".item");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {

    const marcados = document.querySelectorAll(".item:checked");

    if (marcados.length >= 2) {
      checkboxes.forEach((cb) => {
        if (!cb.checked) {
          cb.disabled = true;
        }
      });
    } else {
      checkboxes.forEach((cb) => {
        cb.disabled = false;
      });
    }

  });
});