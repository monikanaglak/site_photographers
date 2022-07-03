function dropDown(photographer) {
  function menuCard() {
    const wrapperMenu = document.createElement("div");
    wrapperMenu.classList.add("filter_images");
    const menuCard = `
        <div class="menu_dropdown">
            <label for="select_images" id="sort" tabindex="0" class="switch">Trier par:</label>
            <select id="select_images" tabindex="0" class="switch">
                <option value="popularity">Popularité</option>
                <option value="date">Date</option>
                <option value="title">Titre</option>
            </select>
            <i class="fas fa-chevron-down arrow-down"></i>  
        </div>
               
    `;
    wrapperMenu.innerHTML = menuCard;
    return wrapperMenu;
  }
  return {
    menuCard,
  };
}
