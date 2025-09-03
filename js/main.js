// FAQ Accordion
/*document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle Icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle Body Visibility
        groupBody.classList.toggle('open');

        //Close other Open FAQs
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});*/

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
})

// Login
function loginFnc() {
    window.location.replace("index.html");
}

// Load header
fetch('/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
    });

// Load footer
fetch('/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });
