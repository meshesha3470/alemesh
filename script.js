function loadPage(page) {
  const contentSection = document.getElementById('content');
  switch (page) {
    case 'home':
      bgColor = '#f90';+
      '<div >' +
    
    '<p>This is some additional content.</p>' +
    '</div>';
      contentSection.innerHTML = '<h1 style="color:rgb(51, 51, 51); font-style: italic;">Welcome to alemesh </h1>'+
     '<h3 class="h3" style="font-style: italic; font-size: 20px; color: rgb(51, 51, 51); "> We are experts in delivering innovative web and application designs. Additionally, we provide top-notch trading and transportation services tailored to your needs.</h3>'+
    '<h3 style="font-style: italic; font-size: 20px; color:rgb(51, 51, 51); "> At we seamlessly blend cutting-edge web and application design with the precision of our trading and transportation services, crafting digital experiences and logistical solutions that propel businesses into the future.</h3>'+
   
    '<img src="suburban1.jpg" alt="Suburban Image" class="car-image" style="border: 1px solid transparent;">'+
    '<img src="coffeeethio.jpg" alt="coffee Image" class="coffee-image">'+
    '<img src="wbtransforming.webp" alt="web Image" class="about-image">';
   

      break;
    case 'about':
      
    case 'about':
      contentSection.innerHTML = '<h1>About Us</h1><h3 style="font-style: italic; font-size: 20px; color:rgb(102, 102, 102);"> Welcome to <strong>alemesh</strong>, your trusted partner in seamless transportation and innovative web solutions. We take pride in offering not only top-quality products but also efficient transportation services to ensure your goods reach their destination reliably and on time.</h3>'+
        ' <div class="card" style="width: 100%;">'+
          '<div class="row">'+
            '<div class="col-md-6">'+
              '<img src="bestcoffee.webp" class="card-img-top img-responsive" alt="Left Image">'+
              '<p>Ethiopian coffee, often referred to as the birthplace of coffee, boasts a rich and diverse flavor profile. With its origins in the Ethiopian region of Kaffa, the coffee beans offer a unique combination of fruity and wine-like notes, providing a distinct and celebrated taste that reflects the country rich coffee heritage</p>'+
              '<img src="orginal.jpg" class="card-img-top img-responsive" alt="Left Image">'+
            '</div>'+
            '<div class="col-md-6">' +
              '<img src="webdevlop.png" class="card-img-top img-responsive" alt="Right Image">'+
              '<img src="suburban2.jpg" class="card-img-top img-responsive" alt="Right Image">'+
              '<img src="safe.png" class="card-img-top img-responsive" alt="Right Image">'+
            '</div>'+
          '</div>'+
          '<div class="card-body">'+
            '<h1> <p class="card-text"style="font-style: italic; font-size: 20px; color: rgb(51, 51, 51); )"> Our commitment extends beyond physical logistics to the digital realm. With expertise in web development, we empower businesses to establish a robust online presence. Whether you are looking to enhance your e-commerce platform or create a cutting-edge website, our dedicated team is here to turn your vision into reality.</p></h1>'+
          '</div>'+
        '</div>';
      break;
    
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
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.collapse');

  navbarToggle.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
  });
});

// Placeholder for proceedToPayment function
function proceedToPayment() {
  // Implement the logic for proceeding to payment here
  console.log("Proceeding to payment...");
  // You can add your payment logic or redirection here
}
let cart = [];
  let total = 0;
  const destinationOptions = [
    { value: 'Santa Monica to LAX', label: 'Santa Monica to LAX', price: 20 },
    { value: 'LAX to Santa Monica', label: 'LAX to Santa Monica', price: 18 },
    { value: 'LAX to Malibu', label: 'LAX to Malibu', price: 25 },
    { value: 'Malibu to LAX', label: 'Malibu to LAX', price: 22 },
    { value: 'New Destination 1', label: 'New Destination 1', price: 30 },
    { value: 'New Destination 2', label: 'New Destination 2', price: 28 },
    { value: 'New Destination 3', label: 'New Destination 3', price: 35 },
    { value: 'New Destination 4', label: 'New Destination 4', price: 32 },
  ];
  // ... (other existing functions and code)

// ... (other existing functions and code)

function showServicePage() {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = `
    
    <link rel="stylesheet" type="text/css" href="styles.css">
    
    <div class="service-container">
      <h1>Transportation Service</h1>

      <div id="pickupContainer">
      <form id="pickupForm">
        <h2>Pickup Information:</h2>
    
        <div class="form-row">
          <label for="pickupDate">Pickup Date:</label>
          <input type="date" id="pickupDate" required>
        </div>
    
        <div class="form-row">
          <label for="pickupTime">Pickup Time:</label>
          <input type="time" id="pickupTime" required>
        </div>
    
        <div class="form-row">
          <label for="pickupLocation">Pickup Location:</label>
          <input type="text" id="autocompletePickup" class="google-autocomplete" placeholder="Start typing pickup location">
        </div>
    
        <div class="form-row">
          <label for="dropOffLocation">Drop-off Location:</label>
          <input type="text" id="autocompleteDropOff" class="google-autocomplete" placeholder="Start typing drop-off location">
        </div>
    
        <button type="button" onclick="showCustomerInformation()">Next</button>
      </form>
    </div>
    

      <div id="customerInfoContainer" style="display: none;">
        <form id="customerForm">
          <h2>Customer Information:</h2>

          <div class="form-row">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" class="google-autocomplete" required>
          </div>

          <div class="form-row">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" class="google-autocomplete" required>
          </div>
          <div class="form-row">
          <label for="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required>
        </div>

        <div class="form-row">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <button type="button" onclick="showPickupContainer()">Back</button>
          <button type="button" onclick="showAddressInformation()">Next</button>
        </form>
      </div>

      <div id="addressInfoContainer" style="display: none;">
        <form id="addressForm">
          <h2>Address Information:</h2>

          <div class="form-row">
            <label for="streetNumber">Street Name:</label>
            <input type="text" id="streetName" name="streetName" required>
          </div>

          <div class="form-row">
            <label for="streetName">Street Number:</label>
            <input type="text" id="streetNumber" name="streetNumber" required>
          </div>
          
          <div class="form-row">
          <label for="city">City:</label>
          <input type="text" id="city" name="city" required>
        </div>

        <div class="form-row">
          <label for="state">State:</label>
          <input type="text" id="state" name="state" required>
        </div>

        <div class="form-row">
          <label for="zipCode">ZIP Code:</label>
          <input type="text" id="zipCode" name="zipCode" required>
        </div>

          
          <button type="button" onclick="showCustomerInformation()">Back</button>
          <button type="button" onclick="showPaymentContainer()">Next</button>
        </form>
      </div>

      <div id="paymentContainer" style="display: none;">
      <form id="creditCardForm">
        <h2>Payment Information:</h2>
    
        <div class="form-row">
          <label for="amount">Amount:</label>
          <input type="text" id="amount" name="amount" placeholder="Enter amount" required>
        </div>
    
        <div class="form-row">
          <label for="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter card number" required>
        </div>
    
        <div class="form-row">
          <label for="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required>
        </div>
    
        <div class="form-row">
          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" placeholder="CVV" required>
        </div>
    
        <button type="button" onclick="showAddressInformation()">Back</button>
        <button type="button" onclick="processPayment()">Process Payment</button>
      </form>
    </div>
    
      </div>
    </div>
  `;

  // Initialize the Places API autocomplete for both pickup and drop-off locations
  const autocompletePickup = new google.maps.places.Autocomplete(document.getElementById('autocompletePickup'));
  const autocompleteDropOff = new google.maps.places.Autocomplete(document.getElementById('autocompleteDropOff'));

  // Apply styles to Google Autocomplete inputs after initialization
  const googleAutocompleteInputs = document.querySelectorAll('.google-autocomplete');
  googleAutocompleteInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.width = '100%'; // Set width to 100% when focused
    });

    input.addEventListener('blur', () => {
      input.style.width = ''; // Reset width on blur
    });
  });
}

function showCustomerInformation() {
  document.getElementById('pickupContainer').style.display = 'none';
  document.getElementById('customerInfoContainer').style.display = 'block';
  document.getElementById('addressInfoContainer').style.display = 'none';
  document.getElementById('paymentContainer').style.display = 'none';
}

function showAddressInformation() {
  document.getElementById('pickupContainer').style.display = 'none';
  document.getElementById('customerInfoContainer').style.display = 'none';
  document.getElementById('addressInfoContainer').style.display = 'block';
  document.getElementById('paymentContainer').style.display = 'none';
}

function showPaymentContainer() {
  document.getElementById('pickupContainer').style.display = 'none';
  document.getElementById('customerInfoContainer').style.display = 'none';
  document.getElementById('addressInfoContainer').style.display = 'none';
  document.getElementById('paymentContainer').style.display = 'block';
}

// ... (other existing functions)

function processPayment() {
  const cardNumber = document.getElementById('cardNumber').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;

  if (cardNumber && expiryDate && cvv) {
    alert('Payment processed successfully! Thank you for using our transportation service.');
    loadPage('home');
  } else {
    alert('Please fill in all payment details.');
  }
}

// ... (other existing functions)
// ... (existing functions)

function showPickupContainer() {
  const pickupContainer = document.getElementById('pickupContainer');
  const customerInfoContainer = document.getElementById('customerInfoContainer');

  pickupContainer.style.display = 'block';
  customerInfoContainer.style.display = 'none';
}


// ... (other existing functions)

// Call the initial page load
loadPage('service');

// Call the initial page load

loadPage('service');

function showWebandapplicationPage() {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = '<h1>Web and Application Development</h1>' +
    '<div><h3 style="font-style: italic; font-size: 22px; color: rgb(51, 51, 51); ">At our web and application design services go beyond aesthetics  <br>we craft immersive digital experiences that seamlessly fuse creativity with functionality,<br> ensuring your online presence not only captivates but also delivers unparalleled user satisfaction and business results.</h3></div>' +
    '<div class="web3">' +
    '<img src="webfuture.webp" alt="Web Image" class="about-image left">' +
    '<p  style="font-style: italic; font-size: 22px; color: rgb(51, 51, 51); ">Welcome to <strong>alemesh</strong>, where excellence meets convenience. Our commitment to providing top-notch services ensures that every interaction with us exceeds your expectations. Explore our offerings and experience a new level of satisfaction..</p>' +
    '</div>' +
    '<div class="web1">' +
    '<img src="web1.png" alt="Web1 Image" class="about-image right">' +
    '<p style="font-style: italic; font-size: 25px; color: rgb(51, 51, 51); ">At <strong>alemesh</strong>, we redefine the standard of excellence. With a passion for quality and a dedication to customer satisfaction, we stand as your premier choice for [your services]. Discover the difference of superior service and make your experience truly exceptional..</p>' +
    '</div>' +
    '<div class="web2">' +
    '<img src="web2.jpg" alt="Web2 Image" class="about-image right">' +
    '<p  style="font-style: italic; font-size: 22px; color: rgb(51, 51, 51); ">Embark on a journey of luxury and efficiency with <strong>alemesh</strong>. Our unwavering commitment to delivering unparalleled services sets us apart in the industry. Trust us to provide you with solutions that not only meet but exceed your business needs.</p>' +
    '</div>';
}


function showCartPage() {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = `
    <h1>Shopping Cart</h1>
    <div id="cartItems"></div>
    <p>Total: $<span id="cartTotal">${total.toFixed(2)}</span></p>
    <button onclick="loadPage('payment')">Proceed to Payment</button>`;
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
  contentSection.innerHTML = `
    <h1>Payment Details</h1>
    <form id="paymentForm">
      <div class="form-row">
        <label for="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required>
      </div>

      <div class="form-row">
        <label for="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" placeholder="MM/YYYY" required>
      </div>

      <div class="form-row">
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" placeholder="123" required>
      </div>

      <div class="form-row">
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" placeholder="John Doe" required>
      </div>

      <div class="form-row">
        <label for="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" placeholder="123-456-7890" required>
      </div>

      <div class="form-row">
        <label for="address">Address:</label>
        <input type="text" id="address" placeholder="123 Main St, City, Country" required>
      </div>

      <div class="form-row">
        <label for="zipCode">ZIP Code:</label>
        <input type="text" id="zipCode" placeholder="12345" required>
      </div>

      <div class="form-row">
        <label for="state">State:</label>
        <input type="text" id="state" placeholder="CA" required>
      </div>

      <div class="form-row">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="john.doe@example.com" required>
      </div>

      <button type="button" onclick="completePurchase()">Complete Purchase</button>
    </form>`;
}


function completePurchase() {
  // Simulate a random boolean to determine success or failure (for demonstration purposes)
  const paymentSuccess = Math.random() < 0.5;

  if (paymentSuccess) {
    alert('Purchase completed successfully!');
    cart = [];
    total = 0;
    loadPage('home');
  } else {
    const retry = confirm('Payment failed. Do you want to retry?');

    if (retry) {
      // Handle retry logic here
      alert('Retrying payment...');
    } else {
      const proceedToPurchase = confirm('Do you want to proceed to purchase without completing payment?');

      if (proceedToPurchase) {
        // Handle purchase without payment logic here
        alert('Purchase completed without payment!');
        cart = [];
        total = 0;
        loadPage('home');
      } else {
        alert('Payment failed. Purchase canceled.');
      }
    }
  }
}

// Call the initial page load
loadPage('home');
