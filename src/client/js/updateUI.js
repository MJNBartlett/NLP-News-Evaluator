function updateUI(getData, formText){
  //HTML fields for updating data
  const websiteSpan = document.getElementById('website');
  const agreementSpan = document.getElementById('agreement');
  const subjectivitySpan = document.getElementById('subjectivity');
  const confidenceSpan = document.getElementById('confidence');
  const scoreTagSpan = document.getElementById('score_tag');
  const ironySpan = document.getElementById('irony');

  // Check if correct response is recieved from API.
  if(getData.status.msg === 'OK' ){
    //Updating HTML Elements with getData object values.
    websiteSpan.innerHTML = formText;
    agreementSpan.innerHTML = getData.agreement;
    subjectivitySpan.innerHTML = getData.subjectivity;
    confidenceSpan.innerHTML = getData.confidence;
    scoreTagSpan.innerHTML = getData.score_tag;
    ironySpan.innerHTML = getData.irony;

    return 'success'
  }else{
    // Fallback for an 'Operation denied' response from API due to invalid URL.
    websiteSpan.innerHTML = `We're unable to reach '${formText}', please check the URL and try again.`;
    agreementSpan.innerHTML = '';
    subjectivitySpan.innerHTML = '';
    confidenceSpan.innerHTML = '';
    scoreTagSpan.innerHTML = '';
    ironySpan.innerHTML = '';

    return 'fail'
  }
}

export { updateUI }
