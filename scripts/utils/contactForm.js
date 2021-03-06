function form_checking() {
  //selecting elements from DOM
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const textMessage = document.getElementById("your_message");
  const valeur_string = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$/;
  /*/^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;*/
  const emailRegex =
  /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
    
  //selection errors from DOM
  const firstNameError = document.querySelector(".name_error");
  const lastNameError = document.querySelector(".last_name_error");
  const emailError = document.querySelector(".email_error");
  const textMessageError = document.querySelector(".your_message_error");
  const contact_button = document.querySelector(".contact_buttons");
  //creating let to keep input value from user
  let name, surname, emailIn, messageIn;
  
  //opening form after click on the button
  contact_button.addEventListener("click", () => {
    const body_div = document.querySelector("body");
    const main_div = document.getElementById("main");
    const contact_modal = document.getElementById("contact_modal");
    const modal_title = document.querySelector(".modal_title");

    contact_modal.style.display = "block";
    body_div.classList.add("no-scroll");
    main_div.setAttribute("aria-hidden", "true");
    contact_modal.setAttribute("aria-hidden", "false");
    

    /*getting all the element to put set attribute(tabindex -1)*/
    let elements_change = document.querySelectorAll(".switch");
    elements_change.forEach((el) => {
      el.setAttribute("tabIndex", "-1");
    });
    modal_title.focus();
    //closing form by x button
    const closeForm = document.querySelector(".close_form");
    
    
    // At the closing of form we put all things like before, scroling ect//
    closeForm.addEventListener("click", closing_by_x);
    function closing_by_x() {
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
    }

    // Fonction qui réinitialise toute la navigation au clavier
    function chainging_tab_form() {
      let removing_reset = document.querySelectorAll(".switch");
      removing_reset.forEach((rem) => {
        rem.setAttribute("tabIndex", "0");
      });
    }
    // putting focus on the elements of the form
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

    // selecting button envoyer
    let btn = document.querySelector("#test");
    //stocking input of user in variables,after we compare it with valeur fixed
      firstName.addEventListener("input", (e) => {
        if (e.target.value) {
          name = e.target.value;
          if ((name.match(valeur_string)) && (name !== " ")) {
            firstNameError.style.display = "none";
            btn.removeAttribute("disabled");
          } else {
            firstNameError.innerHTML =
              "Veuillez entrer 2 caractères ou plus pour le champ du prénom.Sans chiffres.";
            firstNameError.style.display = "inline";
            btn.setAttribute("disabled", true)
          }
        }
      });
      lastName.addEventListener("input", (e) => {
        if (e.target.value) {
          surname = e.target.value;
          if ((surname.match(valeur_string))&&(surname.length>2)){
            lastNameError.style.display = "none";
            btn.removeAttribute("disabled")
          } else {
            lastNameError.innerHTML =
              "Veuillez entrer 2 caractères ou plus pour le champ du nom de famille.";
            lastNameError.style.display = "inline";
            btn.setAttribute("disabled", true)
          }
        }
      });
      email.addEventListener("input", (e) => {
        if (e.target.value) {
          emailIn = e.target.value;
          if ((emailIn.match(emailRegex) && (emailIn !== " "))) {
            emailError.style.display = "none";
            btn.removeAttribute("disabled")
          } else {
            emailError.innerHTML = 
            "Veuillez entrer un adresse email correct";
            emailError.style.display = "inline";
            btn.setAttribute("disabled", true);
          }
        }
      });
      textMessage.addEventListener("input", (e) => {
        if (e.target.value) {
          messageIn = e.target.value;
          if (messageIn.length >= 10 && messageIn.length <= 50) {
            textMessageError.style.display = "none";
            btn.removeAttribute("disabled");
          } else {
            textMessageError.innerHTML =
              "Veuillez entrer un message plus long que  caractères";
              textMessageError.style.display = "inline";
              btn.setAttribute("disabled", true)
          }
        }
      });
  });
  //checking input of the user after click on envoyer
  let send_btn = document.querySelector("#test");

  send_btn.addEventListener("click", function (e) {
    e.preventDefault();
   if (name == undefined) {
    firstNameError.innerHTML =
        "Veuillez entre un prénom sans chiffres";
        firstNameError.style.color = "red";
        send_btn.setAttribute("disabled", true);
    }
    if (surname == undefined) {
      lastNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus.";
        lastNameError.style.color = "red";
        send_btn.setAttribute("disabled", true);
    }
    if (emailIn == undefined) {
      emailError.innerHTML = "Veuillez entrer une adresse email correct";
      emailError.style.color = "red";
      send_btn.setAttribute("disabled", true)
    }
    if (messageIn == undefined) {
      textMessageError.innerHTML =
        "Veuillez entrer un message plus long que 10 caractères";
      textMessageError.style.color = "red";
    }
    else 
    if (name.match(valeur_string) && surname.match(valeur_string) && emailIn.match(emailRegex) && messageIn.length>=10) {
      clean_form();
    }
    let elements_rechange = document.querySelectorAll(".switch");
    elements_rechange.forEach((el) => {
      el.setAttribute("tabIndex", "0");
    });
  });
  //function that clear of form and show input in the console, close the form
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
}
