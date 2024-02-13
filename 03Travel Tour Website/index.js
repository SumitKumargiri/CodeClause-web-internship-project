document.getElementById("about-btn").addEventListener("click", function() {
    var content = document.getElementById("content");
    if (content.style.display === "none") {
      content.style.display = "block"; // Show content
    } else {
      content.style.display = "none"; // Hide content
    }
  });