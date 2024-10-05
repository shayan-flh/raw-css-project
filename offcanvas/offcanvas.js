const offcanvas = $.querySelector('.offcanvas');
const hamburgerBtn = $.querySelector('.hamburgerMenu');
const closeBtn = $.querySelector('.bi-x-lg');
const offUnder = $.querySelector('.off-under');

// -------function----------
let flag2 = true;
function offCollapseShower(c, e) {

    let Elem = e.target;
    let iElem1 = '<i class="bi bi-caret-left-fill rotateClass0"></i>';
    let iElem2 = '<i class="bi bi-caret-left-fill rotateClass90"></i>';


    if (Elem.outerHTML == iElem1 || Elem.outerHTML == iElem2) {
        Elem = Elem.parentElement;
    }

    let findDiv = $.querySelector(`.${c}`);
    let iTag = Elem.childNodes[2];

    console.log(iTag);


    if (flag2 == true) {
        findDiv.style.height = '300px';

        iTag.classList.remove('rotateClass0')
        iTag.classList.add('rotateClass90')
        flag2 = false;
    } else {
        findDiv.style.height = '0';

        iTag.classList.remove('rotateClass90')
        iTag.classList.add('rotateClass0')
        flag2 = true;
    }

};
// -------------------------

hamburgerBtn.addEventListener('click', (e) => {
    offcanvas.style.transform = 'translateX(-100%)'
    offUnder.style.display = 'block'
});

closeBtn.addEventListener('click', (e) => {
    offcanvas.style.transform = 'translateX(+100%)'
    offUnder.style.display = 'none'
});

offUnder.addEventListener('click', (e) => {
    offcanvas.style.transform = 'translateX(+100%)'
    offUnder.style.display = 'none'
})