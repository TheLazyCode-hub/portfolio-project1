const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

// console.log(sections);
// console.log(sectBtn);
// console.log(sectBtns);
// console.log(allSections);

function PageTransitions(){
    //button click active class
    for(let i = 0; i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function() {
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    //section active class
    allSections.addEventListener('click', (e) => {
       const id = e.target.dataset.id;
       if(id){
            //remove selected from other btn
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            console.log(element)
            element.classList.add('active');
       } 
    });

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
        let themeIcon = document.getElementById('theme-icon');
     
    })
}

PageTransitions();

