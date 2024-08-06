document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach(item => {
      const header = item.querySelector(".accordion-header");
  
      header.addEventListener("click", function() {
        // Toggle accordion content
        const content = item.querySelector(".accordion-content");
        content.classList.toggle("active");
  
        // Toggle accordion header style
        header.classList.toggle("active");
      });
    });
  });
  


  