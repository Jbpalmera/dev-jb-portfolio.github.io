

      // Get the button
      const backToTopBtn = document.getElementById("backToTop");

      // Show button when scrolling down 200px
      window.onscroll = function () {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          backToTopBtn.style.display = "block";
        } else {
          backToTopBtn.style.display = "none";
        }
      };

      // Scroll to top when clicked
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Set current year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Skills filtering
      function filterSkills(category) {
        let skills = document.querySelectorAll(".skill");
        if (category === "all") {
          skills.forEach((skill) => (skill.style.display = "flex"));
        } else {
          skills.forEach((skill) => {
            if (skill.classList.contains(category)) {
              skill.style.display = "flex";
            } else {
              skill.style.display = "none";
            }
          });
        }
      }

      // Awards filtering functionality
      function filterAwards(category) {
        const items = document.querySelectorAll(".award-card");
        const buttons = document.querySelectorAll(".filter-btn");

        // Update button states
        buttons.forEach((btn) => btn.classList.remove("active"));
        event.target.classList.add("active");

        items.forEach((item) => {
          if (
            category === "all" ||
            item.getAttribute("data-category") === category
          ) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      }

      // Project filtering functionality
      document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll(".projects-filter-btn");
        const projectCards = document.querySelectorAll(".project-card");

        filterButtons.forEach((button) => {
          button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            projectCards.forEach((card) => {
              if (filterValue === "all") {
                card.style.display = "block";
              } else {
                const categories = card
                  .getAttribute("data-category")
                  .split(",");
                if (categories.includes(filterValue)) {
                  card.style.display = "block";
                } else {
                  card.style.display = "none";
                }
              }
            });
          });
        });
      });
