const project_slide = document.querySelector('.projects_slide');
const project_slide_width = project_slide.offsetWidth;
const projects_items = document.querySelectorAll('.projectItem');
const projects = Array.from(projects_items);
const margin = 30;

const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');

let items = 0;
let projectsTotalWidth = 0;
let columns;

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
let slideWidth;
function start() {
    console.log(items);
    projectWidth = (project_slide_width / items) - margin;
    projects.forEach(element => {
        element.style.cssText = "width:" + projectWidth + "px; margin: " + (margin / 2) + "px";
        projectsTotalWidth += projectWidth + margin;
    });
    if (window.innerWidth <= 600) columns = Math.ceil((projectsTotalWidth / projectWidth));

    if (window.innerWidth > 600) columns = Math.ceil((projectsTotalWidth / projectWidth)) / 2;

}

let counter = 0;
function slide_right() {
    slideWidth = columns * (projectWidth + (margin / 2));

    if (counter >= (columns - items)) return;
    counter++;
    // project_slide.style.marginLeft = ((-projectWidth * counter) - margin) + 'px';
    project_slide.style.transform = 'translateX(' + (-(projectWidth + margin) * counter) + 'px)';

}

// rightArrow.addEventListener('click', slide_right, false);

function slide_left() {
    // if (project_slide.style.marginLeft === "") return;
    // if (project_slide.style.marginLeft === "0px") return;
    counter--;
    // project_slide.style.marginLeft = (-projectWidth * counter) + 'px';
    project_slide.style.transform = 'translateX(' + (-(projectWidth + margin) * counter) + 'px)';
}
// leftArrow.addEventListener('click', slide_left, false);



window.onload = load();


