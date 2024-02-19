

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
});

const hiddenElements = document.querySelectorAll("description");
hiddenElements.forEach((el) => observer.observe(el));

