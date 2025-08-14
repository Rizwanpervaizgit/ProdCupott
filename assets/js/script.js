document.querySelectorAll('a').forEach(link => {
    alert();
    const href = link.getAttribute('href');

    // Check if the link contains "privacy.html" in its href
    if (href && href.includes("privacy.html")) {
        // Add an event listener for the click event
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any default behavior
            
            // Redirect to the privacy policy page
            window.location.href = href; // Redirect to the privacy.html
        });
    }
});


