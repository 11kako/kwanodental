document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.classList.remove("active"); // Remove active class when closing
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add("active"); // Add active class when opening
            }
        });
    });
});