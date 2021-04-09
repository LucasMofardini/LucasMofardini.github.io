function scrollSuave() {
    const linksInternos = document.querySelectorAll('a[href^="#"]');

    function scroolToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linksInternos.forEach((item) => {
        item.addEventListener('click', scroolToSection);
    });
}
scrollSuave();

function toggleinfo(){
    const produtos1 = document.querySelector('.produtos-info.info-1');
    const produtos2 = document.querySelector('.produtos-info.info-2');
    const produtosItem = document.querySelectorAll('.produtos-item');
    produtosItem.forEach((produtoItem)=>{
        produtoItem.addEventListener('click',()=>{
            produtos1.classList.toggle('ativo');
            produtos2.classList.toggle('ativo');
        });
    });
   
}
toggleinfo();