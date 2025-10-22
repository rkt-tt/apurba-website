// Tab switching logic
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    // ✅ Activate first tab & content on page load
    if (tabs.length > 0 && tabContents.length > 0) {
        tabs[0].classList.add("active");
        tabContents[0].classList.add("active");
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-tab");

            // remove active from all
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));

            // activate clicked
            tab.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
});
