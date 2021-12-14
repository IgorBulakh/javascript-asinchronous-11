const refs = {
  startRef: document.querySelector('.btn__start'),
  stopRef: document.querySelector('.btn__stop'),
  addColor: document.querySelector('body'),
};

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const min = 0;
const max = colors.length;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorStyle = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      refs.addColor.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
      console.log(Date.now());
    }, 1000);
  },

  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
    // refs.addColor.style.backgroundColor = '';
  },
};

refs.startRef.addEventListener('click', colorStyle.start.bind(colorStyle));
refs.stopRef.addEventListener('click', colorStyle.stop.bind(colorStyle));
