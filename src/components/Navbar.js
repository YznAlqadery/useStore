import { useState } from "react";

export function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      <div className="container-nav">
        <h1>useStore</h1>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
        <button
          className="btn-toggle hidden"
          onClick={() => setMenu((menu) => !menu)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        {menu && (
          <>
            <div className="nav-links-mobile ">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </div>
            <button
              className="close-nav"
              onClick={() => setMenu((menu) => !menu)}
            >
              <i className="fa-solid fa-times"></i>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
