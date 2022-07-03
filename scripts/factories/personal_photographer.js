function making_header(photographer, total) {
  const { name, portrait, city, country, tagline, id, alt, price } =
    photographer;
  const picture = `./assets/photographers/PhotographersPortrait/${portrait}`;

  function photographerCardDOM() {
    const wrapperHeader = document.createElement("div");
    wrapperHeader.classList.add("photograph_header");
    wrapperHeader.classList.add(id);
    const photographerCardDOM = `
    <div class="container_header_photographer">
            <div class="photographer_info">
                <div id="card${photographer.id}">
                    <h2 tabindex="0" class="switch">${name}</h2>
                </div>
                <h3>${city}, ${country}</h3>
                <p>${tagline}</p>
            </div>
            
            <button type="button" class="contact_me contact_buttons switch">Contactez-moi</button>
            
            <div class="photographer_image switch" tabindex="0">
                <img src="${picture}"></img>
            </div> 
    </div>
    <div class="footer">
       <div class="footer_info">
            <h3 class="titre_like">${total}<h3>
            <span><i class="fas fa-heart heart" aria-label="likes" role="button"></i></span>
        </div>
        <h3 class="footer_price">${price}€/jour</h3>
    </div>
     `;

    wrapperHeader.innerHTML = photographerCardDOM;
    return wrapperHeader;
  }

  return {
    id,
    name,
    portrait,
    city,
    total,
    country,
    tagline,
    alt,
    picture,
    price,
    photographerCardDOM,
  };
}
