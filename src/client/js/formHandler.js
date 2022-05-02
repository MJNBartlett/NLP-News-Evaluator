async function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('results').innerHTML = "Loading...";

    // This is where a form field verification will run.
    // let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    const response = await fetch('http://localhost:8081/test');
    console.log("Fetch request completed");

    try{
      console.log("Entering try");
      let getData = await response.json();       // 'await' required otherwise the following variables will be set as undefined.

      let agreement = getData.agreement;
      let subjectivity = getData.subjectivity;
      let confidence = getData.confidence;
      let scoreTag = getData.score_tag;
      let irony = getData.irony;

      document.getElementById('results').innerHTML = subjectivity;
      console.log("UI updated")

    }catch(error){
      console.log("error", error)
    }
}

export { handleSubmit }
