const year = document.getElementById("year");
const themeBtn = document.getElementById("themeBtn");

year.textContent = new Date().getFullYear();

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeBtn.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("cv-theme", isDark ? "dark" : "light");
});

if (localStorage.getItem("cv-theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.textContent = "☀";
}
