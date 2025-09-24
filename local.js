const navbarOpen = (contentType) => {
  let output1;
  if (contentType === "New_Featured") {
    output1 = `<div class="nav-show">
                <ul class="menu-show" role="menu">
                    <h2>Featured</h2>
                    <li>New & Upcoming Drops</li>
                    <li>New Arrivals</li>
                    <li>Bestsellers</li>
                    <li>SNKRS Launch Calendar</li>
                    <li>Customise with Nike By You</li>
                    <li>Jordan</li>
                    <li>LeBron James</li>
                </ul>
                <ul class="menu-show" role="menu">
                    <h2>Trending</h2>
                    <li>Summer Essentials</li>
                    <li>Structure 26 - Run Supported</li>
                    <li>What's Trending</li>
                    <li>Retro Running</li>
                    <li>Running Shoe Finder</li>
                </ul>
                <ul class="menu-show" role="menu">
                    <h2>Shop Icons</h2>
                    <li>Lifestyle</li>
                    <li>Air Force 1</li>
                    <li>Air Jordan 1</li>
                    <li>Air Max</li>
                    <li>Dunk</li>
                    <li>Cortez</li>
                    <li>Blazer</li>
                    <li>Pegasus</li>
                    <li>Vomero</li>
                </ul><ul class="menu-show" role="menu">
                    <h2>Shop by sports</h2>
                    <li>Running</li>
                    <li>Basketball</li>
                    <li>Football</li>
                    <li>Golf</li>
                    <li>Tennis</li>
                    <li>Gym and Training</li>
                    <li>Yoga</li>
                    <li>Skateboarding</li>
                </ul>
            </div>`;
  } else if (contentType === "Men") {
    output1 = `<div class="nav-show">
                <ul class="menu-show" role="menu">
                    <h2>Featured</h2>
                    <li>New Arrivals</li>
                    <li>Bestsellers</li>
                    <li>Shop All Sale</li>
                </ul>
                <ul class="menu-show" role="menu">
                    <h2>Shoes</h2>
                    <li>All Shoes</li>
                    <li>Lifestyle</li>
                    <li>Jordan</li>
                    <li>Running</li>
                    <li>Football</li>
                    <li>Basketball</li>
                    <li>Gym and Training</li>
                    <li>Skateboarding</li>
                    <li>Sandals and Slides</li>
                    <li>Nike By You</li>                  
                </ul>
                <ul class="menu-show" role="menu">
                    <h2>Clothing</h2>
                    <li>All Clothing</li>
                    <li>Tops and T-Shirts</li>
                    <li>Shorts</li>
                    <li>Pants and Leggings</li>
                    <li>Hoodies and Sweatshirts</li>
                    <li>Jackets and Gilets</li>
                    <li>Jerseys and Kits</li>
                    <li>Jordan</li>
                </ul><ul class="menu-show" role="menu">
                    <h2>Shop by sports</h2>
                    <li>Running</li>
                    <li>Basketball</li>
                    <li>Football</li>
                    <li>Golf</li>
                    <li>Tennis</li>
                    <li>Gym and Training</li>
                    <li>Yoga</li>
                    <li>Skateboarding</li>                  
                </ul>
                </ul><ul class="menu-show" role="menu">
                    <h2>Accessories and Equipment</h2>
                    <li>All Accessories and Equipment</li>
                    <li>Bags and Backpacks</li>
                    <li>Socks</li>
                    <li>Hats and Headwear</li>               
                </ul>
            </div>`;
  } else if (contentType === "Women") {
    output1 = `<div class="nav-show">
                <ul class="menu-show" role="menu">
                    <h2>Featured</h2>
                    <li>New Arrivals</li>
                    <li>Bestsellers</li>
                    <li>Shop All Sale</li>
                </ul>
                <ul class="menu-show" role="menu">
                    <h2>Shoes</h2>
                    <li>All Shoes</li>
                    <li>Lifestyle</li>
                    <li>Jordan</li>
                    <li>Running</li>
                    <li>Gym and Training</li>
                    <li>Football</li>
                    <li>Basketball</li>
                    <li>Sandals and Slides</li>
                    <li>Nike By You</li>
                </ul>
                <ul class="menu-show" role="menu">
                    <h2>Clothing</h2>
                    <li>All Clothing</li>
                    <li>Performance Essentials</li>
                    <li>Tops and T-Shirts</li>
                    <li>Sports Bras</li>
                    <li>Pants and Leggings</li>
                    <li>Shorts</li>
                    <li>Skirts and Dresses</li>
                    <li>Modest Wear</li>
                    <li>Nike Maternity</li>
                    <li>Plus Size</li>    
                </ul><ul class="menu-show" role="menu">
                    <h2>Shop by sports</h2>
                    <li>Yoga</li>
                    <li>Running</li>
                    <li>Gym and Training</li>
                    <li>Basketball</li>
                    <li>Tennis</li>
                    <li>Golf</li>
                    <li>Football</li>
                    <li>Skateboarding</li>
                </ul>
                </ul><ul class="menu-show" role="menu">
                    <h2>Accessories and Equipment</h2>
                    <li>All Accessories and Equipment</li>
                    <li>Bags and Backpacks</li>
                    <li>Socks</li>
                    <li>Hats and Headwear</li>               
                </ul>
            </div>`;
  } else if (contentType === "Kids") {
    output1 = `<div class="nav-show">
                <ul class="menu-show" role="menu">
                    <h2>Featured</h2>
                    <li>New Arrivals</li>
                    <li>Bestsellers</li>
                    <li>Back to School</li>
                    <li>Sport Gear</li>
                    <li>Lifestyle Looks</li>
                </ul>
                <ul class="menu-show" role="menu">
                    <h2>Shoes</h2>
                    <li>All Shoes</li>
                    <li>Lifestyle</li>
                    <li>Jordan</li>
                    <li>Football</li>
                    <li>Running</li>
                    <li>Basketball</li>
                </ul>
                <ul class="menu-show" role="menu">
                    <h2>Clothing</h2>
                    <li>All Clothing</li>
                    <li>Tops and T-Shirts</li>
                    <li>Sport Bras</li>
                    <li>Hoodies and Sweatshirts</li>
                    <li>Pants and Leggings</li>
                    <li>Shorts</li>
                    <li>Jackets and Gilets</li>                       
                </ul><ul class="menu-show" role="menu">
                    <h2>Kids By Age</h2>
                    <li>Older Kids (7 - 14 years)</li>
                    <li>Younger Kids (4 - 7 years)</li>
                    <li>Babies & Toddlers (0 - 4 years)</li>
                </ul>
                </ul><ul class="menu-show" role="menu">
                    <h2>Accessories and Equipment</h2>
                    <li>All Accessories and Equipment</li>
                    <li>Bags and Backpacks</li>
                    <li>Socks</li>
                    <li>Hats and Headwear</li>               
                </ul>
            </div>`;
  }
  const dropdown = document.getElementById("showit");
  dropdown.innerHTML = output1;
  dropdown.style.display = "block";
};

const navbarClose = () => {
  document.getElementById("showit").innerHTML = "";
};


// productssss
let productListHTML = document.getElementById("products-container");
let productList = [];

const addDataToHTML= ()=>{
    productListHTML.innerHTML = "";
    if(productList.length>0){
        productList.forEach(product=>{
            let newProduct = document.createElement("div");
            newProduct.classList.add('product-card');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="product1">
              <div class="c-txt">
                <span>${product.name}</span>
                <h3>MRP : ₹ ${product.price}</h3>
              </div>`
            productListHTML.appendChild(newProduct);
        })
    }
};


const initApp = ()=>{
    fetch('products.json')
    .then(response=>response.json())
    .then(data=>{
        productList = data
        addDataToHTML();
        
    })
}
initApp();


//hamburger button toggle
const hamIcon = document.querySelector(".ham");
const closeIcon = document.querySelector(".close");
const menuOpen = document.querySelector(".menu-open")
const ham = ()=>{
    menuOpen.style.display ="block"
}

const closeMenu = ()=> {
    menuOpen.style.display = "none"
}
closeIcon.addEventListener('click',closeMenu);

// search button click
let output3; 
const searchIcon = document.querySelector(".search")
const searchBox = ()=>{
    searchIcon.addEventListener('click', ()=>{
        const searchShowBox = document.getElementById("searchshow")
        if(searchShowBox.style.display==="none"||searchShowBox.style.display===""){
            output3 = `<div class="search-box">
            <div class="s-container"><i class="ri-search-line"></i>
            <input class="input" type="text" placeholder="Search Products..."/></div>
            <div class="b-txt">
                  <div class="top-title"><span>Popular Search Terms</span></div>
                  <div class="b-title"><ul>
                  <li>Nike Air force 1</li>
                  <li>Running shoes</li>
                  <li>barcelona t-shirt</li>
                  <li>jackets</li>
                  <li>runnig vest</li>
                  </ul></div>
                </div>
                </div>`
            searchShowBox.innerHTML= output3;
            searchShowBox.style.display="block"
        }
        else{
            searchShowBox.style.display="none"
        }
    })
}
const searchClose = () => {
  document.getElementById("searchshow").innerHTML = "";
};