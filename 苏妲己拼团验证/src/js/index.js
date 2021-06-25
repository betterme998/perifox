import '../css/a.css';
// import '../css/index.css';

let shouldMove = false;//用来判断是否在点击的状态下
const captcha = document.querySelector('#captcha');
const handle = document.querySelector('#handle');
const button = document.querySelector('#handle span');

// 鼠标按下
button.addEventListener('mousedown',(e)=>{
    shouldMove = true;
})

// 鼠标移动
window.addEventListener('mousemove',(e)=>{
    if(shouldMove){
        // 定义常量 获取拉到杆与动画左边的位移
        const offsetLeft = handle.getBoundingClientRect().left;
        // console.log('杆与动画左边的位移:'+offsetLeft);
        // console.log(e.clientX);
        // 定义常量 获取拉到杆的宽
        const buttonWidth = button.getBoundingClientRect().width;
        //修改captcha --moved的值
        captcha.style.setProperty('--moved',`${e.clientX - offsetLeft - buttonWidth/2}px`)
    }
})

// 鼠标放开
window.addEventListener('mouseup',(e)=>{
    if(shouldMove){
        const finalOffset = e.clientX - handle.getBoundingClientRect().left
        // console.log(finalOffset);
        if(finalOffset>=430&&finalOffset<=450){
            captcha.classList.add('passed');
        }else{
            captcha.style.setProperty('--moved','0px');
        }
        shouldMove = false;
    }
})