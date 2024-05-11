// random image at heading
const array = ['mars.png','earth.png']
const random = array[Math.floor(Math.random() * 2 + 0)]

const imageHeading = document.querySelector('.heading_earth').setAttribute('src',`/images/${random}`)

// handle create star in heading
const headingBackground = document.querySelector('.heading_background')
const courseBackground = document.querySelector('.course_background')

function createDot(x, y, opacity,scale) {
    var dot = document.createElement('div')
    dot.classList.add('dot')
    dot.style.transform = `translate(${x}px, ${y}px)`
    dot.style.opacity = opacity
    dot.style.scale = scale
    return dot
}

for (let index = 0; index < Math.floor(Math.random()* 999) + 300; index++) {
    var randomX = Math.floor(Math.random() * 1280) + 1;
    var randomY = Math.floor(Math.random() * 980) + 1;
    var randomOpacity = Math.random() - 0.2
    var randomScale = Math.random()+1-0.315

    headingBackground.appendChild(createDot(randomX,randomY,randomOpacity,randomScale))
    courseBackground.appendChild(createDot(randomX,randomY,randomOpacity,randomScale))
}

// handle scroll 
const aboutList = document.querySelector('.about_info-list')
const aboutItemNumbers = document.querySelectorAll('.about_info-number')
const courseTitle = document.querySelector('.course_title')
const courseItemsList = document.querySelector('.course_list-wrapper')
const courseMoon = document.querySelector('.course_moon')
const rankingStudentsTable = document.querySelector('.ranking_student-table')
const rankingTeachersTable = document.querySelector('.ranking_teachers-wrapper')

function isInView(element) {
    const rect = element.getBoundingClientRect()
    return (rect.bottom > 0 && rect.top < (window.innerHeight -150 || document.documentElement.clientHeight-150))
}

document.addEventListener('scroll', ()=>{
    if(isInView(aboutList)) {
        aboutList.classList.add('about_info-list-show')
    }
    if(isInView(courseTitle)) {
        courseTitle.classList.add('course_title-show')
    }
    if(isInView(courseItemsList)) {
        courseItemsList.classList.add('course_list-wrapper-show')
    }
    if(isInView(courseMoon)) {
        courseMoon.classList.add('course_moon-show')
    }
    if(isInView(rankingStudentsTable)) {
        rankingStudentsTable.classList.add('ranking_student-table-show')
    }
    if(isInView(rankingTeachersTable)) {
        rankingTeachersTable.classList.add('ranking_teachers-wrapper-show')
    }
})