// Patent list
  const patents = [
    {sno:1, name:"Water purification system", number:"524597", date:"13-03-2024", status:"Granted"},
    {sno:2, name:"A system and method for production of single polymer towpreg through wet electrostatic powder coating", number:"432223", date:"19-05-2023", status:"Granted"},
    {sno:3, name:"Apparatus for measurement of heat transfer through thermal protective clothing", number:"488431", date:"24-12-2023", status:"Granted"},
    {sno:4, name:"An apparatus and method for measuring wicking properties of a fabric material", number:"486695", date:"21-12-2023", status:"Granted"},
    {sno:5, name:"An apparatus for measuring fabric hand value", number:"353250", date:"08-12-2020", status:"Granted"},
    {sno:6, name:"A Draftometer", number:"221976", date:"12-07-2008", status:"Granted"},
    {sno:7, name:"Apparatus and process for fabricating natural fiber based flexible thermally bonded yarn for thermoplastic composite reinforcement", number:"467023", date:"12-10-2018", status:"Granted"},
    {sno:8, name:"Contact heat and radiant heat based tomodynamometer cut test apparatus and method thereof", number:"Application No: 202311055228", date:"17-08-2023", status:"Published"},
    {sno:9, name:"Tomodynamometer integrated with abrasion and stretching functionality", number:"Application No: 202311057731", date:"29-08-2023", status:"Published"},
    {sno:10, name:"Temperature regulated shape memory polymers and a method of preparation thereof", number:"Application No: 202211034288", date:"28-06-2022", status:"Published"},
    {sno:11, name:"A system and method for preparing ultra-thin spread tow fibers for composite manufacturing", number:"Application No: 202211028670", date:"18-05-2022", status:"Published"},
    {sno:12, name:"Multidirectional thermal protective performance tester", number:"Application No: 202211072988", date:"16-12-2022", status:"Published"},
    {sno:13, name:"A process of manufacturing of a thermally bonded core-sheath structured hybrid yarn", number:"Application No: 201711026451", date:"01-02-2019", status:"Published"},
    {sno:14, name:"A device for measuring frictional characteristics", number:"Application No: 1188/DEL/2002", date:"03-08-2007", status:"Published"},
    {sno:15, name:"Low areal dense Flexi-Rigid Fabric (FRF) structure to protect from different cut related threats", number:"", date:"09-05-2025", status:"Applied"},
    {sno:16, name:"Indigenous equipment for testing slash resistant performance of textiles", number:"", date:"09-05-2025", status:"Applied"},
    {sno:17, name:"Compression bandage tester for dynamic condition", number:"", date:"09-05-2025", status:"Applied"},
    {sno:18, name:"An acoustic and thermal performance measuring apparatus for exhaust systems", number:"", date:"29-07-2024", status:"Applied"},
    {sno:19, name:"Design of the instrument determining the protective performance of firefighter clothing under wind driven conditions", number:"", date:"12-10-2022", status:"Applied"},
    {sno:20, name:"Single polymer towpregs system through electrostatic powder spray coating process", number:"", date:"06-06-2020", status:"Applied"},
    {sno:21, name:"An air filtration apparatus", number:"", date:"Sep 2005", status:"Applied"},
    {sno:22, name:"An Instrument for Measuring Cut Resistance of Textile Fabrics", number:"", date:"Jan 2007", status:"Applied"},
    {sno:23, name:"Microclimate Simulator cum Moisture Vapor Transmission Tester", number:"", date:"Nov 2009", status:"Applied"},
    {sno:24, name:"In-Plane Wicking Measurement System", number:"", date:"Mar 2012", status:"Applied"},
    {sno:25, name:"Design and development of two-stage water purification and method of preparing the same", number:"", date:"", status:""}
  ];

  const patentTable = document.getElementById("patentTable");
  const patentBody = document.getElementById("patentBody");
  const patentTitle = document.getElementById("patentTitle");

  // Click event on the .tab div
  document.querySelector('.tab[data-tab="patents"]').addEventListener("click", () => {
    patentBody.innerHTML = ""; // clear table

    // populate
    patents.forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${p.sno}</td>
        <td>${p.name}</td>
        <td>${p.number}</td>
        <td>${p.date}</td>
        <td>${p.status}</td>
      `;
      patentBody.appendChild(row);
    });

    patentTitle.style.display = "block";
    patentTable.style.display = "table";
  });
