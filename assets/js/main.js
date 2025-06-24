$(document).ready(function() {
    // Sample product data (replace with your actual data)
    const products = [
        {
            id: 1,
            name: "Pro Treadmill",
            price: 999.99,
            image: "assets/images/treadmill.jpg",
            description: "Commercial-grade treadmill with 12 programs"
        },
        {
            id: 2,
            name: "yoga mat",
            price: 29.99,
            image: "assets/images/yoga mat.jpeg",
            description: "Eco-friendly non-slip mat"
        },

    ];

    // Initialize carousel
    let currentIndex = 0;
    const $carousel = $('.product-carousel');
    const $items = []; // Will store jQuery objects of carousel items
    
    // Create carousel items
    products.forEach(product => {
        const $item = $(`
            <div class="carousel-item">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p class="description">${product.description}</p>
                    <a href="product-detail.html?id=${product.id}" class="view-btn">View Details</a>
                </div>
            </div>
        `);
        $items.push($item);
    });

    // Function to show current item
    function showItem(index) {
        $carousel.empty().append($items[index]);
        
        // Add active class to current item
        $items.forEach((item, i) => {
            item.toggleClass('active', i === index);
        });
    }

    // Navigation handlers
    $('.carousel-next').click(function() {
        currentIndex = (currentIndex + 1) % $items.length;
        showItem(currentIndex);
        
        // Add slide animation
        $carousel.hide().fadeIn(300);
    });

    $('.carousel-prev').click(function() {
        currentIndex = (currentIndex - 1 + $items.length) % $items.length;
        showItem(currentIndex);
        
        // Add slide animation
      /*  $carousel.css('margin-left', '-100%').animate(
            { 'margin-left': '0' }, 300
        );*/
        $carousel.hide().fadeIn(300)
    });

    // Touch swipe support (jQuery Mobile)
    $carousel.on('swipeleft', function() {
        $('.carousel-next').trigger('click');
    }).on('swiperight', function() {
        $('.carousel-prev').trigger('click');
    });

    // Initialize
    showItem(currentIndex);
});

$(document).ready(function() {
    // Hamburger menu toggle
    $('.hamburger').click(function() {
        $('.nav-links').toggleClass('active');
        
        // Optional: Toggle hamburger icon animation
        $(this).toggleClass('open');
    });

    // Close menu when clicking a link (for single-page feel)
    $('.nav-links a').click(function() {
        $('.nav-links').removeClass('active');
    });
});