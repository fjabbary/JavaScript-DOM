const products = [
  {
    "name": "Wireless Mouse",
    "price": 29.99,
    "description": "Ergonomic wireless mouse with adjustable DPI settings and long battery life."
  },
  {
    "name": "Bluetooth Headphones",
    "price": 59.99,
    "description": "Noise-cancelling over-ear headphones with up to 20 hours of playtime and high-fidelity sound."
  },
  {
    "name": "Smartphone Stand",
    "price": 15.99,
    "description": "Adjustable and portable smartphone stand, perfect for video calls and streaming."
  },
  {
    "name": "USB-C Hub",
    "price": 39.99,
    "description": "Multi-port USB-C hub with HDMI, USB 3.0, and Ethernet ports for expanded connectivity."
  },
  {
    "name": "Portable Charger",
    "price": 24.99,
    "description": "Compact and high-capacity portable charger with dual USB outputs and fast charging technology."
  },
  {
    "name": "Mechanical Keyboard",
    "price": 79.99,
    "description": "Backlit mechanical keyboard with customizable RGB lighting and programmable keys."
  },
  {
    "name": "Fitness Tracker",
    "price": 49.99,
    "description": "Waterproof fitness tracker with heart rate monitor, sleep tracking, and activity tracking."
  },
  {
    "name": "Smart Thermostat",
    "price": 129.99,
    "description": "Wi-Fi enabled smart thermostat with programmable settings and energy-saving features."
  },
  {
    "name": "Electric Kettle",
    "price": 34.99,
    "description": "Fast-boiling electric kettle with temperature control and keep-warm function."
  },
  {
    "name": "Action Camera",
    "price": 99.99,
    "description": "4K action camera with waterproof housing, wide-angle lens, and multiple mounting options."
  }
]

document.getElementById("count").innerText = products.length

function displayProducts() {
  products.forEach(product => {
    const productUI = `
        <div class="card mx-auto bg-light" style="max-width: 18rem;">
          <div class="card-body">
            <h5 class="card-title text-primary">${product.name}</h5>
            <p class="card-text">${product.description.substring(0, 80) + '...'}</p>
            <div><strong>Price: </strong> ${product.price}</div>
          </div>
        </div>
     `

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container', 'col-12', 'col-sm-6', 'col-lg-3', 'mb-3')

    cardContainer.innerHTML = productUI;
    document.querySelector('.row').appendChild(cardContainer)
  })
}


document.addEventListener('DOMContentLoaded', function () {
  displayProducts()
});


// ===================== Form Manipulation with JavaScript =====================
// =============================================================================

function handleSubmit(e) {
  e.preventDefault();
  // Object destructuring
  const { username, email, message } = e.target;

  const user = {
    username: username.value,
    email: email.value,
    message: message.value
  }

  const isFormValid = formValidation(username, email, message)
  const successMsg = document.getElementById('success-msg')

  if (isFormValid) {
    console.log(user);
    successMsg.classList.remove('d-none')
    setTimeout(function() {successMsg.classList.add('d-none')}, 2500)
    e.target.reset();
  }
}


function formValidation(username, email, message) {
  const usernamePattern = /^.{3,}$/
  const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  const messagePattern = /^.{10,}$/

  const usernameValidation = usernamePattern.test(username.value)
  const emailValidation = emailPattern.test(email.value)
  const messageValidation = messagePattern.test(message.value)

  const usernameInput = document.getElementById('username')
  const emailInput = document.getElementById('email')
  const messageInput = document.getElementById('message')

  const validations = [usernameValidation, emailValidation, messageValidation]
  const inputs = [usernameInput, emailInput, messageInput]

  validations.forEach((validation, i) => {
    if (!validation) {
      inputs[i].classList.add('inputError')
      inputs[i].nextSibling.nextSibling.classList.remove('d-none')
    } else {
      inputs[i].classList.remove('inputError')
      inputs[i].nextSibling.nextSibling.classList.add('d-none')
    }
  })

  // Returns True if all fields are valid, otherwise returns False
  return usernameValidation && emailValidation && messageValidation
}


/* ===========================================================
   ================|| Styling with JavaScript ||==============
   =========================================================== */
// Adding event listern instead of add onclick on HTML element (different approach)
document.querySelector('#text').addEventListener('click', function () {
  this.style.color = 'green'
})
document.querySelector('#task').addEventListener('click', function () {
  this.style.cssText = 'text-decoration: line-through; color: red'
})

document.querySelector('#box').addEventListener('click', function () {
  this.style.backgroundColor = 'blue'
})

document.getElementById('input').addEventListener('mouseover', function () {
  this.style.width = '350px'
})

document.getElementById('input').addEventListener('mouseleave', function () {
  this.style.width = '150px'
})

let left = 0
document.getElementById('btn').addEventListener('click', function () {
  left += 100
  document.querySelector('#box').style.cssText = `position: relative; left: ${left}px`
})