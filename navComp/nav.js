let $ = document;

// document.body.addEventListener('click', (e) => {
//     console.log(e);
// })

let searchInp = $.querySelector('#searchInp');
let searchForm = $.querySelector('.searchForm');
let container = $.querySelector('.container');
let topNav = $.querySelector('#topNav1');
const offUnder2 = $.querySelector('.off-under2');

// ------function---------

function collapseShower(c, e) {

    let Elem = e.target;
    const iElem = '<i class="bi bi-caret-up-fill"></i>';

    if (Elem.outerHTML == iElem) {
        Elem = Elem.parentElement;
    }

    console.log(Elem);


    let findDiv = $.querySelector(`.${c}`);
    let collapseDiv = $.querySelector('.collapse');
    let iTag = Elem.childNodes[1];

    findDiv.style.zIndex = '99';
    collapseDiv.style.zIndex = '99';
    findDiv.style.opacity = '1';
    offUnder2.style.display = 'block';
    iTag.style.transform = 'rotate(-180deg)';

    offUnder2.addEventListener('click', (e) => {
        findDiv.style.zIndex = '0';
        collapseDiv.style.zIndex = '0';
        findDiv.style.opacity = '0';
        offUnder2.style.display = 'none';
        iTag.style.transform = 'rotate(0)';
    })

};


let flag = true;
function collapseShower2(c, e) {

    let Elem = e.target;
    let iElem1 = '<i class="bi bi-caret-up-fill rotateClass0"></i>';
    let iElem2 = '<i class="bi bi-caret-up-fill rotateClass180"></i>';


    if (Elem.outerHTML == iElem1 || Elem.outerHTML == iElem2) {
        Elem = Elem.parentElement;
    }


    let findDiv = $.querySelector(`.${c}`);
    let collapseDiv = $.querySelector('.collapse');
    let iTag = Elem.childNodes[1];
    console.log(Elem);
    

    if (flag == true) {
        findDiv.style.zIndex = '99';
        collapseDiv.style.zIndex = '99';
        findDiv.style.opacity = '1';
        offUnder2.style.display = 'block';

        offUnder2.addEventListener('click', (e) => {
            findDiv.style.zIndex = '0';
            collapseDiv.style.zIndex = '0'
            findDiv.style.opacity = '0';
            offUnder2.style.display = 'none';

            iTag.classList.remove('rotateClass180')
            iTag.classList.add('rotateClass0')
            flag = true;
        })

        iTag.classList.remove('rotateClass0')
        iTag.classList.add('rotateClass180')
        flag = false;
    }
    else {
        findDiv.style.zIndex = '0';
        collapseDiv.style.zIndex = '0';
        findDiv.style.opacity = '0';
        offUnder2.style.display = 'none';

        iTag.classList.remove('rotateClass180')
        iTag.classList.add('rotateClass0')
        flag = true;
    }
}

function collapseUnShower(c, e) {

    let Elem = e.target;
    const iElem = '<i class="bi bi-caret-up-fill"></i>';

    if (Elem.outerHTML == iElem) {
        Elem = Elem.parentElement;
    }

    let findDiv = $.querySelector(`.${c}`);
    let collapseDiv = $.querySelector('.collapse');
    let iTag = Elem.childNodes[1];

    findDiv.style.zIndex = '0';
    collapseDiv.style.zIndex = '0';
    findDiv.style.opacity = '0';
    offUnder2.style.display = 'none';
    iTag.style.transform = 'rotate(0)';
};
// -----------------------



searchInp.addEventListener('click', () => {
    searchForm.style.border = '2px solid #515a5a'
    searchForm.style.width = '100%'
})

window.addEventListener('scroll', (e) => {
    if (document.documentElement.scrollTop > 0) {
        topNav.style.position = 'fixed'
    } else {
        topNav.style.position = 'static'
    }
})