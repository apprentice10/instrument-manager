document.addEventListener("DOMContentLoaded", () => {
    fetch("data/instruments.json")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#instrumentTable tbody");
            data.forEach(instrument => {
                let row = `<tr>
                    <td>${instrument.TAG}</td>
                    <td>${instrument.Type}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error("Error loading data:", error));
});
