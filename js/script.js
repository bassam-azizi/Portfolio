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
        console.log('tgh');
        document.querySelector('.left').style.opacity = ".4";
        document.querySelector('.left').style.pointerEvents = "none";
    }
    // 
}
// leftArrow.addEventListener('click', slide_left, false);



window.onload = load();


