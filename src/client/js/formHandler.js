async function handleSubmit(event) {
    event.preventDefault();

    const mainForm = document.getElementById('main-form');
    const submitButton = document.getElementById('submit-button');
    const formErrorBox = document.getElementById('form-error-box');
    const formField = document.getElementById('URL-input');

    let formText = formField.value;
    let formTextObject = {'URL': formField.value};

    //Function for visually indicating an error is encoutered in UI.
    function toggleRed(){
      formErrorBox.classList = 'form-error-box'; // Removes error box visibility-hidden class. Displays error text.
      mainForm.classList.toggle('form-error'); //Toggle class for changing shadow/outline of form box from green to red.
    }

    formErrorBox.classList = 'form-error-box visibility-hidden'; //Resets the class list to hide the error message if previously displayed.

    //Wrapping whole fetch request in a try/catch nest, to make catching a non-reponsive server faster.
    try{
      // Form field URL validation here - regex based, and min 4 characters. Returns true if valid URL.
      if(Client.checkForURL(formText)){
        submitButton.value = 'processing...'; //text displayed in submit button changed to indicate loading.
        //Fetch POST request for submitted URL to server
        const response = await fetch('http://localhost:8081/test', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formTextObject)
        });

        try{
          let getData = await response.json(); // 'await' required otherwise the variables in updateUI() will be returned as 'undefined'.

          Client.updateUI(getData, formText);
          formField.value = '';
          submitButton.value = 'submit';

        }catch(error){
          console.log("error", error);
          // Button text should change back regardless of try or catch.
          submitButton.value = 'submit';
        }
      }else{
        formErrorBox.innerHTML = '<p>Invalid URL — check the URL entered, and try again.</p>';
        // Calling function twice, with time delay between toggling on and off.
        toggleRed(); //Toggle on.
        setTimeout(toggleRed, 1500);//Toggle off after delay.
      }
    }catch(error){
      console.log('error', error);
      submitButton.value = 'submit';
      formErrorBox.innerHTML = "<p>We're uable to reach the server at this time. Please try again later.</p>";

      toggleRed(); //Toggle on.
      setTimeout(toggleRed, 1500);//Toggle off after delay.
    }
}

export { handleSubmit };
