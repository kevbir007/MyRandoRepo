import React from 'react';
import "./Shop.css";

export default class Shop extends React.Component {
    render() {
        return(
            <div>
                <h3>Shop Page</h3>
                <div className="product-list">
                    <li>Reese's</li>
                    <li>Kit-Kat Bar</li>
                    <li>Warheads</li>
                    <li>Airheads</li>
                    <li>Milky Way</li>
                    <li>Pay Day</li>
                    <li>Oreos</li>
                    <li>Sour Patch Kids</li>
                    <li>Toblerone</li>
                    <li>Sour Gummy Worms</li>
                    <li>Nekkos</li>
                </div>
                <div className="cart-list">
                </div>
            </div>
        );
    }
}

