// 1. 初始数据
const data = [{ url: './images/c1.jpg' }, { url: './images/c2.jpg' }, { url: './images/c3.jpg' }, { url: './images/c4.jpg' }, { url: './images/c5.jpg' }, { url: './images/c6.jpg' }]
//获取元素
const img = document.querySelector('.slider-wrapper img')
//1.右按钮
//1.1获取元素
const next = document.querySelector('.next')
let i = 0 //信号量 控制播放图片张数
//1.2点击事件
next.addEventListener('click', function () {
  i++
  if (i >= 6) {
    i = 0
  }
  //调用函数
  toggle()
})
//2.左按钮
const prev = document.querySelector('.prev')
prev.addEventListener('click', function () {
  i--
  if (i < 0) {
    i = 5 //最后一个圆点的索引号是7
  }
  //调用函数
  toggle()
})
//声明一个渲染的函数作为复用 因为左右按钮渲染是一样的
function toggle() {
  //1.3渲染对应的数据
  img.src = data[i].url
  //1.4更换小圆点 先移除原来的类名，当前li再添加 这个类名
  document.querySelector('.slider-indicator .active').classList.remove('active')
  document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active')
}

//3.自动播放
let timer = setInterval(function () {
  //利用js自动调用点击事件 click 一定加小括号调用函数
  next.click() //右侧按钮 点击事件
}, 1000)

//4.鼠标经过大盒子停止计时器
const box = document.querySelector('.slider')
box.addEventListener('mouseenter', function () {
  clearInterval(timer)
})
//5.鼠标离开大盒子开始计时器
box.addEventListener('mouseleave', function () {
  clearInterval(timer)

  timer = setInterval(function () {
    //利用js自动调用点击事件 click 一定加小括号调用函数
    next.click() //右侧按钮 点击事件
  }, 1000)
})
