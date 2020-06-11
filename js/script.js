const project_slide = document.querySelector('.projects_slide');
const project_slide_width = project_slide.offsetWidth;
const projects_items = document.querySelectorAll('.projectItem');
const projects = Array.from(projects_items);
const margin = 30;

let items = 0;
let itemsWidth = 0;

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

function start() {
    let project_width = (project_slide_width / items) - margin;
    projects.forEach(element => {
        element.style.cssText = "width:" + project_width + "px; margin: " + (margin / 2) + "px";
    });

}



window.onload = load();


