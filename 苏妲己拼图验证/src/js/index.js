import '../css/iconfont.css';
import '../css/a.css';

let shouldMove = false;// 用来判断是否在点击的状态下
// eslint-disable-next-line
const captcha = document.querySelector('#captcha');
// eslint-disable-next-line
const handle = document.querySelector('#handle');
// eslint-disable-next-line
const button = document.querySelector('#handle span');
// eslint-disable-next-line
const jia = document.querySelectorAll('.s');
// eslint-disable-next-line
const iconfont = document.querySelector('.iconfont');

// 鼠标按下
// eslint-disable-next-line
button.addEventListener('mousedown', (e) => {
  shouldMove = true;
  // console.log(jia)
});
// eslint-disable-next-line
button.addEventListener('touchstart', (e) => {
  shouldMove = true;
});

// 换一套
let dd = 0;
let ff = 0;
function iconbtn() {
  iconfont.classList.toggle('icon-return');
  iconfont.classList.toggle('icon-resonserate');
  // eslint-disable-next-line
  if (dd == 0) { dd = 3; } else { dd = 0; }
  jia.forEach((btn, index) => {
    // eslint-disable-next-line
    if (dd == 3) {
      ff = index + dd;
      jia[index].classList.add(`a${ff}`);
      jia[index].classList.remove(`a${index}`);
      captcha.classList.add(`huan${dd}`);
      captcha.classList.remove(`huan${0}`);
      captcha.classList.remove('passed');
      captcha.style.setProperty('--moved', '0px');
    } else {
      ff = index + 3;
      jia[index].classList.add(`a${index}`);
      jia[index].classList.remove(`a${ff}`);
      captcha.classList.remove(`huan${3}`);
      captcha.classList.add(`huan${0}`);
      captcha.classList.remove(`huan${ff}`);
      captcha.classList.remove('passed');
      captcha.style.setProperty('--moved', '0px');
    }
    // }
  });
}
iconfont.addEventListener('mousedown', () => {
  iconbtn();
});
// eslint-disable-next-line
iconfont.addEventListener('touchstart', (e) => {
  // eslint-disable-next-line
  e.preventDefault();
  iconbtn();
});

// 换图
let ass = 0;
function mousedownTouchstart(index) {
  // eslint-disable-next-line
  captcha.classList.add('huan' + `${index + dd}`);
  // console.log(dd);
  // eslint-disable-next-line
  for (let i = 0; i < jia.length; i++) {
    // eslint-disable-next-line
    if (i == index) {
    // eslint-disable-next-line
      if (i == 0) {
        // eslint-disable-next-line
        ass = i + 1 + dd;
        // eslint-disable-next-line
        captcha.classList.remove(`huan${ass}`);
        ass = i + 2 + dd;
        // eslint-disable-next-line
        captcha.classList.remove(`huan${ass}`);
        captcha.classList.remove('passed');
        captcha.style.setProperty('--moved', '0px');
        ass = 0;
        // eslint-disable-next-line
      } else if (i == 1) {
        ass = i - 1 + dd;
        // eslint-disable-next-line
        captcha.classList.remove(`huan${ass}`);
        ass = i + 1 + dd;
        // eslint-disable-next-line
        captcha.classList.remove(`huan${ass}`);
        captcha.classList.remove('passed');
        captcha.style.setProperty('--moved', '0px');
        ass = 0;
      } else {
        ass = i - 1 + dd;
        // eslint-disable-next-line
        captcha.classList.remove(`huan${ass}`);
        ass = i - 2 + dd;
        // eslint-disable-next-line
        captcha.classList.remove(`huan${ass}`);
        captcha.classList.remove('passed');
        captcha.style.setProperty('--moved', '0px');
        ass = 0;
      }
      // captcha.classList.remove('huan'+ass);
      // console.log(ass);
    }
  }
}
jia.forEach((btn, index) => {
  // eslint-disable-next-line
  btn.addEventListener('mousedown', (e) => {
    mousedownTouchstart(index);
  });
  // eslint-disable-next-line
  btn.addEventListener('touchstart', (e) => {
    mousedownTouchstart(index);
  });
});

// 鼠标移动
// eslint-disable-next-line
function mousemoveTouchmove(e) {
  if (shouldMove) {
    // eslint-disable-next-line
    e.stopPropagation();
    let touch;
    // eslint-disable-next-line
    if (e.touches) {
      // eslint-disable-next-line
      touch = e.changedTouches[0];
    } else {
      // eslint-disable-next-line
      touch = e;
    }
    // 定义常量 获取拉到杆与动画左边的位移
    const offsetLeft = handle.getBoundingClientRect().left;
    // 定义常量 获取拉到杆的宽
    const buttonWidth = button.getBoundingClientRect().width;
    // 修改captcha --moved的值
    captcha.style.setProperty('--moved', `${touch.clientX / 16 - offsetLeft / 16 - buttonWidth / 32}rem`);
  }
}
// eslint-disable-next-line
window.addEventListener('touchmove', (e) => {
  // eslint-disable-next-line
  mousemoveTouchmove(e);
});
// eslint-disable-next-line
window.addEventListener('mousemove', (e) => {
  // eslint-disable-next-line
  mousemoveTouchmove(e);
});

// 鼠标放开
function mouseupTouchend(e) {
  if (shouldMove) {
    let touch;
    // eslint-disable-next-line
    if (e.touches) {
      // eslint-disable-next-line
      touch = e.changedTouches[0];
    } else {
      // eslint-disable-next-line
      touch = e;
    }
    const finalOffset = touch.clientX - handle.getBoundingClientRect().left;
    // eslint-disable-next-line
    if (finalOffset >= captcha.clientWidth && finalOffset <= captcha.clientWidth + button.clientWidth) {
      captcha.classList.add('passed');
    } else {
      captcha.style.setProperty('--moved', '0px');
    }
    shouldMove = false;
  }
}
// eslint-disable-next-line
window.addEventListener('touchend', (e) => {
  // eslint-disable-next-line
  mouseupTouchend(e);
});
// eslint-disable-next-line
window.addEventListener('mouseup', (e) => {
  // eslint-disable-next-line
  mouseupTouchend(e);
});
