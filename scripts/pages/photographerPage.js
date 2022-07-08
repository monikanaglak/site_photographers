/*fetching data the photographers*/
async function fetchingPhotographers() {
  const response = await fetch("./data/photographers.json");
  const photographers = response.json();
  return photographers;
}
/*function injection header for each photographer*/
function displayHeader(photographers, total) {
  const photographerMain = document.getElementById("photographer_card_header");
  photographers.forEach((photographer) => {
    const photographerPage = making_header(photographer, total);
    const photographerCardDOM = photographerPage.photographerCardDOM();
    photographerMain.appendChild(photographerCardDOM);
  });
}
/*function menu dropdown*/
function displayMenu(photographer) {
  const menuBox = document.getElementById("menu_dropdown");
  const menu = dropDown(photographer);
  const menuCard = menu.menuCard();
  menuBox.appendChild(menuCard);
}
/*function  display formulaire*/
function displayContactForm(selected_photographer) {
  const cardFormSection = document.getElementById("contact_modal");
  selected_photographer.forEach((fotograf) => {
    const cardFormModel = contactFormFactory(fotograf);
    const cardFormDOM = cardFormModel.contactFormDOM();
    cardFormSection.appendChild(cardFormDOM);
  });
}
/*function display photos with choice of user*/
function displayPhotos(media, photographer_all_files, filterBy) {
  const wrapper_images = document.getElementById("container_images");
  let medias_photographer_filtered = photographer_all_files;
  if (filterBy === "popularity") {
    medias_photographer_filtered = photographer_all_files.sort((a, b) => {
      return a.likes - b.likes;
    });
  }
  if (filterBy === "title") {
    medias_photographer_filtered = photographer_all_files.sort((a, b) => {
      let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }
  if (filterBy === "date") {
    medias_photographer_filtered = photographer_all_files.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }
wrapper_images.innerHTML = "";
  medias_photographer_filtered.forEach((shoot) => {
    const box = showing_photos(shoot);
    const photosCardDOM = box.photosCardDOM();
    wrapper_images.appendChild(photosCardDOM);
  });
  return medias_photographer_filtered;
}
function myFunction() {
  document.getElementById("select_images").classList.toggle("show");
  console.log("click")
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function displayLightbox() {
  const modalLightBox = document.querySelector(".lightbox_modal");
  modalLightBox.innerHTML = "";
  const LightBoxDOM = lightboxFactory();
  modalLightBox.appendChild(LightBoxDOM);
}
//function that calls function to fetch photographers data
async function initPhotographers() {
  const { photographers, media } = await fetchingPhotographers();
  const photographeID = window.location.search;
  const url_photographe = photographeID.slice(4);
  //photographer that was selected
  const selected_photographer = photographers.filter(
    (photographer) => photographer.id == url_photographe
  );
  // data of selected photographer
  const photographer_all_files = media.filter(
    (media) => media.photographerId == url_photographe
  );
  //selected photographer pictures
  const photographer_pictures = photographer_all_files.map(
    (photographer_all_files) => photographer_all_files.image
  );
  // selected photographer array of all likes
  const photographer_all_likes = photographer_all_files.map(
    (photographer_all_files) => photographer_all_files.likes
  );
  // total containes number total of likes, return from countingLikes
  let total = countingLikes(photographer_all_likes);

  displayHeader(selected_photographer, total);
  displayMenu(photographers);
  displayPhotos(media, photographer_all_files, "popularity");
  
  displayContactForm(selected_photographer);
  displayLightbox(photographer_pictures);
  makingLightbox(selected_photographer);
  form_checking();
  //selecting menu_dropdown and giving him addeventlistener and listening for change
  /*const sortByType = document.getElementById("select_images");
      sortByType.addEventListener("click", () => {
        const arrowUpDown = document.querySelector(".arrow-down");
        arrowUpDown.classList.toggle("rotated");
      });*/
  const sort_by_choice = document.getElementById("select_images");
 
  sort_by_choice.addEventListener("click", (e) => {
    const change_btn = document.querySelector(".dropbtn");
    let photographer_good_filter;
    if (e.target.id === "popularity") {
      photographer_good_filter = displayPhotos(
        media,
        photographer_all_files,
        "popularity"
      );
      change_btn.innerHTML= "Popularity"
    }
    if (e.target.id === "date") {
      photographer_good_filter = displayPhotos(
        media,
        photographer_all_files,
        "date"
      );
      change_btn.innerHTML= "Date"
    }
    if (e.target.id === "title") {
      photographer_good_filter = displayPhotos(
        media,
        photographer_all_files,
        "title"
      );
      change_btn.innerHTML= "Title"
    }
    AddClickEnter();
    AddClickHeart();
    displayLightbox();
    makingLightbox(photographer_good_filter);
    //rotation arrow after click
    /*sort_by_choice.addEventListener("click", () => {
    const arrow_down_and_up = document.querySelector(".arrow-down");
    arrow_down_and_up.classList.toggle("rotated");
      });*/
  });
  AddClickHeart();
  AddClickEnter();
  countingLikes(photographer_all_likes);
}
initPhotographers();
