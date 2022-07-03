//function create form
function contactFormFactory(data) {
  const { name, id } = data;
  function contactFormDOM() {
    const container = document.createElement("div");
    container.classList.add("modal");
    container.setAttribute("aria-label", "formulaire");
    let cardForm = `
            <div class="modal_title switch" tabindex="0">
              <h2 class="contactez_moi">Contactez-moi</h2>
              <h2 class="modal_name">${name}</h2>
              
              <a href="#" aria-label="Close" class="close_form" tabindex="0">
                <img src="./assets/icons/close.svg" />
              </a> 
            </div>
        
          <form id="contact_photograph" role="form" action="" method="">
            <div role="group" aria-labelledby="coordonnees">
            <label for="name">Prénom</label>
            <input type="text" name="name" id="first_name" aria-required="true" minlength="2" tabindex="0"/>
            <p class="name_error error_msn"></p>
  
            <label for="last_name">Nom</label>
            <input type="text" name="last_name" id="last_name" aria-required="true" minlength="2" tabindex="0"/>
            <p class="last_name_error error_msn"></p>
  
            <label for="email">Email</label>
            <input type="email" name="email" id="email" aria-required="true" tabindex="0"/required>
            <p class="email_error error_msn"></p>

            <label for="your_message">Votre message</label>
            <textarea id="your_message" name="message" aria-required="true" tabindex="0" ></textarea>
            <p class="your_message_error error_msn hide"></p>
          </div>
          <button class="submitting_form" type="submit" tabindex="0" id="test"  class="switch" >Envoyer</button>
        
        </form>
        
  `;

    container.innerHTML = cardForm;
    return container;
  }
  return { name, id, contactFormDOM };
}
