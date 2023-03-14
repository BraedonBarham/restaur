import {makeNavBar, makePageTitle, makeSpacingDiv, makeContentBox} from './sharedCode.js';

function aboutWebsiteLogic(){
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(makeNavBar());
    const spacingDiv = makeSpacingDiv()
    contentDiv.appendChild(spacingDiv);
    const title = makePageTitle("about Page Titttleeee");
    
    spacingDiv.appendChild(title);

    const contentBox1 = makeContentBox("about box content box content box bocooco foegofewogwe  dfew/dnog");
    spacingDiv.appendChild(contentBox1);
    const contentBox2 = makeContentBox("2box 2box about box for box conent booxooxxo content");
    spacingDiv.appendChild(contentBox2);
    const contentBox3 = makeContentBox("2box 2box 22content box for box conent booxooxxo cont");
    spacingDiv.appendChild(contentBox3);
    const contentBox4 = makeContentBox("2boxaboutabout for box conent booxooxxo cont");
    spacingDiv.appendChild(contentBox4);
    const contentBox5 = makeContentBox("2box 2box 22content box for box conent booxooxxo cont");
    spacingDiv.appendChild(contentBox5);
    const contentBox6 = makeContentBox("2box 2box 22content box for box conent booxooxxo cont");
    spacingDiv.appendChild(contentBox6);
    const contentBox7 = makeContentBox("2box 2box 22content box for box conent booxooxxo cont");
    spacingDiv.appendChild(contentBox7);
}

export default aboutWebsiteLogic;