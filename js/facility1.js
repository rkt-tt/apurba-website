document.getElementById('viewInstrumentBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const grid = document.getElementById('instrumentGrid');
    grid.style.display = grid.style.display === 'none' || grid.style.display === '' ? 'grid' : 'none';
}); 

document.addEventListener("DOMContentLoaded", function() {
    const researchTab = document.querySelector('.tab[data-tab="research"]');
    const researchContent = document.getElementById('researchFacilitiesContent');
    const instrumentGrid = document.getElementById('instrumentGrid');
    const facilityGrid = document.getElementById('facilityGrid');
    const viewInstrumentBtn = document.getElementById('viewInstrumentBtn');
    const viewFacilityBtn = document.getElementById('viewFacilityBtn');

    // Click on Research Facilities tab
    researchTab.addEventListener('click', function() {
        researchContent.style.display = "block";   // show buttons
        instrumentGrid.style.display = "none";    // hide instruments
        facilityGrid.style.display = "none";      // hide facilities
    });

    // Click on Instrument Developed
    viewInstrumentBtn.addEventListener('click', function(e) {
        e.preventDefault();
        instrumentGrid.style.display = "grid";
        facilityGrid.style.display = "none";
    });

    // Click on Available Instrument Facilities
    viewFacilityBtn.addEventListener('click', function(e) {
        e.preventDefault();
        facilityGrid.style.display = "block";
        instrumentGrid.style.display = "none";
    });
});