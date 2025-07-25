import { Link } from "react-router-dom";

export default function Header(){


    return (
        <header>

        <Link to = "/" className = "logo">August First  </Link>
        <h4 className = "subtitle"></h4>
        
        <nav>

          {/*  <Link to = '/login' className = "navbar">Login</Link>
          <Link to = "/register" className = "navbar">Register</Link>
          */}

        </nav>
      
      </header>
    );
}



