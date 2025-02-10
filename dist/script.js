// JavaScript to display just the date (Month Day, Year)
document.addEventListener("DOMContentLoaded", function () {
    const dateContainer = document.getElementById("currentDate"); // Target the element
    const currentDate = new Date(); // Get the current date

    // Format the date as "Month Day, Year" (e.g., "February 9, 2025")
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Insert the formatted date into the element
    dateContainer.textContent = formattedDate;
});