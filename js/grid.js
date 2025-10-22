  document.getElementById("viewStudentsBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const grid = document.getElementById("studentsGrid");
    grid.style.display = (grid.style.display === "none" || grid.style.display === "") ? "grid" : "none";
    this.textContent = grid.style.display === "grid" ? "Hide Students" : "View All Students";
  });

