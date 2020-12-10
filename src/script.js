import "./style.css";
import "./style.scss";
const navButton = document.getElementsByClassName("dropdown-button")[0];
const navDropdown = document.getElementsByClassName("dropdown-menu")[0];
const navIcons = document.getElementsByClassName("icon");
const navToggle = () => {
   navDropdown.classList.contains("hidden") ?
   navDropdown.classList.toggle("hidden") :
   navDropdown.classList.toggle("hidden");

   navIcons[0].classList.toggle("hidden");
   navIcons[1].classList.toggle("hidden");
;}

navButton.addEventListener("click", navToggle);

