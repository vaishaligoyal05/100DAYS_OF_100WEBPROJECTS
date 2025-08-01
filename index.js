const projects = [
  "Animated Landing Page",
  "To-Do List",
  "Weather App",
  
  // Add more project names as needed
];

const tableBody = document.getElementById("tableBody");
const projectCount = document.getElementById("projectCount");
projectCount.textContent = projects.length;

projects.forEach((name, index) => {
  const day = `Day ${String(index + 1).padStart(2, "0")}`;
  const folder = `day${String(index + 1).padStart(2, "0")}`;
  const link = `public/${folder}/index.html`;

  const row = document.createElement("tr");
  row.classList.add("project-row");

  row.innerHTML = `
    <td class="p-4 font-semibold text-primary">${day}</td>
    <td class="p-4">${name}</td>
    <td class="p-4">
      <a href="${link}" target="_blank" class="text-primary underline hover:text-pink-500">Live Demo</a>
    </td>
  `;

  tableBody.appendChild(row);
});
