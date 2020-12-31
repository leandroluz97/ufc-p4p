const AnimationCTRL = (() => {
  return {
    getTopHeight: function () {
      const header = document.querySelector('.header');
      let headerTop = header.getBoundingClientRect();

      if (headerTop.top === 0) {
        header.classList.add('header__is-active');
      } else {
        if (headerTop.top > 0) {
          header.classList.remove('header__is-active');
        }
      }
    },
    scrollToForm: function () {
      window.scrollTo(0, 0);
    },
  };
})();

export default AnimationCTRL;
