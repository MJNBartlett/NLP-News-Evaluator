import { checkForURL } from "../src/client/js/URLChecker";

describe("Testing the URL checking functionality", () => {
    test("Testing the checkForURL() function", () => {
      //Testing an array of URL's exptected to return true from checkForURL()
      const truthy = ['https://apple.com','https://www.apple.com','www.apple.com','apple.com','apple.com/iphone/'];
      for(let i in truthy){
        expect(checkForURL(truthy[i])).toBeTruthy();
      }
      //Testing an array of bad URL's exptected to return false from checkForURL()
      const falsy = [' ','apple','.apple.com','/apple','apple/com'];
      for(let i in falsy){
        expect(checkForURL(falsy[i])).toBeFalsy();
      }
    })
});
