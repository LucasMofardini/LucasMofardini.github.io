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
function executaInfo(){
    const divInfo = document.querySelector('.div-info-clicar');
    const produtos1 = document.querySelector('.produtos-info.info-1');
    const produtos2 = document.querySelector('.produtos-info.info-2');
    const imgInfo = document.querySelector('.img-info');
    function toggleinfo(){
                imgInfo.addEventListener('click',()=>{
                    produtos1.classList.toggle('ativo');
                    produtos2.classList.toggle('ativo');
                    divInfo.classList.remove('ativo');
                });
    }
    toggleinfo();
    function apareceMensagem(){
        console.log(imgInfo);
        imgInfo.addEventListener('mouseover',()=>{
            if(produtos1.classList.contains('ativo') && produtos2.classList.contains('ativo')){
                divInfo.classList.remove('ativo');
                
            }else{
                divInfo.classList.toggle('ativo');

            }
        });
    }
    apareceMensagem();
 


}
executaInfo();