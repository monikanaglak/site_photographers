function dropDown(photographer) {
  function menuCard() {
    const wrapperMenu = document.createElement("div");
    wrapperMenu.classList.add("filter_images");
    const menuCard = `
        <div class="menu_dropdown">
            <label for="select_images" id="sort" tabindex="0" class="switch">Trier par:</label>
            
            <select id="select_images" tabindex="0" class="switch">
                <option value="popularity" tabindex="0">Popularité</option>
                
                <option value="date" tabindex="0">Date</option>
        
                <option value="title" tabindex="0">Titre</option>
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
