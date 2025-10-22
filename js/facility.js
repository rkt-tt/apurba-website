document.addEventListener("DOMContentLoaded", function() {
    const researchTab = document.querySelector('.tab[data-tab="research"]');
    const allTabs = document.querySelectorAll('.tab'); // all main menu tabs
    const researchContent = document.getElementById('researchFacilitiesContent');
    const instrumentGrid = document.getElementById('instrumentGrid');
    const facilityGrid = document.getElementById('facilityGrid');
    const viewInstrumentBtn = document.getElementById('viewInstrumentBtn');
    const viewFacilityBtn = document.getElementById('viewFacilityBtn');

    // When "Research Facilities" main tab clicked
    researchTab.addEventListener('click', function() {
        researchContent.style.display = "block";   // show buttons
        instrumentGrid.style.display = "none";    // hide instruments
        facilityGrid.style.display = "none";      // hide facility grid

        // remove active class from both buttons
        viewInstrumentBtn.classList.remove("active");
        viewFacilityBtn.classList.remove("active");
    });

    // Hide everything when other main tabs clicked
    allTabs.forEach(tab => {
        if (tab !== researchTab) {
            tab.addEventListener('click', function() {
                researchContent.style.display = "none";
                instrumentGrid.style.display = "none";
                facilityGrid.style.display = "none";
                viewInstrumentBtn.classList.remove("active");
                viewFacilityBtn.classList.remove("active");
            });
        }
    });

    // Show Instrument Developed
    viewInstrumentBtn.addEventListener('click', function(e) {
        e.preventDefault();
        instrumentGrid.style.display = "grid";
        facilityGrid.style.display = "none";
        viewInstrumentBtn.classList.add("active");
        viewFacilityBtn.classList.remove("active");
    });

    // Show Available Instrument Facilities
    viewFacilityBtn.addEventListener('click', function(e) {
        e.preventDefault();
        facilityGrid.style.display = "grid";
        instrumentGrid.style.display = "none";
        viewFacilityBtn.classList.add("active");
        viewInstrumentBtn.classList.remove("active");
    });
});