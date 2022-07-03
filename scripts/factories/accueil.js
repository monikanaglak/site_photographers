//function blueprint of main page of the website

function accueilFactory(photographer) {
  const { id, name, portrait, city, country, tagline, price } = photographer; //destruct of information of object for each photographer
  const picture = `./assets/photographers/PhotographersPortrait/${portrait}`;
  const link = `./photographer.html?id=${id}`;//link brings us to the photographer page

  function accueilCardDOM() {
    const article = document.createElement("article");//making dom element for every photographer
    article.classList.add("photographer_section_cliked");//adding class
    article.classList.add(id);//adding id
    //making cube for every photographer
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
