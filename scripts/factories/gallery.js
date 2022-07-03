//function template for gallery for each photographer, photos below header of photogrpaher
function showing_photos(media) {
  const {id,photographerId,image,title,video,price,likes,date,alt} = media;
  const pictures = `./assets/photographers/${photographerId}/${image}`;
  const videos = `./assets/photographers/${photographerId}/${video}`;
    function photosCardDOM(){
      const wrapperPhotos = document.createElement("div");
      wrapperPhotos.classList.add("photo_clicked");
      let photosCardDOM = 
       `<a href ="#" class= "media_link switch" tabindex="0" data-mediaid="${id}"  role="button" aria-label="${alt}">`;
      if (video !== undefined) {
        photosCardDOM += `<video class="card_video medias_all switch" aria-label="${alt}" controls>
        <source src="${videos}" type="video/mp4">
        </video>`;
      }
     else {
      photosCardDOM += `<img class="card_image medias_all switch"tabindex="0" src="${pictures}" alt="${alt}">`;
      }
      photosCardDOM += `
      </a>
      <div class="photo_info">
        <div class="photo_title">
          <h3 tabindex="0" class="switch">${title}</h3>
        </div>
        <div class="wrapper_like">
            <div class="num">${likes}</div>
            <i class="fas fa-heart heart switch" tabindex="0" aria-label="likes" role="button"></i>
        </div>
      </div>
    `;
    wrapperPhotos.innerHTML = photosCardDOM;
    return wrapperPhotos;
  }
  return {
    id,
    photographerId,
    image,
    title,
    video,
    likes,
    date,
    price,
    alt,
    videos,
    photosCardDOM,
  };
}

