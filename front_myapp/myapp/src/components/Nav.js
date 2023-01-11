import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbar" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/login' className="nav-item nav-link">Login</Link>
                </div>
            </div>
        </nav>
    );
}
export default Nav;