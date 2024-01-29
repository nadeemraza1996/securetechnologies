// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".head-class");

if (headerEl) {
  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
}

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav-item"))
      headerEl.classList.toggle("nav-open");
  });
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs.observe(sectionHeroEl);

// Get the social icons container
// const socialIcons = document.querySelector(".social-icons");

// Add an event listener to the window object for scrolling
// window.addEventListener("scroll", function () {
//   // Get the current vertical position of the scroll bar
//   const scrollPosition = window.scrollY;

//   // If the current position is below the offset of the next section,
//   // hide the social icons using a CSS class
//   if (scrollPosition >= nextSectionOffset) {
//     socialIcons.classList.add("hidden");
//   } else {
//     socialIcons.classList.remove("hidden");
//   }
// });

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

//buttons and links
document
  .getElementById("exploreLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default behavior of the link
    window.open(this.href, "_blank", "noopener,noreferrer");
  });

// Get the social icons container
const socialIcons = document.querySelector(".social-icons");

// Add an event listener to each social link
const socialLinks = socialIcons.querySelectorAll(".social-link");
socialLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    window.open(link.href, "_blank", "noopener,noreferrer");
  });
});
