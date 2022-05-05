/**
 * @jest-environment jsdom
 */

import { updateUI } from "../src/client/js/updateUI";

describe("Testing the UI Update functionality", () => {
    test("Testing the updateUI() function", () => {
      document.body.innerHTML =
      '<section class="section-box results-box">'+
          '<div id="results">'+
            '<h3 id="results--title">Results</h3>'+
            '<p id="website">Website</p>'+
            '<p>Score: <span id="score_tag"></span></p>'+
            '<p>Subjectivity: <span id="subjectivity"></span></p>'+
            '<p>Agreement: <span id="agreement"></span></p>'+
            '<p>Irony: <span id="irony"></span></p>'+
            '<p>Confidence: <span id="confidence"></span></p>'+
          '</div>'+
      '</section>';

      const customStatus = {status: {msg:"random message"}};
      const testObject = {status: {msg:"OK"}, agreement:'test', subjectivity:'test', confidence:'test', score_tag:'test', irony:'test'};

      expect(updateUI(customStatus)).toBe('fail');
      expect(updateUI(testObject)).toBe('success');

    })
});
