import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import Gallery from "./Gallery"

// document.addEventListener("DOMContentLoaded", function() {
//   ReactDOM.render(
//     React.createElement(Counter),
//     document.getElementById("mount")
//   );
// });


let urls = [
  "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=100",
  "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=100",
  "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=100",
  "https://images.pexels.com/photos/1040626/pexels-photo-1040626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=100",
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=100",
  "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=100",
  "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=100",
  "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=100",
  "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=100",
  "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=100",
]

ReactDOM.render(
<Gallery imageUrls={urls}/>,
document.getElementById('mount')
)