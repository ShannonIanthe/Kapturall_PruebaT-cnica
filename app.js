  // sublinks on mobile version
  document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.querySelectorAll('.navbar-nav .dropdown-toggle');
    dropdownToggle.forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        var parentDropdown = this.parentElement;
        parentDropdown.classList.toggle('show');
      });
    });
  });

// JavaScript code for lazy loading
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  });


  