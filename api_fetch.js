// api_fetch.js

document.addEventListener('DOMContentLoaded', () => {
  const apiSection = document.getElementById("apiData");

  fetch("https://api.publicapis.org/entries")
    .then(response => {
      if (!response.ok) throw new Error("Problem fetching data");
      return response.json();
    })
    .then(data => {
      const entries = data.entries.slice(0, 5);

      entries.forEach(entry => {
        const div = document.createElement("div");
        div.className = "api-entry";
        div.innerHTML = `
          <h3>${entry.API}</h3>
          <p>${entry.Description}</p>
          <a href="${entry.Link}" target="_blank">Visit API</a>
        `;
        apiSection.appendChild(div);
      });
    })
    .catch(err => {
      apiSection.innerHTML = "<p style='color:red;'>Could not load data. Please try again later.</p>";
      console.error("Fetch error:", err);
    });
});
