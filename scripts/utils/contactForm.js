function form_checking() {
  //getting all input user from form
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const textMessage = document.getElementById("your_message");
  //constant values to compare input user
  const valeur_string =
    /^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //getting errors from factories dom
  const firstNameError = document.querySelector(".name_error");
  const lastNameError = document.querySelector(".last_name_error");
  const emailError = document.querySelector(".email_error");
  const textMessageError = document.querySelector(".your_message_error");
  let name, surname, emailIn, messageIn;
  //contact button from header photographer after click open form
  const contact_button = document.querySelector(".contact_buttons");
  contact_button.addEventListener("click", () => {
    const body_div = document.querySelector("body");
    const main_div = document.getElementById("main");
    const contact_modal = document.getElementById("contact_modal");
    const modal_title = document.querySelector(".modal_title");

    contact_modal.style.display = "block";
    body_div.classList.add("no-scroll");
    main_div.setAttribute("aria-hidden", "true");
    contact_modal.setAttribute("aria-hidden", "false");
    /*function checking check if the form was fill correctly*/
    /*checking();*/

    /*getting all the element to put set attribute(tabindex -1)*/
    let elements_change = document.querySelectorAll(".switch");
    elements_change.forEach((el) => {
      el.setAttribute("tabIndex", "-1");
    });
    //putting focus on modal title
    modal_title.focus();
    //closing form by x button
    const close_form = document.querySelector(".close_form");

    // At the closing of form we put all things like before, scroling ect//
    close_form.addEventListener("click", () => {
      const body_div = document.querySelector("body");
      const main_div = document.getElementById("main");
      const contact_modal = document.getElementById("contact_modal");

      main_div.setAttribute("aria-hidden", "false");
      contact_modal.setAttribute("aria-hidden", "true");

      contact_modal.style.display = "none";
      body_div.classList.remove("no-scroll");

      chainging_tab_form();
      const contact_button = document.querySelector(".contact_me");
      contact_button.focus();
    });

    // Fonction qui réinitialise toute la navigation au clavier
    function chainging_tab_form() {
      let removing_reset = document.querySelectorAll(".switch");
      removing_reset.forEach((rem) => {
        rem.setAttribute("tabIndex", "0");
      });
    }

    firstName.addEventListener("focus", () => {
      firstNameError.style.display = "none";
    });
    lastName.addEventListener("focus", () => {
      lastNameError.style.display = "none";
    });
    email.addEventListener("focus", () => {
      emailError.style.display = "none";
    });
    textMessage.addEventListener("focus", () => {
      textMessageError.style.display = "none";
    });
    //check up during writting
    firstName.addEventListener("input", (e) => {
      name = e.target.value;
        if (name.length <2 ) {
          e.target.style.border = "4px solid red";
          firstNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.Sans chiffres";
          submit_btn.setAttribute("disabled", true);
        } 
        else {
          e.target.style.border = "4px solid #51d115";
          firstNameError.style.display = "none";
          submit_btn.removeAttribute("disabled");
        }
        
      });
      lastName.addEventListener("input", (e) => {
        surname = e.target.value;
        if (surname.length < 2){ 
          e.target.style.border = "4px solid red";
          lastNameError.innerHTML =
            "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
          lastNameError.style.display = "inline";
          submit_btn.setAttribute("disabled", true);
        } 
        else {
          e.target.style.border = "4px solid #51d115";
          lastNameError.style.display = "none";
          submit_btn.removeAttribute("disabled");
        }
      });
      email.addEventListener("input", (e) => {
        emailIn = e.target.value;
        if (emailIn === " "){
          e.target.style.border = "4px solid red";
          emailError.innerHTML = "Veuillez entrer un adress email, c'est obligatoire";
          emailError.style.display = "inline";
          submit_btn.removeAttribute("disabled");
        }else{
          e.target.style.border = "4px solid #51d115";
          emailError.style.display = "none";
          submit_btn.setAttribute("disabled", true);
        }
      });
    
      textMessage.addEventListener("input", (e) => {
        messageIn=e.target.value;
        if (messageIn.length < 10) {
          e.target.style.border = "4px solid red";
          textMessageError.innerHTML =
            "Veuillez entrer 10 caractères ou plus pour le champ du message.";
          textMessageError.style.display = "inline";
          submit_btn.setAttribute("disabled",true)
        } else {
          e.target.style.border = "4px solid #51d115";
          textMessageError.style.display = "none";
          submit_btn.removeAttribute("disabled");
        }
      });
    //validation of form
  let submit_btn = document.querySelector("#test");
  submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstName.value === "" && lastName.value === "" && email.value === "" &&
      textMessage.value === ""){
      firstNameError.innerHTML = "Le prénom ne doit pas être vide";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";

      lastNameError.innerHTML = "Le nom ne doit pas être vide";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";

      emailError.innerHTML = "Le email ne doit pas être vide";
      emailError.style.display = "inline";
      email.style.border = "4px solid red";

      textMessageError.innerHTML = "Le message ne doit pas être vide";
      textMessageError.style.display = "inline";
      textMessage.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    }
    if (firstName.value === "") {
      firstNameError.innerHTML = "Le prénom ne doit pas être vide";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (firstName.value.length < 2) {
      firstNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (firstName.value.length > 20) {
      firstNameError.innerHTML =
        "Le prénom ne doit pas être plus grande que 20 caractères";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (!firstName.value.match(valeur_string)) {
      firstNameError.innerHTML = "Le prénom ne doit pas avoir des symboles";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (lastName.value === "") {
      lastNameError.innerHTML = "Le nom ne doit pas être vide";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (lastName.value.length < 2) {
      lastNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (lastName.value.length > 20) {
      lastNameError.innerHTML =
        "Le nom ne doit pas être plus grande que 20 caractères";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (!lastName.value.match(valeur_string)) {
      lastNameError.innerHTML =
        "Le nom ne doit pas avoir des espaces et symboles";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (email.value === "") {
      emailError.innerHTML = "Le email ne doit pas être vide";
      emailError.style.display = "inline";
      email.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (!email.value.match(emailRegex)) {
      emailError.innerHTML = "Veuillez entrer un adress email valide";
      emailError.style.display = "inline";
      email.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (textMessage.value === "") {
      textMessageError.innerHTML = "Le message ne doit pas être vide";
      textMessageError.style.display = "inline";
      textMessage.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else if (textMessage.value.length < 10) {
      textMessageError.innerHTML =
        "Le message doit être plus grande que 10 caractères";
      textMessageError.style.display = "inline";
      textMessage.style.border = "4px solid red";
      submit_btn.setAttribute("disabled", true);
    } else {
      firstNameError.style.display = "none";
      lastNameError.style.display = "none";
      emailError.style.display = "none";
      textMessageError.style.display = "none";

      firstName.style.border = "4px solid #fff";
      lastName.style.border = "4px solid #fff";
      email.style.border = "4px solid #fff";
      textMessage.style.border = "4px solid #fff";
      clean_form();
}
    
    let elements_rechange = document.querySelectorAll(".switch");
    elements_rechange.forEach((el) => {
      el.setAttribute("tabIndex", "0");
    });
  });
  function clean_form() {
    console.log(
      firstName.value,
      lastName.value,
      email.value,
      textMessage.value
    );
    let contact_modal = document.getElementById("contact_modal");
    contact_modal.style.display = "none";
    firstName.value = " ";
    lastName.value = " ";
    email.value = " ";
    textMessage.value = " ";
    
  }
})}
