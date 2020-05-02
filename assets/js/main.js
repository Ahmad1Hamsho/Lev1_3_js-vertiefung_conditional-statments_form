function greaterThen() {
  event.preventDefault();
  const alter = document.getElementById("input").value;
  if (alter >= 18) {
    document.getElementById("ergebniss").innerHTML =
      "<h1>Ja. Du kannst Shisha rauchen</h1>";
  } else {
    document.getElementById("ergebniss").innerHTML =
      "<h1>Du darfst leider noch nicht Shisha rauchen</h1>";
  }
}
