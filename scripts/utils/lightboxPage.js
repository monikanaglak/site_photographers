//function mecanism of lightbox
function makingLightbox(photographer_pictures) {
  const modal_box = document.querySelector(".lightbox_modal"); //selecting elements from the dom that we need 
  modal_box.style.display = "none";
  const body_container = document.querySelector("body");
  const main_div = document.getElementById("main");
  main_div.setAttribute("aria-hidden", "false");
  modal_box.setAttribute("aria-hidden", "true");
  const mediasAllTab = document.querySelectorAll(".modal_media .medias_all");
  const txtLightBoxTab = document.querySelectorAll(".modal_media h3");
  //closing modal lightbox after keypress on espace
  document.addEventListener("keyup", function(e){
    if ( e.key === "Escape"){
      const modal_box = document.querySelector(".lightbox_modal");
      modal_box.style.display = "none";
    }
  })
  //giving all elements (photos and titles) tabindex 0
  for (let i = 0; i < mediasAllTab.length; i++) {
    mediasAllTab[i].setAttribute("tabindex", "0");
  }
  for (let i = 0; i < txtLightBoxTab.length; i++) {
    txtLightBoxTab[i].setAttribute("tabindex", "0");
  }
  //selecting all images and giving them click event
  const photo_selected = document.querySelectorAll(".media_link");
  for (let i = 0; i < photo_selected.length; i++) {
    photo_selected[i].addEventListener("click", (event) => {
      event.preventDefault();
      const modal_box = document.querySelector(".lightbox_modal");
      modal_box.style.display = "flex";
      main_div.setAttribute("aria-hidden", "true");
      body_container.classList.add("no-scroll");
      modal_box.setAttribute("aria-hidden", "false");
      //function currentlide take the photos "i" witch was clicked
      currentSlide(i+1);
      //taking all tabindex and changing them to -1
      let elements_change = document.querySelectorAll(".switch");
      elements_change.forEach((el) => {
        el.setAttribute("tabIndex", "-1");
      });
      //focus to image selected inside to lightbox, display block
      const modalMediaTab = document.querySelectorAll(".modal_media");
      for (let i = 0; i < modalMediaTab.length; i++) {
        if (modalMediaTab[i].style.display === "block") {
          modalMediaTab[i].firstChild.focus();
        }
      }
    });
  }
  //events to arrows moving the slides
  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
      plusSlides(-1);
    } else if (e.code === "ArrowRight") {
      plusSlides(1);
    }
  });
  // events to arrows made in dom
  const linkPrevLightBox = document.querySelector(".prev_image");
  linkPrevLightBox.addEventListener("click", (event) => {
    event.preventDefault();
    plusSlides(-1);
  });
  const linkNextLightBox = document.querySelector(".next_image");
  linkNextLightBox.addEventListener("click", (event) => {
    event.preventDefault();
    plusSlides(1);
  });

  const linkPrevEnterLightBox = document.querySelector(".controls_left");
  linkPrevEnterLightBox.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      plusSlides(-1);
    }
  });
  const linkNextEnterLightBox = document.querySelector(".controls_right");
  linkNextEnterLightBox.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      plusSlides(1);
    }
  });

  let getIndexMediaModal;
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
    getIndexMediaModal = slideIndex;
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
    getIndexMediaModal = slideIndex;
  }
  //boucle for slides shows last one become first
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("modal_media");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  // closing lightbox with x button
  const closeLightBoxModal = document.querySelector(".modal_close_btn");
  closeLightBoxModal.addEventListener("click", () => {
    const modalLightBox = document.querySelector(".lightbox_modal");
    modalLightBox.style.display = "none";
    // giving back tab posibility
    main_div.setAttribute("aria-hidden", "false");

    modalLightBox.setAttribute("aria-hidden", "true");
    body_container.classList.remove("no-scroll");

    const lastMediaModal = document.querySelectorAll(".media_link");
    lastMediaModal[getIndexMediaModal - 1].focus();
    giving_back_tabulation();
  });

  function giving_back_tabulation() {
    let elements_rechange = document.querySelectorAll(".switch");
    elements_rechange.forEach((el) => {
      el.setAttribute("tabIndex", "0");
    });
  }
}
