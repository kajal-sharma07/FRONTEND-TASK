
const countryInput = document.getElementById("countryInput");
const searchBtn = document.getElementById("searchBtn");
const universityList = document.getElementById("universityList");
const message = document.getElementById("message");

// Function to search universities
async function searchUniversities() {

    const country = countryInput.value.trim();

    // Check empty input
    if (country === "") {
        message.innerText = "Please enter a country name!";
        universityList.innerHTML = "";
        return;
    }

    // Clear previous results
    universityList.innerHTML = "";

    // Show loading message
    message.innerText = "Loading universities...";
    searchBtn.disabled = true;
    searchBtn.innerText = "Searching...";

    try {

        // API URL
        const url = `https://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`;

        // Fetch API
        const response = await fetch(url);

        // Check response
        if (!response.ok) {
            throw new Error("API request failed: " + response.status);
        }

        // Convert response into JSON
        const data = await response.json();

        // Check empty result
        if (data.length === 0) {
            message.innerText = "No universities found!";
            return;
        }

        // Display result count
        message.innerText = `Found ${data.length} universities in ${country}.`;

        // Loop through university data
        data.forEach(function(university) {

            const card = document.createElement("div");
            card.className = "university-card";

            // University name
            const name = document.createElement("h3");
            name.innerText = university.name;

            // Country name
            const countryName = document.createElement("p");
            countryName.innerText = "Country: " + university.country;

            // Domain
            const domain = document.createElement("p");
            domain.innerText = "Domain: " +
                (university.domains?.[0] || "Not available");

            // Website link
            if (university.web_pages && university.web_pages.length > 0) {

                const website = document.createElement("a");

                website.href = university.web_pages[0];
                website.innerText = "Visit Official Website";
                website.target = "_blank";
                website.rel = "noopener noreferrer";

                card.appendChild(name);
                card.appendChild(countryName);
                card.appendChild(domain);
                card.appendChild(website);

            } else {

                card.appendChild(name);
                card.appendChild(countryName);
                card.appendChild(domain);

                const noWebsite = document.createElement("p");
                noWebsite.innerText = "Website not available";

                card.appendChild(noWebsite);
            }

            // Add card to webpage
            universityList.appendChild(card);

        });

    }

    catch (error) {

        console.error("API Error:", error);

        message.innerText =
            "Unable to fetch data. Check your internet or API connection.";

    }

    finally {

        // Enable button again
        searchBtn.disabled = false;
        searchBtn.innerText = "Search";

    }

}


// Search button event
searchBtn.addEventListener("click", searchUniversities);


// Enter key event
countryInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchUniversities();
    }

});
