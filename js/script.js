document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       THEME TOGGLE
    ========================================= */

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("gcc-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (themeIcon) {
            themeIcon.classList.remove("bi-moon-stars-fill");
            themeIcon.classList.add("bi-sun-fill");
        }
    }

    // Toggle theme
    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const isDarkMode =
                document.body.classList.contains("dark-mode");

            // Save preference
            localStorage.setItem(
                "gcc-theme",
                isDarkMode ? "dark" : "light"
            );

            // Change icon
            if (themeIcon) {

                if (isDarkMode) {

                    themeIcon.classList.remove("bi-moon-stars-fill");
                    themeIcon.classList.add("bi-sun-fill");

                } else {

                    themeIcon.classList.remove("bi-sun-fill");
                    themeIcon.classList.add("bi-moon-stars-fill");

                }

            }

        });

    }


    /* =========================================
       BACK TO TOP
    ========================================= */

    const backToTop = document.getElementById("backToTop");

    // Do NOT return here.
    // Other JavaScript features should continue working
    // even if a page doesn't contain the back-to-top button.

    if (backToTop) {

        // Show / hide button while scrolling
        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        // Smooth scroll to top
        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});
