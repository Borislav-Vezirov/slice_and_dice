
let slideIndex = 0;

changeSlide();

function changeSlide() {

    let motos   = document.getElementsByClassName('moto');
    let authors = document.getElementsByClassName('author');
    let dots    = document.getElementsByClassName('dot');

    for (let i = 0; i < motos.length; i++) {
        motos[i].style.display   = 'none';
        authors[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > motos.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    motos[slideIndex - 1].style.display = 'inline-block';
    authors[slideIndex - 1].style.display = 'inline-block';

    dots[slideIndex - 1].classList.add('active');

    Array.from(dots).forEach((x, index) => x.addEventListener('click', (e) => {
        console.log(motos);

        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            Array.from(motos).map((x, i)=> {
                i != index ? x.style.display = 'none' : x.style.display = 'inline-block' 
            })

            Array.from(dots).map((x, i)=> {
                i != index ? x.classList.remove('active') : x.classList.add('active') 
            })

            Array.from(authors).map((x, i)=> {
                i != index ? x.style.display = 'none' : x.style.display = 'inline-block' 
            })
        }
    }))
    
    setTimeout(changeSlide, 5000);
}

document.querySelector('.login_btn').addEventListener('click', () => window.location.href = '#');
document.querySelector('.register_btn').addEventListener('click', () => window.location.href = '#');