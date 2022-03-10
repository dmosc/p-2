const displayMessage = () => {
  const inputElement = document.getElementById("input");
  window.alert(inputElement.value);
  inputElement.value = "";
};
