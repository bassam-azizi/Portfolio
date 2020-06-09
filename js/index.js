const right_arrow = document.getElementById('iconify');
const projects_slider = document.querySelector('.projects_slider');
const projects = projects_slider.children;
// const projectsTile = document.querySelectorAll('.project-tile');
// let projects = Array.from(projectsTile)
const responsive = [
    { breakpoint: { width: 0, item: 1 } },
    { breakpoint: { width: 600, item: 3 } },
    { breakpoint: { width: 1200, item: 4 } }
]

let items = 0;
let totalItems = 0;
let slideMove = 0;

function load() {
    for (let i = 0; i < responsive.length; i++) {
        if (window.innerWidth > responsive[i].breakpoint.width) {
            items = responsive[i].breakpoint.item
        }
    }
}

function next_projects() {
    counter++;
    projects_slider.style.marginLeft = -size + "px";


    // projects_group += 2;
    // first_project += 2;
    // let current_projects = projects.slice(first_proj:ect, projects_group).concat();


    // current_projects.forEach(current_project => current_project.classList.add('current'));


    // window.onload = projects.slice(0, 6).push(current_projects);
    // // let i = 0;
    // current_projects.splice(0, 2);
    // for (const i in projects.length) {

    // }
    // console.log(projects.slice(0, 6));
    // console.log('next_projects function work well;');
    // return right_arrow;
}
right_arrow.addEventListener('click', next_projects, false);