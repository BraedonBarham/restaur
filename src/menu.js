
import {makeNavBar, makePageTitle, makeSpacingDiv, makeContentBox} from './sharedCode.js';

function menuWebsiteLogic(){
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(makeNavBar());
    const spacingDiv = makeSpacingDiv()
    contentDiv.appendChild(spacingDiv);
    const title = makePageTitle("Menu Page Titttleeee");
    
    spacingDiv.appendChild(title);

    const contentBox1 = makeContentBox("MENUUUUU");
    spacingDiv.appendChild(contentBox1);
    const contentBox2 = makeContentBox("MUHENUE");
    spacingDiv.appendChild(contentBox2);
    const contentBox3 = makeContentBox("2boor box conent booxooxxo cont");
    spacingDiv.appendChild(contentBox3);

}

export default menuWebsiteLogic;