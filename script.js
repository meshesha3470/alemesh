let cart = [];
let total = 0;

const destinationOptions = [
  { value: 'Santa Monica to LAX', label: 'Santa Monica to LAX' },
  { value: 'LAX to Santa Monica', label: 'LAX to Santa Monica' },
  { value: 'LAX to Malibu', label: 'LAX to Malibu' },
  { value: 'Malibu to LAX', label: 'Malibu to LAX' },
  { value: 'New Destination 1', label: 'New Destination 1' },
  { value: 'New Destination 2', label: 'New Destination 2' },
  { value: 'New Destination 3', label: 'New Destination 3' },
  { value: 'New Destination 4', label: 'New Destination 4' },
];

function loadPage(page) {
  const contentSection = document.getElementById('content');
  switch (page) {
    case 'home':
      bgColor = '#f90';+
      '<div >' +
    
    '<p>This is some additional content.</p>' +
    '</div>';
      contentSection.innerHTML = '<h1 style="color:rgb(51, 51, 51); font-style: italic;">Welcome to alemesh </h1>'+
     '<h3  style="font-style: italic; font-size: 20px; color: rgb(51, 51, 51); "> We are experts in delivering innovative web and application designs. Additionally, we provide top-notch trading and transportation services tailored to your needs.</h3>'+
    '<h3 style="font-style: italic; font-size: 20px; color:rgb(51, 51, 51); "> At we seamlessly blend cutting-edge web and application design with the precision of our trading and transportation services, crafting digital experiences and logistical solutions that propel businesses into the future.</h3>'+
   
    '<img src="suburban1.jpg" alt="Suburban Image" class="car-image" style="border: 1px solid transparent;">'+
    '<img src="coffeeethio.jpg" alt="coffee Image" class="coffee-image">'+
    '<img src="wbtransforming.webp" alt="web Image" class="about-image">';
   

      break;
    case 'about':
      
      contentSection.innerHTML = '<h1>About Us</h1><h3 style="font-style: italic; font-size: 20px; color:rgb(102, 102, 102);"> Welcome to <strong>alemesh</strong>, your trusted partner in seamless transportation and innovative web solutions. We take pride in offering not only top-quality products but also efficient transportation services to ensure your goods reach their destination reliably and on time.</h3>'+
     ' <div class="card" style="width: 112rem;">'+
      '<div class="row">'+
       ' <div class="col-md-6">'+
          '<img src="coffee.jpg" class="card-img-top" alt="Left Image">'+
        '</div>'+
        '<div class="col-md-6">' +
        
          '<img src="webdevlop.png" class="card-img-top" alt="Right Image">'+
       ' </div>'+
     ' </div>'+
     ' <div class="card-body">'+
       
     '<h1> <p class="card-text"style="font-style: italic; font-size: 20px; color: rgb(51, 51, 51); )"> Our commitment extends beyond physical logistics to the digital realm. With expertise in web development, we empower businesses to establish a robust online presence. Whether you are looking to enhance your e-commerce platform or create a cutting-edge website, our dedicated team is here to turn your vision into reality.</p></h1>'+
     ' </div>'+
    '</div>';    
      break;
    case 'product':
      bgColor = '#f90';
      showProductPage();
      break;
    case 'service':
      bgColor = '#c0c0c0';
      showServicePage();
      break;
    case 'webandapplication':
     
      showWebandapplicationPage();
      
      break;
    case 'cart':
      showCartPage();
      break;
    case 'register':
      showRegistrationForm();
      break;
    case 'payment':
      showPaymentForm();
      break;
    default:
      break;
  }
}

function showProductPage() {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = '<h1 style="color: gb(51, 51, 51);">Our Products</h1>' +
    '<div class="product" style="color: gb(51, 51, 51);">' +
    '<h2>Coffee</h2>' +
    '<p>$15 per pound</p>' +
    '<button onclick="addToCart(\'Coffee\', 15)">Add to Cart</button>' +
    '</div>' +
    '<div class="product" style="color: gb(51, 51, 51);">' +
    '<h2>Books</h2>' +
    '<p>$20 each</p>' +
    '<button onclick="addToCart(\'Books\', 20)">Add to Cart</button>' +
    '</div>';
}

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById('cart');
  total = cart.reduce((acc, item) => acc + item.price, 0);
  cartElement.innerHTML = `${cart.length} item $${total.toFixed(2)}`;
}

function showServicePage() {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = '<h1></h1>' +
    '<div class="service">' +
    '<h2>Transportation Service</h2>' +
    '<p>From Santa Monica to LAX: $100</p>' +
    '<p>From LAX to Santa Monica: $100</p>' +
    '<p>From LAX to Malibu: $150</p>' +
    '<p>From LAX to Malibu: $150</p>' +
    '<p>From Brentwood to LAX: $150</p>' +
    '<p>Tips not included</p>' +
    '<form id="destinationForm">' +
    '<input type="text" placeholder="Enter Destination">' +
    '<button type="button" onclick="proceedToPayment()">Proceed to Payment</button>' +
    '</form>' +
    '</div>';

  // Car images
  const carImagesContainer = document.createElement('div');
  carImagesContainer.classList.add('car-images-container');
  carImagesContainer.innerHTML = '<h2 style="font-style: italic; font-size: 30px;">Elevate your travel experience with our luxurious Chevrolet Suburban transportation service, where every journey is a statement of style and comfort</h2>' +
  ' <div class="card mx-auto" style="width: 50rem; border: 1px solid transparent; ">' +
  '<div class="row">' +
    '<div class="col-md-6">' +
      '<img src="suburban3.jpg" class="card-img-top" alt="Left Image">' +
      '<p>Luxury Redefined, Unmatched Performance</p>' +
    '</div>' +
    '<div class="col-md-6">' +
      '<img src="safe.png" class="card-img-top" alt="Right Image">' +
      '<p>Uncompromised Safety, Your Peace of Mind.</p>' +
    '</div>' +
  '</div>' +
  '<div class="row">' +
    '<div class="col-md-6">' +
      '<img src="suburban2.jpg" class="card-img-top" alt="Bottom Image">' +
      '<p>Luxury Redefined, Unmatched Performance</p>' +
    '</div>' +
    '<div class="col-md-6">' +
      '<h3>Contact Us</h3>' +
      '<p>For bookings and inquiries:</p>' +
      '<p>Email: info@example.com</p>' +
      '<p>Phone: +1 (424) 302-6050</p>' +
      '<p> ask for more information by phone for estmation</p>' +
    '</div>' +
  '</div>' +
  '<div class="card-body">' +
    '<p class="card-text">Our Chevrolet Suburban transport service goes beyond expectations, offering a seamless combination of elegance, reliability, and spacious interiors for a first-class journey</p>' +
  '</div>' +
'</div>';

  contentSection.appendChild(carImagesContainer);
}

function proceedToPayment() {
  loadPage('payment');
}
function showWebandapplicationPage() {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = '<h1>Web and Application Development</h1>' +
 
  '<div><h3 style="font-style: italic; font-size: 22px; color: rgb(51, 51, 51); ">At our web and application design services go beyond aesthetics  <br>we craft immersive digital experiences that seamlessly fuse creativity with functionality,<br> ensuring your online presence not only captivates but also delivers unparalleled user satisfaction and business results.</h3></div>' +
  '<div class="web3">' +
  '<img src="webfuture.webp" alt="Web Image" class="about-image left">' +
  '<p  style="font-style: italic; font-size: 22px; color: rgb(51, 51, 51); ">Welcome to <strong>alemesh</strong>, where excellence meets convenience. Our commitment to providing top-notch services ensures that every interaction with us exceeds your expectations. Explore our offerings and experience a new level of satisfaction..</p>' +
 '</div>'+
  '<div class="web1">' +
  '<img src="web1.png" alt="Web1 Image" class="about-image right">' +
  '<p style="font-style: italic; font-size: 25px; color: rgb(51, 51, 51); ">At <strong>alemesh</strong>, we redefine the standard of excellence. With a passion for quality and a dedication to customer satisfaction, we stand as your premier choice for [your services]. Discover the difference of superior service and make your experience truly exceptional..</p>' +
 '</div>'+
  '<div class="web2">' +
  '<img src="web2.jpg" alt="Web2 Image" class="about-image right">' +
  '<p  style="font-style: italic; font-size: 22px; color: rgb(51, 51, 51); ">Embark on a journey of luxury and efficiency with <strong>alemesh</strong>. Our unwavering commitment to delivering unparalleled services sets us apart in the industry. Trust us to provide you with solutions that not only meet but exceed your business needs.</p>' +
  '</div>';
}
  function showCartPage() {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = '<h1>Shopping Cart</h1>' +
    '<div id="cartItems"></div>' +
    '<p>Total: $<span id="cartTotal">0.00</span></p>' +
    '<button onclick="loadPage(\'payment\')">Proceed to Payment</button>';
  displayCartItems();
}

function displayCartItems() {
  const cartItemsElement = document.getElementById('cartItems');
  cartItemsElement.innerHTML = '';
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `${item.item} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(itemElement);
  });

  const cartTotalElement = document.getElementById('cartTotal');
  cartTotalElement.textContent = total.toFixed(2);
}

function showRegistrationForm() {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = '<h1>Sign Up</h1>' +
    '<form id="registrationForm">' +
    '<input type="text" placeholder="Full Name" required>' +
    '<input type="email" placeholder="Email" required>' +
    '<input type="password" placeholder="Password" required>' +
    '<button type="button" onclick="loadPage(\'home\')">Sign Up</button>' +
    '</form>';
}

function showPaymentForm() {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = '<h1>Payment Details</h1>' +
    '<form id="paymentForm">' +
    '<label for="cardNumber">Card Number</label>' +
    '<input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required>' +
    '<label for="expiryDate">Expiry Date</label>' +
    '<input type="text" id="expiryDate" placeholder="MM/YYYY" required>' +
    '<label for="cvv">CVV</label>' +
    '<input type="text" id="cvv" placeholder="123" required>' +
    '<button type="button" onclick="completePurchase()">Complete Purchase</button>' +
    '</form>';
}

function completePurchase() {
  alert('Purchase completed successfully!');
  cart = [];
  total = 0;
  loadPage('home');
}
