function checkForURL(formText) {
    if(formText.length >= 4){
      //Basic Regex for checking if valid URL.
      const re = /^[(http|https):\/\/]*[a-zA-Z0-9]+[a-zA-Z0-9\-]*[a-zA-Z0-9]*\.[^ "]+$/;
      let isValid = formText.match(re);

      //.match() will return as true or false.
      return isValid;
    }
    return false;
}

export { checkForURL }
