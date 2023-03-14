import {makeNavBar, makePageTitle, makeSpacingDiv, makeContentBox} from './sharedCode.js';

function homeWebsiteLogic(){
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(makeNavBar());
    const spacingDiv = makeSpacingDiv()
    contentDiv.appendChild(spacingDiv);
    const title = makePageTitle("Home Page Titttleeee");
    
    spacingDiv.appendChild(title);

    const contentBox1 = makeContentBox("HOME");
    spacingDiv.appendChild(contentBox1);
    const contentBox2 = makeContentBox(" booxooxxo content");
    spacingDiv.appendChild(contentBox2);

}

export default homeWebsiteLogic;