/*abre e fecha o menu quando clicar no icone: hanburguer eo X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function (){
    nav.classList.toggle('show')
  })
}

/*aquando clicar no iten menu, esconder o menu */
const Links = document.querySelectorAll('nav ul li a')

for(const Link of Links) {
  Link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/*mudar o header da pagina quando der scroll */
function changeHeaderWhenScroll() {
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

if (window.scrollY >= navHeight) {
    //scroll e maior que a latura do header
    header.classList.add('scroll')
} else {
    // menor que altura do header
    header.classList.remove('scroll ')
}
}

    // testimonials carrosel slider swiper
   /* const swiper = new swiper('.swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination'
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
        767: {
          slidesPerView: 2,
          setWrapperSize: true
        }
      }
    })*/
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination'
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
        767: {
          slidesPerView: 2,
          setWrapperSize: true
        }
      }
    })

        // scrollReveal : Mostrar elementos quando der scroll na pagina
      const scrollReveal = scrollReveal({
        origin:'top',
        distance: '30px',
        duration: 700,
        reset: true
      })

      scrollReveal.reveal(
      `#home .image, #home .text,
      #about .image, #about .text,
      #services header, #services .card,      
      #testimonials header, #testimonials .testimonials,
      #contact .text, #contact .links
      `, 
        {interval: 100 })

      //botao voltar para o topo

       
      function backToTop() {
        const backToTopButton = document.querySelector('.back-to-top') 

        if (window.scrollY >=560) {
          backToTopButton.classList.add('show')
         } else {
           backToTopButton.classList.remove('show')
                   
         }
      }
     //when scroll
      window.addEventListener('scroll', function() {
        changeHeaderWhenScroll()
        backToTop()
      })  