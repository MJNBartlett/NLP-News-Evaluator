async function handleSubmit(event) {
    event.preventDefault()

    // This is where a form field verification will run.
    let formField = document.getElementById('URL-input');
    let formText = formField.value;
    let formTextObject = {'URL': formField.value};
    // Client.checkForName(formText)

    //Fetch POST request for URL to server
    const response = await fetch('http://localhost:8081/test', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formTextObject)
    });

    try{
      console.log("Entering try");
      let getData = await response.json(); // 'await' required otherwise the variables in updateUI() will be returned as 'undefined'.

      updateUI(getData, formText);

    }catch(error){
      console.log("error", error)
    }

    formField.value = '';
}

function updateUI(getData, formText){
  const websiteSpan = document.getElementById('website');
  const agreementSpan = document.getElementById('agreement');
  const subjectivitySpan = document.getElementById('subjectivity');
  const confidenceSpan = document.getElementById('confidence');
  const scoreTagSpan = document.getElementById('score_tag');
  const ironySpan = document.getElementById('irony');

  let agreement = getData.agreement;
  let subjectivity = getData.subjectivity;
  let confidence = getData.confidence;
  let scoreTag = getData.score_tag;
  let irony = getData.irony;

  websiteSpan.innerHTML = formText;
  agreementSpan.innerHTML = agreement;
  subjectivitySpan.innerHTML = subjectivity;
  confidenceSpan.innerHTML = confidence;
  scoreTagSpan.innerHTML = scoreTag;
  ironySpan.innerHTML = irony;

}

export { handleSubmit }
