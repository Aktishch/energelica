import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'
import quiz from '../ts/quiz'

const quizSlider = () => {

  const quizImages = new Swiper('.quiz-images .swiper', {

    slidesPerView: 1,
    slidesPerGroup: 1,
    allowTouchMove: false

  })

  const quizSlider = new Swiper('.quiz-slider .swiper', {

    navigation: {

      prevEl: '.quiz-slider .swiper-button-prev',
      nextEl: '.quiz-slider .swiper-button-next'

    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    watchSlidesProgress: true,

    on: {

      slideChange: (swiper) => {

        quizImages.slideTo(swiper.activeIndex)

        quiz.checkQuizSlide(swiper.visibleSlides[0])

        if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {

          swiper.el.closest('[data-quiz]').setAttribute('data-quiz-end', '')

        } else {

          swiper.el.closest('[data-quiz]').removeAttribute('data-quiz-end')

        }

      }

    }

  })

}

const init = () => {

  const sliderServices = new Swiper('.services-slider .swiper', {

    pagination: {

      el: '.services-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    grabCursor: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5

      },

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3

      }

    }

  })

  const sliderEvents = new Swiper('.events-slider .swiper', {

    pagination: {

      el: '.events-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    grabCursor: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5

      },

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3

      },

      [media.xl]: {

        slidesPerView: 4

      }

    }

  })

  const sliderPartners = new Swiper('.partners-slider .swiper', {

    navigation: {

      prevEl: '.partners-slider .swiper-button-prev',
      nextEl: '.partners-slider .swiper-button-next'

    },

    slidesPerView: 1.3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 1000,
    grabCursor: true,
    loop: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5

      },

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3,
        spaceBetween: 44

      }

    },

    autoplay: {

      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  window.Swiper = Swiper

}

export default { init, quizSlider }