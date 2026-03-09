// Common JS style frontend script
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/report/monthly")
    .then(response => response.json())
    .then(data => {
      const tbody = document.getElementById("reportBody");
      tbody.innerHTML = ""; // clear old rows

      data.forEach(row => {
        const tr = document.createElement("tr");

        const tdMonth = document.createElement("td");
        tdMonth.textContent = row.month;

        const tdTotal = document.createElement("td");
        tdTotal.textContent = row.total_amount;

        const tdCount = document.createElement("td");
        tdCount.textContent = row.total_transactions;

        const tdAvg = document.createElement("td");
        tdAvg.textContent = row.average_amount;

        tr.appendChild(tdMonth);
        tr.appendChild(tdTotal);
        tr.appendChild(tdCount);
        tr.appendChild(tdAvg);

        tbody.appendChild(tr);
      });
    })
    .catch(err => {
      console.error("Error fetching report:", err);
    });
});