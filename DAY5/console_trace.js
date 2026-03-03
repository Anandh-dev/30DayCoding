function divide() {
  let x = Number(document.getElementById("1").value);
  let y = Number(document.getElementById("2").value);

  console.log("Inputs:", x, y);

  if (y === 0) {
    console.error("Error: Division by zero");
    alert("Cannot divide by zero!");
    return null;
  }

  let result = x / y;
  console.log("Result:", result);

  let listDiv = document.getElementById("ans");
  listDiv.innerHTML = "<h3>Divided answer:</h3>";
  listDiv.innerHTML += `<p>${result}</p>`;

  return result;
}