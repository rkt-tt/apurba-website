
// Step 1: Your student data array
const students = [
  {
    name: "Siddhi Vardhan Singh Rao",
    thesis: "Thermo-acoustic behaviour of textile structures",
    image: "images/5. Siddhi Vardhan Singh Rao.JPG"
  },
  {
    name: "Sudhanshu Maurya",
    thesis: "Studies of multilayered extreme heat protective clothing",
    image: "images/6. Sudhanshu Maurya"
  },
  {
    name: "Ashutosh Sahi",
    thesis: "Studies on wet processing of industrial Hemp fibre for improving the characteristics",
    image: "images/7. Ashutosh Sahi.JPG"
  },
  {
    name: "Utsav Bhardwaj",
    thesis: "Modelling and fabrication of optimal fiber-based filter for effective air-borne fine-particle capture",
    image: "images/8. Utsav Bhardwaj.JPG"
  },
    {
    name: "Habibur Rahman",
    thesis: "Natural fibre reinforced thermoplastic composites",
    image: "images/9. Habibur Rahman.JPG"
  },
  {
    name: "Sandeep Kumar Maurya",
    thesis: "Development and characterization of knitted based electrically heating fabrics for therapeutic applications",
    image: "images/10. Sandeep Kumar Maurya.JPG"
  },
  {
    name: "Hema Garg",
    thesis: "Shape Memory Polymer Nanocomposites for Textile application",
    image: "images/11. Hema Garg.JPG"
  },
  {
    name: "Ravi Kumar Jain",
    thesis: "Studies on characteristics of spunlace nonwovens",
    image: "images/12. Ravi Kumar Jain.JPG"
  },
  {
    name: " Kamal Kumar",
    thesis: "Comfort characteristics of inner layer fabrics for extreme cold climate clothing",
    image: "images/13. Kamal Kumar.JPG"
  },
  {
    name: "Puneet Amarjeet Singh",
    thesis: "Study on comfort characteristics of blended fabrics",
    image: "images/14. Puneet Amarjeet Singh.JPG"
  },   
  {
    name: "Tathagata Das",
    thesis: "Study on thermal insulation characteristics of inner layers",
    image: "images/15. Tathagata Das.JPG"
  },
  {
    name: " Rochak Rathour",
    thesis: "Study on thermal protective characteristics of protective outer layer",
    image: "images/16. Rochak Rathour.JPG"
  },  
  {
    name: "Ganesh Jogur",
    thesis: "High-performance thermoplastic composites through commingled hybrid yarn and textile preforms: influence of yarn and fabric structures on composite mechanical and impact properties",
    image: "images/17. Ganesh Jogur.JPG"
  },  
  {
    name: " Ashraf Nawaz Khan",
    thesis: "Study of impact property of single polymer thermoplastic composite made through hybrid yarn",
    image: "images/18. Ashraf Nawaz Khan.JPG"
  },  
    {
    name: " Bhavna Rajput",
    thesis: "Study on heat and mass transfer through thermal protective clothing",
    image: "images/19. Bhavna Rajput.JPG"
  },  
    {
    name: "Pramod S.",
    thesis: "Designing and investigation of textile based hot compression system for bio-medical application",
    image: "images/20. Pramod S..JPG"
  },  
    {
    name: " Rahul Gadkari",
    thesis: "Study on water filtration characteristics of nano-treated nonwoven water filter",
    image: "images/21. Rahul Gadkari.JPG"
  },  
    {
    name: " Vijay Anil Goud",
    thesis: "Influence of various forms of polypropylene matrix (fiber, powder and film states) on the mechanical characteristics of carbon-polypropylene composites",
    image: "images/22. Vijay Anil Goud.JPG"
  },  
    {
    name: " Mahadev Bar",
    thesis: "Studies on natural fibre based twist-less hybrid yarn reinforced thermoplastic composites",
    image: "images/23. Mahadev Bar.JPG"
  },  
    {
    name: " Udayraj",
    thesis: "Experimental and numerical studies for performance characterization of thermal protective clothing",
    image: "images/24. Udayraj.JPG"
  },  
    {
    name: " Prabir Pratihar",
    thesis: "Study on handle characteristics of fabrics",
    image: "images/25. Prabir Pratihar.JPG"
  },  
    {
    name: " Krishnasamy J",
    thesis: "Study on electromagnetic shielding effectiveness of fibrous composite materials",
    image: "images/26. Krishnasamy J.JPG"
  },  
    {
    name: " Reshmi Thakur",
    thesis: "Study of aerosol filtration behavior of electret filters",
    image: "images/27. Reshmi Thakur.JPG"
  },  
    {
    name: " Piyali Hatua",
    thesis: "Study on UV resistance of fabrics",
    image: "images/28. Piyali Hatua.JPG"
  },  
    {
    name: " Bipin Kumar",
    thesis: "Modelling and analysis of compression bandage",
    image: "images/29. Bipin Kumar.JPG"
  },  
    {
    name: " Shabaridharan K",
    thesis: "Study on heat and moisture transmission characteristics though multi-layered clothing assembly",
    image: "images/30. Shabaridharan K.JPG"
  },  
    {
    name: " Manpreet Manshahia",
    thesis: "Study on transmission characteristics through sports textiles",
    image: "images/31. Manpreet Manshahia.JPG"
  },  
    {
    name: " Alok Kumar",
    thesis: "Structural Dynamics of spun yarns during extension",
    image: "images/32. Alok Kumar.jpg"
  },  
    {
    name: "  Brojeswari Das",
    thesis: "Studies on moisture transmission through fabrics",
    image: "images/33. Brojeswari Das.JPG"
  },  
    {
    name: " K. V. P. Singh",
    thesis: "Modification of friction spun yarn for apparel end use",
    image: "images/34. K. V. P. Singh.JPG"
  },  
    {
    name: "  P. Vishnoi",
    thesis: "Influence of some parameters on internal structures of open-end and core-sheath type friction spun yarns",
    image: "images/35. P. Vishnoi.JPG"
  },  
  // Add as many objects as you want
];



// Step 2: Reference to the grid
const grid = document.getElementById("studentsGrid");

// Step 3: Function to generate HTML cards dynamically
function renderStudents() {
  grid.innerHTML = ""; // clear old content
  students.forEach(student => {
    const card = `
      <div class="student-card glass-panel">
        <div
          class="student-image-placeholder"
          style="
            background-image: url('${student.image}');
            background-size: cover;
            background-position: center;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;">
        </div>
        <div class="student-overlay">
          <h3 class="student-name">${student.name}</h3>
          <p class="student-thesis">${student.thesis}</p>
        </div>
      </div>`;
    grid.innerHTML += card;
  });
}

// Step 4: Button click to toggle visibility
document.getElementById("viewStudentsBtn").addEventListener("click", function (e) {
  e.preventDefault();
  if (grid.style.display === "none" || grid.style.display === "") {
    renderStudents(); // build cards only when showing
    grid.style.display = "grid";
    this.textContent = "Hide PhD";
  } else {
    grid.style.display = "none";
    this.textContent = "PhD";
  }
});

