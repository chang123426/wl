//1.发送短信验证码
 const code = document.querySelector('.code')
 let flag = true //通过一个变量来控制点击事件 在倒计时 时不能再次点击
 // 1.1 点击事件
 code.addEventListener('click', function() {
 	if (flag) {
 		flag = false
 		let i = 5
 		code.innerHTML = `0${i}秒后重新获取` //这句话是点击完立马执行
 		const timer = setInterval(function() {
 			i--
 			code.innerHTML = `0${i}秒后重新获取`
 			if (i === -1) {
 				//清除定时器
 				clearInterval(timer)
 				code.innerHTML = `发送验证码`
 				//时间到了，可以点击了
 				flag = true
 			}
 		}, 1000)
 	}
 })

 //2.用户验证  
 //2.1获取表单
 let username = document.querySelector('[name=username]')
 //2.2使用change事件 值发生变化的时候
 username.addEventListener('change', verifyName)
 //2.3封装函数
 function verifyName() {
 	const span = username.nextElementSibling
 	//2.4定规则
 	const reg = /^[a-zA-Z0-9-_]{6,10}$/
 	if (!reg.test(username.value)) {
 		span.innerText = '输入不合法'
 		return false
 	}
 	//2.5合法的
 	span.innerText = ''
 	return true
 }


 //3.手机号验证  
 //3.1获取表单
 let phone = document.querySelector('[name=phone]')
 //3.2使用change事件 值发生变化的时候
 phone.addEventListener('change', verifyPhone)
 //3.3封装函数
 function verifyPhone() {
 	const span = phone.nextElementSibling
 	//3.4定规则
 	const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
 	if (!reg.test(phone.value)) {
 		span.innerText = '输入不合法'
 		return false
 	}
 	//3.5合法的
 	span.innerText = ''
 	return true
 }

 //4.验证码验证  
 //4.1获取表单
 let codea = document.querySelector('[name=code]')
 //4.2使用change事件 值发生变化的时候
 codea.addEventListener('change', verifycodea)
 //4.3封装函数
 function verifycodea() {
 	const span = codea.nextElementSibling
 	//4.4定规则
 	const reg = /^\d{6}$/
 	if (!reg.test(codea.value)) {
 		span.innerText = '输入不合法'
 		return false
 	}
 	//2.5合法的
 	span.innerText = ''
 	return true
 }

 //5.密码验证  
 //5.1获取表单
 let password = document.querySelector('[name=password]')
 //5.2使用change事件 值发生变化的时候
 password.addEventListener('change', verifypassword)
 //5.3封装函数
 function verifypassword() {
 	const span = password.nextElementSibling
 	//5.4定规则
 	const reg = /^[a-zA-Z0-9-_]{6,20}$/
 	if (!reg.test(password.value)) {
 		span.innerText = '输入不合法'
 		return false
 	}
 	//5.5合法的
 	span.innerText = ''
 	return true
 }

 //6.密码验证  
 //6.1获取表单
 let confirm = document.querySelector('[name=confirm]')
 //6.2使用change事件 值发生变化的时候
 confirm.addEventListener('change', verifyconfirm)
 //6.3封装函数
 function verifyconfirm() {
 	const span = confirm.nextElementSibling

 	if (confirm.value !== password.value) {
 		span.innerText = '两次密码输入不一致'
 		return false
 	}
 	//6.5合法的
 	span.innerText = ''
 	return true
 }

 // 7.我同意模块
 const queren = document.querySelector('.icon-queren')
 queren.addEventListener('click', function() {
 	this.classList.toggle('icon-queren2')
 })

 //8.提交模块
 const form = document.querySelector('form')
 form.addEventListener('submit', function(e) {
 	// 判断是否勾选我同意模块,如果有 icon-queren2说明就勾选了,否则没勾选
 	if (!queren.classList.contains('icon-queren2')) {
 		alert('请勾选同意协议')
 		//阻止提交
 		e.preventDefault()
 		//依次判断上面的每一个框 是否通过，只要有一个没通过就阻止
 	}
 	//if 可以不写{} verifyName()会返回一个布尔值
 	if (!verifyName()) e.preventDefault()
 	if (!verifyPhone()) e.preventDefault()
 	if (!verifycodea()) e.preventDefault()
 	if (!verifypassword()) e.preventDefault()
 	if (!verifyconfirm()) e.preventDefault()
 })
