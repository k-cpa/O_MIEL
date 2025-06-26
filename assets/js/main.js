// function adjustContentPadding() {
//   const headerMobile = document.querySelector('.header_mobile');
//   const headerDesktop = document.querySelector('.header_desktop');
//   const content = document.querySelector('.hero_banner'); 

//   let headerHeight = 0;

//   // Fonction pour vérifier si un élément est visible (display != none)
//   function isVisible(elem) {
//     return !!elem && window.getComputedStyle(elem).display !== 'none';
//   }

//   if (isVisible(headerMobile)) {
//     headerHeight = headerMobile.offsetHeight;
//   } else if (isVisible(headerDesktop)) {
//     headerHeight = headerDesktop.offsetHeight;
//   }

//   if (content) {
//     content.style.paddingTop = `${headerHeight}px`;
//   }
// }

// window.addEventListener('DOMContentLoaded', () => {
//   adjustContentPadding();
// });

// window.addEventListener('resize', adjustContentPadding);

const lavender = document.querySelector('.lavender_bg');
const lavenderImg = lavender.querySelector('img');

window.addEventListener('scroll', () => {
  const rect = lavender.getBoundingClientRect();
  if(rect.top < window.innerHeight && rect.bottom > 0) {
    // Calcul simple de déplacement en fonction du scroll
    const offset = (window.innerHeight - rect.top) * 0.2; // Ajuste la vitesse ici
    lavenderImg.style.transform = `translateX(-50%) translateY(${offset}px)`;
  }
});

// swiper.js 

 class Slider {
    constructor(element) {
        // Initialisation des éléments DOM essentiels
        this.element = element;
        this.mainContainer = element.querySelector('.swiper');
        this.wrapper = element.querySelector('.swiper-wrapper');
        this.maxSlides = this.wrapper ? parseInt(this.wrapper.dataset.maxSlide) || 3 : 3;

        // Vérifier si l'élément existe
        if (!this.mainContainer) {
            console.error('Slider container not found');
            return;
        }

        // Initialiser le slider
        this.initGallery();
    }

    initGallery() {
        // Configuration de base du slider
        const swiperConfig = {
            slidesPerView: 1,
            initialSlide: 0,
            spaceBetween: 5,
            loop: true,
            watchOverflow: true,

            // Pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            autoplay: {
              delay: 8000,
              disableOnInteraction: false,
            },

            // Events
            on: {
                init: () => {
                    console.log('Swiper initialized');
                },
                slideChange: () => {
                    console.log('Slide changed');
                }
            }
        };

        // Créer l'instance Swiper
        this.swiper = new Swiper(this.mainContainer, swiperConfig);
    }

    // Méthode pour détruire le slider si nécessaire
    destroy() {
        if (this.swiper) {
            this.swiper.destroy();
            this.swiper = null;
        }
    }

    // Méthode pour mettre à jour le slider si les slides changent
    update() {
        if (this.swiper) {
            this.swiper.update();
        }
    }
}
window.Slider = Slider;

// Initialisation du slider
document.addEventListener('DOMContentLoaded', () => {
  const sliderElement = document.querySelector('.swiper-parent');
  if(sliderElement) {
    new Slider(sliderElement);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.h2_pointer');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
    })
  })
})