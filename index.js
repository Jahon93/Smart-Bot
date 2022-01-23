document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.getElementById("title").textContent = "Plan to ..."
      document.body.classList.add("fun")
    })
})