import { checkForURL } from './js/URLChecker';
import { handleSubmit } from './js/formHandler';

import './styles/resets.css'
import './styles/base.css'
import './styles/footer.css'
import './styles/form.css'
import './styles/header.css'

console.log("main index.js file included");

//Export required for usage in custom Client library, with webpack.
export {
 checkForURL,
 handleSubmit
}
