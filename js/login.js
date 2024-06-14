//1.tab栏切换 事件委托
const nav = document.querySelector('.nav')
const pane = document.querySelectorAll('.tab-pane')
// 1.1时间监听
nav.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    //取消上一个active
    nav.querySelector('.active').classList.remove('active')
    //当前元素添加active
    e.target.classList.add('active')

    //先干掉所有人 for循环
    for (let i = 0; i < pane.length; i++) {
      pane[i].style.display = 'none'
    }
    //让对应的pane显示
    pane[e.target.dataset.id].style.display = 'block'
  }
})
//点击提交模块
const form = document.querySelector('form')
const agree = document.querySelector('[name=agree]')
const username = document.querySelector('[name=username]')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  //判断是否勾选协议
  if (!agree.checked) {
    return alert('请勾选同意协议')
  }
  //记录用户名到本地存储
  localStorage.setItem('ah-uname', username.value)
  //跳转到首页
  location.href = '../index.html'
})
