function dropDown(photographer) {
    function menuCard() {
      const wrapperMenu = document.createElement("div");
      wrapperMenu.classList.add("filter_images");
      const menuCard = `
      
          <div class="dropdown">
              <label for="select_images" id="sort" tabindex="0" class="switch">Trier par:</label>
              <div class="dropdown">
                <button onclick="myFunction()" class="dropbtn">Popularity</button>
              <div id="select_images" class="dropdown-content">
                <a href="#home" id="popularity">Popularity</a>
                <a href="#about" id="date">Date</a>
                <a href="#contact" id="title">Title</a>
              </div>
            </div> 
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
  