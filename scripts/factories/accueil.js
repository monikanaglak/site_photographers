function accueilFactory(photographer) {
  const { id, name, portrait, city, country, tagline, price } = photographer;
  const picture = `./assets/photographers/PhotographersPortrait/${portrait}`;
  const link = `./photographer.html?id=${id}`;
  function accueilCardDOM() {
    const article = document.createElement("article");
    article.classList.add("photographer_section_cliked");
    article.classList.add(id);
    const accueilCardDOM = `
        
            <a href="${link}" tabindex="0" class="switch">
                <div class="card_image switch">
                    <img src="${picture}"></img>
                </div>
            </a>
                <div class="card_infos switch" tabindex="0">
                    <h2>${name}</h2>
                    <h3 class="city">${city}, ${country}</h3>
                    <p class="tagline">${tagline}</p>
                    <p class="price">${price}€/jour</^p>
                </div>
        `;
    article.innerHTML = accueilCardDOM;
    return article;
  }
  return {
    id,
    picture,
    name,
    city,
    country,
    tagline,
    price,
    accueilCardDOM,
  };
}
