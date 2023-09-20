import React from "react";
import './Wishlist.css';

export default function Wishlist() {
  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">My Wishlist</h1>
      <div className="wishlist-table-container">
        <table className="wishlist-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Brand</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="item">
                  <img src="S21.jpg" alt="Item" />
                  <span>Clothing Article A</span>
                </div>
              </td>
              <td>Brand K</td>
              <td>Trending</td>
              <td>
                <button className="delete-button">Remove</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="item">
                  <img src="S22.jpg" alt="Item" />
                  <span>Clothing Article B</span>
                </div>
              </td>
              <td>Brand D</td>
              <td>Trending</td>
              <td>
                <button className="delete-button">Remove</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="item">
                  <img src="S23.jpg" alt="Item" />
                  <span>Clothing Article C</span>
                </div>
              </td>
              <td>Brand Generic</td>
              <td>Trending</td>
              <td>
                <button className="delete-button">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
