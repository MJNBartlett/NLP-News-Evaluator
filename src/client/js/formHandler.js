async function handleSubmit(event) {
    event.preventDefault()

    const mainForm = document.getElementById('main-form');
    const submitButton = document.getElementById('submit-button');
    const formErrorBox = document.getElementById('form-error-box');
    const formField = document.getElementById('URL-input');

    let formText = formField.value;
    let formTextObject = {'URL': formField.value};

    formErrorBox.classList = 'form-error-box visibility-hidden'; //Resets the class list to hide the error message if previously displayed.

    // Form field URL validation here - regex based, and min 4 characters.
    if(Client.checkForURL(formText)){
      submitButton.value = 'loading...' //text displayed in submit button changed to indicate loading.

      //Fetch POST request for submitted URL to server
      const response = await fetch('http://localhost:8081/test', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formTextObject)
      });

      try{
        console.log("Entering try");
        let getData = await response.json(); // 'await' required otherwise the variables in updateUI() will be returned as 'undefined'.

        Client.updateUI(getData, formText);
        formField.value = '';
        submitButton.value = 'submit'

      }catch(error){
        console.log("error", error)
        // Button text should change back regardless of try or catch.
        submitButton.value = 'submit'
      }
    }else{
      function toggleRed(){
        formErrorBox.classList = 'form-error-box'; // Displays invalid URL message.
        mainForm.classList.toggle('form-error'); //Toggle class for changing shadow/outline of form box from green to red.
      }
      // Calling function twice, with time delay between toggling on and off.
      toggleRed(); //Toggle on.
      setTimeout(toggleRed, 1500);//Toggle off after delay.
    }
}

export { handleSubmit }
