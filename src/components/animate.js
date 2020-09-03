// eslint-disable-next-line max-params
const animateCSS = (element, animation, callBack = () => null, prefix = 'animate__') =>
  // We create a Promise and return it
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    if (node) {
      node.classList.add(`${prefix}animated`, animationName);

      // When the animation ends, we clean the classes and resolve the Promise
      const handleAnimationEnd = () => {
        node.classList.remove(`${prefix}animated`, animationName);
        node.removeEventListener('animationend', handleAnimationEnd);
        resolve('Animation ended');
        callBack();
      };

      node.addEventListener('animationend', handleAnimationEnd);
    }
  });

export default animateCSS;
