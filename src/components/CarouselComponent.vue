<template>
  <div class="carousel lg:ml-32 ml-0 mt-11">
    <div class="flex inner cursor-pointer" ref="inner" :style="innerStyles">
      <template v-for="(card, index) in cards" :key="index">
        <div class="shrink-0 card-carousel hover:bg-small-pattern" :class="{'card--blue':card.color=='blue', 'card--gray':card.color=='gray', 'card--yellow':card.color=='yellow', 'card--purple': card.color=='purple', 'card--broken-white': card.color=='broken-white'}" >
          <div class="flex flex-col justify-center items-center text-black">
            <img :src="getImgUrl(card.icon)" class="w-[47px] h-auto object-cover rounded-lg" :alt="title">
            <span class="mt-5 font-medium text-base">{{ card.title }}</span>
            <span class="mt-1 font-normal text-sm">{{ card.total }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
  <div class="lg:flex hidden absolute right-0 px-32 gap-3 mt-[46px]">
    <button @click="prev" class="flex justify-center items-center justify-around bg-[#8BAC3E] w-28 rounded-full text-white px-3 py-2">
      <img src="@/assets/icon/arrow-carousel.svg" class="w-[25px]" alt="">
      <span class="uppercase">Prev</span>
    </button>
    <button @click="next" class="flex justify-center items-center justify-around bg-[#8BAC3E] w-28 rounded-full text-white px-3 py-2">
      <span class="uppercase">Next</span>
      <img src="@/assets/icon/arrow-carousel.svg" class="w-[25px] rotate-180" alt="">
    </button>
  </div>
</template>
<script>


export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data(){
    return {
      cards: this.categories,
      innerStyles: {},
      step: '',
      transitioning: false,
      isDragging: false,
      startX:null,
      startY:null,
    }
  },
  mounted() {
    // make array length still 8, and the expected order
    const originalArray = this.cards;
    const newArray = [...originalArray];
    new Promise(resolve => {
      while (newArray.length < 8) {
        newArray.push(originalArray[(newArray.length - originalArray.length) % originalArray.length]);
      }
      // set cards with the expected order
      this.cards = newArray
      resolve()
    }).then(() => {
      this.cards.unshift(this.cards.pop())
      this.setStep()
      this.resetTranslate()
      
      this.$refs.inner.addEventListener('touchstart', this.dragStart)
      this.$refs.inner.addEventListener('touchmove', this.dragMove)
      this.$refs.inner.addEventListener('touchend', this.dragEnd)

      this.$refs.inner.addEventListener('mousedown', this.dragStart)
      this.$refs.inner.addEventListener('mousemove', this.dragMove)
      this.$refs.inner.addEventListener('mouseup', this.dragEnd)
    })
  },
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.step = `${innerWidth / totalCards}px`
    },
    next () {
      if (this.transitioning) return

      this.transitioning = true

      this.moveLeft()

      this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    prev () {
      if (this.transitioning) return

      this.transitioning = true

      this.moveRight()

      this.afterTransition(() => {
        const card = this.cards.pop()
        this.cards.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },
    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    }, 
    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    }, 
    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    },
    getImgUrl (url){
      return require('@/assets/icon/'+url)
    },
    dragStart(event) {
      this.transitioning = false;
      if (event.type === 'touchstart') {
        this.startX = event.touches[0].pageX;
        this.startY = event.touches[0].pageY;
      } else {
        this.startX = event.clientX;
        this.startY = event.clientY;
      }
    },

    dragMove(event) {
      if (!this.startX || !this.startY || this.transitioning) {
        return;
      }

      let currentX, currentY, diffX, diffY

      if (event.type === 'touchmove') {
        currentX = event.touches[0].pageX;
        currentY = event.touches[0].pageY;
        diffX = this.startX - currentX;
        diffY = this.startY - currentY;
      } else {
        currentX = event.clientX;
        currentY = event.clientY;
        diffX = this.startX - currentX;
        diffY = this.startY - currentY;
      }

      // Check if the drag is mostly horizontal or vertical
      if (Math.abs(diffX) > Math.abs(diffY)) {
        event.preventDefault();

        // Determine the direction of the drag
        if (diffX > 0) {
          this.direction = 'left';
        } else {
          this.direction = 'right';
        }

        // Update the card position
        this.innerStyles = {
          transition: 'none',
          transform: `translateX(-${this.step}px) translateX(${this.cardTranslate - diffX}px)`,
        };
      }

      if (!this.startX || !this.startY || this.transitioning) {
        return;
      }

      if (this.direction === 'left') {
        this.next();
      } else if (this.direction === 'right') {
        this.prev();
      }

      this.startX = null;
      this.startY = null;
      this.direction = null;
    },

    dragEnd() {
      this.startX = null;
      this.startY = null;
      this.direction = null;
    },
  },
}
</script>