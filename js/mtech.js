// MTech students list
  const mtechStudents = [
    {name: "Sachin Sharma", project: "Study on electro-magnetic shielding of conductive woven textiles", year: "2025"},
    {name: "Shantnu", project: "A study on the thermoacoustic behaviour of recycled fibre-based nonwoven and hybrid structures", year: "2024"},
    {name: "Gowthamraj G", project: "Development and analysis of high performance yarn based cut resistant woven fabrics", year: "2023"},
    {name: "Nishant Singhal", project: "Electromagnetic shielding behavior of needle punched nonwoven fabric and optimization of parameters for efficient shielding", year: "2022"},
    {name: "Himanshu Maurya", project: "Development of numerical model of heat transfer through hollow 3D woven fabrics for use in thermal protective clothing", year: "2021"},
    {name: "Praveen Kumar", project: "Study on thermal protective performance of needlepunched nonwoven inner layer", year: "2021"},
    {name: "Shreejit Sarkar", project: "Design and evaluation of inner layer for extreme heat protection", year: "2020"},
    {name: "Sandeep Kr. Maurya", project: "Study on thermal protective performance of flame-resistant we knitted structures", year: "2020"},
    {name: "Sumona Chakraborty", project: "Study of linseed flax–pp based twistless yarn composite", year: "2020"},
    {name: "Subham", project: "Study on aerogel surface treatment on fire protective clothing", year: "2019"},
    { name: "Sashi Soni", project: "Effect of finishes on fire protective clothing", year: "2019" },
    { name: "Rochak Rathour", project: "Analysis of electromagnetic shielding effectiveness of woven structure having stainless steel and carbon filament wrapped on polyester yarns", year: "2018" },
    { name: "Zeine Nessre", project: "Study of UV radiation protection character of fabric made from twistless yarn", year: "2017" },
    { name: "Amit Kumar Mondal", project: "Modeling of textile structure", year: "2017" },
    { name: "Ankush Hada", project: "Study of comfort and handle characteristics of fabrics made from low twist yarn", year: "2016" },
    { name: "Atul Puranmal Sharma", project: "Study of bursting behaviour of needle-punched nonwoven fabrics", year: "2015" },
    { name: "Rupali Gupta", project: "Effect of normal pressure on the water transmissivity behavior of nonwoven geotextiles", year: "2014" },
    { name: "Shanmugam B", project: "Hydraulic and mechanical properties of nonwoven composite geotextiles", year: "2013" },
    { name: "Puneet Amarjeet Singh", project: "Study of comfort characteristics of fabric made of elastane core spun yarn in weft", year: "2013" },
    { name: "Manish Sahu", project: "Development and characterization of textile based organic solar cell", year: "2012" },
    { name: "Pavan Kumar Gupta", project: "Study on fabric softness characteristics by nozzle extraction technique", year: "2012" },
    { name: "K. Srisubha", project: "Development of polyactive nonwoven filter fabric with activated carbon", year: "2012" },
    { name: "Satish Chandra Rawat", project: "Configuration of hairs in ring spun yarn", year: "2012" },
    { name: "Sukumar Roy", project: "Objective evaluation of fabric hand value by nozzle extraction method", year: "2011" },
    { name: "Shambhoo Singh Yadaw", project: "Effect of different parameters on microclimate with bulked woven fabrics", year: "2011" },
    { name: "Rupam Chakraborty", project: "Study of handle characteristics of fabrics made of lycra core spun yarn", year: "2011" },
    { name: "Sourav Hazra", project: "Study on heat and moisture transmission through warp knitted spacer fabric", year: "2011" },
    { name: "Pavan Kumar", project: "Study on heat transfer through multilayer clothing", year: "2010" },
    { name: "Sanjay Parmar", project: "Structure and properties of spliced yarn of different spinning technologies", year: "2010" },
    { name: "Amit Kumar Gupta", project: "Study the airflow in blowroom duct using C.F.D", year: "2010" },
    { name: "Vivek Prasad Shaw", project: "Textile composites for electromagnetic shielding application", year: "2010" },
    { name: "R. Raghav", project: "Bursting behavior of spunbonded nonwovens", year: "2009" },
    { name: "Bidyut Biswas", project: "Study on transmission behavior of multilayer fabrics", year: "2009" },
    { name: "A. Banwari", project: "Study on electromagnetic shielding from textile fabric", year: "2008" },
    { name: "Maumita Bera", project: "Influence of coupling agents on jute fibre composites", year: "2008" },
    { name: "R. Nagendran", project: "A study on filtration efficiency of nonwoven fabrics using laser-based air filtration apparatus", year: "2008" },
    { name: "P. Badbare", project: "Design and fabrication of fibre openness tester based on image processing technique", year: "2008" },
    { name: "Rahul Pratap", project: "Effect of ring frame process parameters on finished fabric comfort", year: "2008" },
    { name: "Rahul Mal", project: "Development of cotton acrylic blended high bulked yarns and fabrics for enhancing comfort", year: "2007" },
    { name: "B. Banerjee", project: "Study on the characteristics of needle-punched nonwoven fabrics made from shrinkable and non-shrinkable blended acrylic fibre", year: "2007" },
    { name: "J. Sardar", project: "Design and development of a laser based air filtration apparatus", year: "2007" },
    { name: "M. Balaji", project: "A study on characteristics of bulked cotton yarns and fabrics", year: "2006" },
    { name: "Chaudappa", project: "Filtration characteristics of nonwoven fabrics", year: "2006" },
    { name: "K. V. Singh", project: "Development of electromagnetic shielding textile fabrics", year: "2006" },
    { name: "Ritipal Singh", project: "Enhancement of fabric comfort by incorporating micro-pores within yarn structure", year: "2006" },
    { name: "P. Mallik", project: "Study on internal structure of yarns under different levels of extension", year: "2006" },
    { name: "Sreedevi R", project: "Design and development of an instrument to measure cut resistance of fabrics", year: "2005" },
    { name: "S. Singh", project: "Design and development of a filtration apparatus", year: "2005" },
    { name: "D. B. Mane", project: "Study on frictional characteristics of wipes", year: "2005" },
    { name: "R. Niyogi", project: "Optimisation of fiber friction, roller setting and top arm pressure at various drafting stages", year: "2004" },  
    { name: "J. R. Parida", project: "Influence of fiber friction on splicing performance", year: "2004" },
    { name: "A. Sarkar", project: "An investigation on the effect of processing parameters of composite needle punched air-filters", year: "2004" },
    { name: "V. Nagaraju", project: "Development of an instrument to measure the friction and surface roughness of fabric and study the frictional characteristics of fabrics", year: "2004" },  
    { name: "R. Kumar", project: "Studies on the effect of process and material variables on drafting force of roving", year: "2003" },
    { name: "N. S. Sukhadeva", project: "Studies on the effect of fiber friction, licker-in speed and cylinder-flat setting on fiber openness and yarn quality", year: "2003" },
    { name: "S. Chaudhuri", project: "Influence of fibre openness on yarn properties", year: "2002" },    
    // ... you can continue adding the rest of the 56 students here
  ];

  const toggleBtn = document.getElementById("toggleMtechBtn");
  const studentsTable = document.getElementById("studentsTable");
  const studentsTitle = document.getElementById("studentsTitle");
  const studentsBody = document.getElementById("studentsBody");

  toggleBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // If table is hidden, show it and populate rows
    if (studentsTable.style.display === "none" || studentsTable.style.display === "") {
      studentsBody.innerHTML = ""; // Clear existing rows

      mtechStudents.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.project}</td>
          <td>${student.year}</td>
        `;
        studentsBody.appendChild(row);
      });

      studentsTitle.style.display = "block";
      studentsTable.style.display = "table";
      toggleBtn.textContent = "Hide MTECH"; // Update button text
    } else {
      // Hide table
      studentsTitle.style.display = "none";
      studentsTable.style.display = "none";
      toggleBtn.textContent = "MTECH"; // Update button text
    }
  });