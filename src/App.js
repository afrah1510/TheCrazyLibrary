import React from 'react';
import './App.css';
import Book1 from './images/1.jpg';
import Book2 from './images/2.jpg';
import Book3 from './images/3.jpg';
import Book4 from './images/4.jpg';
import Book5 from './images/5.jpg';
import Book6 from './images/6.jpg';
import Book7 from './images/7.jpg';
import Book8 from './images/8.jpg';
import Book9 from './images/9.jpg';
import Book10 from './images/10.jpg';
import Book11 from './images/11.jpg';
import Book12 from './images/12.jpg';
import Book13 from './images/13.jpg';
import Book14 from './images/14.jpg';
import Book15 from './images/15.jpg';
import BookLogo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
            <img src={BookLogo} alt="Book Logo" height="50" width="50" />
            <h1>The Crazy Library</h1>
          </div>
          <div className="navbar-links">
            <a href="#">Home</a><br></br>
            <a href="#">Books</a><br></br>
            <a href="#">About Us</a><br></br>
            <a href="#">Contact</a><br></br>
          </div>
        </nav>  
      </header>
      <br></br>
      <div className="button-container">
        <button className="cart-btn">Cart</button>
        <button className="signin-btn">Sign In</button>
        <button className="login-btn">Login</button>
      </div>
      <br></br>
      <br></br>
      <main>
        <section className="hero-section">
          <h2>Welcome to The Crazy Library</h2>
          <p>Discover your next favorite book here</p>
        </section>
        <section className="book-section">
          <div className="book">
            <img src={Book1} alt="Book Cover" />
            <h3 className="book-title">Milk and Honey</h3>
            <h3 className="book-author">Rupi Kaur</h3>
            <p className="book-price">₹ 300</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book2} alt="Book Cover" />
            <h3 className="book-title">It Starts With Us</h3>
            <h3 className="book-author">Colleen Hoover</h3>
            <p className="book-price">₹ 250</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book3} alt="Book Cover" />
            <h3 className="book-title">It Ends With Us</h3>
            <h3 className="book-author">Colleen Hoover</h3>
            <p className="book-price">₹ 234</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book4} alt="Book Cover" />
            <h3 className="book-title">Ugly Love</h3>
            <h3 className="book-author">Colleen Hoover</h3>
            <p className="book-price">₹ 335</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book5} alt="Book Cover" />
            <h3 className="book-title">The Strength in our Scars</h3>
            <h3 className="book-author">Bianca Sparacino</h3>
            <p className="book-price">₹ 210</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book6} alt="Book Cover" />
            <h3 className="book-title">A Gentle Reminder</h3>
            <h3 className="book-author">Bianca Sparacino</h3>
            <p className="book-price">₹ 300</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book7} alt="Book Cover" />
            <h3 className="book-title">Ikigai: The Japanese secret to a long and happy life</h3>
            <h3 className="book-author">Hector Garcia, Francesc Miralles</h3>
            <p className="book-price">₹ 330</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book8} alt="Book Cover" />
            <h3 className="book-title">Better Than The Movies</h3>
            <h3 className="book-author">Lynn Painter</h3>
            <p className="book-price">₹ 164</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book9} alt="Book Cover" />
            <h3 className="book-title">The Princess Saves Herself in this One</h3>
            <h3 className="book-author">Amanda Lovelace</h3>
            <p className="book-price">₹ 600</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book10} alt="Book Cover" />
            <h3 className="book-title">The Things You Can See Only When You Slow Down: How to be Calm in a Busy World</h3>
            <h3 className="book-author">Haemin Sunim</h3>
            <p className="book-price">₹ 360</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book11} alt="Book Cover" />
            <h3 className="book-title">All the Bright Places</h3>
            <h3 className="book-author">Jennifer Niven</h3>
            <p className="book-price">₹ 375</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book12} alt="Book Cover" />
            <h3 className="book-title">Every Time It Rains</h3>
            <h3 className="book-author">Nikita Singh</h3>
            <p className="book-price">₹ 160</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book13} alt="Book Cover" />
            <h3 className="book-title">How to Be a Bawse: A Guide to Conquering Life </h3>
            <h3 className="book-author">Lilly Singh</h3>
            <p className="book-price">₹ 585</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book14} alt="Book Cover" />
            <h3 className="book-title">If I Never Met You</h3>
            <h3 className="book-author">Mhairi McFarlane</h3>
            <p className="book-price">₹ 325</p>
            <button className="book-btn">Add to Cart</button>
          </div>
          <div className="book">
            <img src={Book15} alt="Book Cover" />
            <h3 className="book-title">My Sister's Keeper</h3>
            <h3 className="book-author">Jodi Picoult</h3>
            <p className="book-price">₹ 600</p>
            <button className="book-btn">Add to Cart</button>
          </div>
        </section>
      </main>
      <br></br>
      <br></br>
      <footer>
        <p>&copy; 2023 The Crazy Library</p>
      </footer>
    </div>
  );
}

export default App;