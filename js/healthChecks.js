/**
 * Created by michaelscherer1 on 4/15/16.
 */

/* Check the health of the page*/

function headerCheck(){
    if(document.getElementById('header')){
        document.write('header exists ');
    }
    else{document.write('header problem ');
    }
};

function titleCheck(){
    if(document.getElementById('title')){
        document.write('title exists');
    }
    else{document.write('title problem')

    }
}

headerCheck()
document.write('</br>')
titleCheck()