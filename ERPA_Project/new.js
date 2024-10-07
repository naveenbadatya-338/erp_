document.getElementById("clients-tab").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const searchContainer = document.getElementById("search-container");
    searchContainer.style.display = searchContainer.style.display === "block" ? "none" : "block";
    document.getElementById("search-box").value = ""; // Clear the search box when opened
});

// Optional: Add a search function (you can expand this)
document.getElementById("search-button").addEventListener("click", function () {
    const query = document.getElementById("search-box").value.trim();
    if (query === "FSCJ" || query === "Alamu") {
        alert(`Searching for: ${query}`);
        // Add your search functionality here
    } else {
        alert("Please search for FSCJ or Alamu only.");
    }
});
