let photo = document.querySelector(".pictures");

photo.addEventListener("click", function handleClick(event) {
  event.target.classList.add("activePhotos");
});
