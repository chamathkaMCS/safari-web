// Load Header and Footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      setActiveMenuItem(); // <-- Call this after loading header
    });

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

// Set Active Menu Item based on current page
function setActiveMenuItem() {
  const currentPath = window.location.pathname.split("/").pop(); // ex: aboutUs.html
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
}

// Scroll to Top Button functionality
let goTopBtn;
document.addEventListener("scroll", function () {
  mybutton = document.getElementById("goTopBtn");
  if (mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
});

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleHeight(button) {
  // Get the current state of aria-expanded
  var isExpanded = button.getAttribute("aria-expanded") === "true";

  // Toggle the aria-expanded attribute
  button.setAttribute("aria-expanded", isExpanded ? "false" : "true");

  // Toggle the minHeight of the header based on the aria-expanded value
  var header = document.getElementById("header");
  header.style.minHeight = isExpanded ? "150px" : "350px"; // Toggle between 200px and 400px
}

// Get the button
let mybutton = document.getElementById("goTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When user clicks the button, scroll to the top smoothly
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
