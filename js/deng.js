// 顶部导航
//1.获取第一个li
const li1 = document.querySelector('.shortcut ul li:first-child')
const li2 = li1.nextElementSibling
//2.最好做个渲染函数 因为退出登录需要重新渲染函数
function render() {
  //2.1读取本地存储的用户名
  const uname = localStorage.getItem('ah-uname')
  // console.log(uname)
  if (uname) {
    li1.innerHTML = `<a href="#"><i class="iconfont">${uname}</i></a>`
    li2.innerHTML = `<a href="#">退出登录</a>`
  } else {
    li1.innerHTML = `<a href="./html/login.html">请先登录</a>`
    li2.innerHTML = `<a href="./html/from.html">免费注册</a>`
  }
}
render() //调用函数

//2.点击退出登录模块
li2.addEventListener('click', function () {
  //删除本地存储的数据
  localStorage.removeItem('ah-uname')
  render()
})
