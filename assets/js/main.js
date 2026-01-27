document.addEventListener('DOMContentLoaded', function() {
    var themeToggleBtn = document.getElementById('theme-toggle');
    var themeToggleIcon = document.getElementById('theme-toggle-icon');
    
    function updateIcon() {
        if (document.documentElement.classList.contains('dark')) {
            themeToggleIcon.className = 'fas fa-sun';
        } else {
            themeToggleIcon.className = 'fas fa-moon';
        }
    }
    
    // Set initial icon
    updateIcon();

    themeToggleBtn.addEventListener('click', function() {
        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        
        updateIcon();
    });
});
