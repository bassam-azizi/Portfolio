const whyACSD = document.getElementById('whyACSD');
const services = document.getElementById('services');
const whyMe = document.getElementById('whyMe');
const container_array = [whyACSD, services, whyMe];
let modal;

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// -----------------show modal function--------------
function show__modal(e) {
    for (let i = 0; i < container_array.length; i++) {
        if (container_array[i].id === e.parentElement.classList[1]) {
            modal = container_array[i];
            modal.style.display = "grid";
        }
    }
}
// --------------hide modal function ----------------
window.addEventListener('click', hide__modal);

function hide__modal(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Projects showroom section
const project_slide = document.querySelector('.projects_slide');
const project_slide_width = project_slide.offsetWidth;
const projects_items = document.querySelectorAll('.projectItem');
const projects = Array.from(projects_items);
const margin = 30;

const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');

let items = 0;
// let projectsTotalWidth = 0;
// let columns;

const responsive = [
    { breakpoint: { width: 0, item: 1 } },
    { breakpoint: { width: 600, item: 2 } },
    { breakpoint: { width: 1200, item: 3 } }
];

function load() {
    for (let i = 0; i < responsive.length; i++) {
        if (window.innerWidth > responsive[i].breakpoint.width) {
            items = responsive[i].breakpoint.item;
        }
    }
    start();
}
let projectWidth;
function start() {
    projectWidth = (project_slide_width / items) - margin;
    projects.forEach(element => {
        element.style.cssText = "width:" + projectWidth + "px; margin: " + (margin / 2) + "px";
    });
}

let counter = 0;
function slide_right() {

    if (project_slide.style.left !== "" || project_slide.style.left !== "0px") {
        document.querySelector('.left').style.opacity = "1";
        document.querySelector('.left').style.pointerEvents = "auto";
    }
    // MOVE THE SLIDE HORIZENTALY BY MULTIPLIYING THE PROJECTWIDTH WITH THE COUNTER AND GAVE IT4S OUTPUT AS A VALUE TO THE LEFT POSITION
    counter++;
    project_slide.style.left = -(projectWidth + margin) * counter + 'px';
    // IF THE SLIDE HAVE NO MORE EXTRA THINGS TO SHOW? THAN WE BLOCK THE EVENT
    if (project_slide.offsetWidth - parseInt(project_slide.style.left) + 1 >= project_slide.scrollWidth) {
        document.querySelector('.right').style.opacity = "0.4";
        document.querySelector('.right').style.pointerEvents = "none";
    }
}
// rightArrow.addEventListener('click', slide_right, false);

function slide_left() {
    if (project_slide.style.left == "" || project_slide.style.left == "0px") {
        return;
    }
    counter--;
    project_slide.style.left = (-(projectWidth + margin) * counter) + 'px';

    if (project_slide.offsetWidth - parseInt(project_slide.style.left) + 1 < (project_slide.scrollWidth)) {
        console.log('activate arrow right');

        document.querySelector('.right').style.opacity = "1";
        document.querySelector('.right').style.pointerEvents = "auto";
    }
    if (parseInt(project_slide.style.left) == 0) {
        document.querySelector('.left').style.opacity = ".4";
        document.querySelector('.left').style.pointerEvents = "none";
    }
    // 
}
// leftArrow.addEventListener('click', slide_left, false);
window.onload = load();

// ___________ CONTACT FORM LABEL SETTED ASIDE WHEN THERE'S CONTENT OR TEXT INSIDE INPUTS
let input_cl = document.querySelectorAll('.form_input');
let input = Array.from(input_cl);
for (let i = 0; i < input.length; i++) {
    // remove the content inside the input so when refresh happen, the input are empty
    input[i].value = "";
    input[i].addEventListener('keydown', place_label)
}

function place_label() {
    let el = this;
    if (el != "") {
        el.parentElement.style.cssText = "padding: 1em";
        el.parentElement.children[1].style.cssText = "top:0; color: #219653;"
    }
}



// ___________  CONTACT FORM TEXTAREA 'S HEIGHT AUTO EXPAND  ______________

// TextArea Element stored in a variable
let textArea = document.getElementById("textArea");

// we attach to it an event listener that launch a function when user start typing
textArea.addEventListener('keydown', autoExpand);


function autoExpand() {
    // This is belong to the function's owner which in this case is the textarea element
    let te = this;
    // We use setTimeout so the function always compare and happen repetitevly 
    setTimeout(function () {
        te.style.cssText = "height:" + te.scrollHeight + 'px';
    }, 0);
}




