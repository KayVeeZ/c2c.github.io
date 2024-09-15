// Get references to DOM elements
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.sidebar a');

// Toggle sidebar visibility
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-hidden');
    mainContent.classList.toggle('content-expanded');
});

// Function to handle section navigation
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove 'active' class from all sections
        sections.forEach(section => section.classList.remove('active'));

        // Get the target section from the clicked link's data attribute
        const targetSection = document.getElementById(this.dataset.section);
        
        // Add 'active' class to the target section
        targetSection.classList.add('active');
    });
});
