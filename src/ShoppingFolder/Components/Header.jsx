import React from "react";
function Header(){
    return(
        <div className="header-root">
            <div className="logo-name">
                Shopping Mall
            </div>
            <div className="list">
                <ul>
                    <li>Woman</li>
                    <li>Men</li>
                    <li>Children</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Search"/>
            </div>
            <div className="si-so">
                Sign-in/Sign-up
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    )
}
export default Header;