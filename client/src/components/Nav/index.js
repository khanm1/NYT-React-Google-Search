import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">

    <table>
      <tr>
       
        <td>
        <a className="navbar-brand" href="/">
       Home
      </a>
        </td>
        <td>

          <a className="navbar-brand" href="/saved">
         View Saved Books
      </a>
        </td>
      </tr>
    </table>
   

        

    </nav>
  );
}

export default Nav;
