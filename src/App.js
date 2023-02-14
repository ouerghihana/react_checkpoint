
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App"> 
    
    <div class="nav container">
      <img src="./image1/shop.jpg" alt="logo" height="150" width="150"/>
         
             
              <li class="nav-item">
                <a class="nav-link" href="#">home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
              <li class="nav-item">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-bag-shopping"></i>
              </li>
     
    </div>
    <div class="product-box">
    <img src="./image1/robe1.jpg" alt="r1" />
    
   <h2 class="product-title">Robe beige </h2>
<span class="price">2000$</span>
<i class="fa-solid fa-bag-shopping add-cart"></i>
    
    
<div class="product-box">
<img src="./image1/robe2.jpg" alt="r2" />
    <h2 class="product-title">Robe beige </h2>
 <span class="price">3000$</span>
 <i class="fa-solid fa-bag-shopping add-cart"></i>
   
    </div>
    </div>

    </div>
    );
  
    
  
}

export default App;
