let backimg = [
    "https://cdn.shopify.com/s/files/1/0100/6082/files/glacierbg.jpg?v=1613677492",
    "https://img.tastelife.tv/assets/uploads/2022/01/New_Zealand_-_AMAZING_Beautiful_Nature_with_Relaxing_Music__Soundscapes_16x9.jpg",
    "https://images6.fanpop.com/image/photos/39400000/Beautiful-earth-earth-planet-39492929-1920-1200.jpg",
    "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/4/2/1427981047746/2f6a0729-958f-4df1-868e-42ba18f112e3-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=7d4ce75a7b075453dad6886dbdecc2b7",
    "https://thumbs.dreamstime.com/z/abstract-colorful-music-background-notes-abstract-colorful-music-background-notes-futuristic-abstract-glowing-music-wave-216477473.jpg",
    "https://coolwallpapers.me/picsup/6015545-art-stars-sun-atmosphere-space-earth.jpg"
]
let run=0
function changeimg()
{
    document.getElementById('container1').style.backgroundImage = "url('" + `${backimg[run]}` + "')"
    run++
    if(run==backimg.length) run=0
}
setInterval(changeimg,5000)

let x = 1
let lagu = document.getElementsByClassName('languagebutton')

function changelangu(){
    if(x%2==1)
    {
        document.getElementById('DN').innerHTML='LOGIN'
        document.getElementById('TK').innerHTML='Account'
        document.getElementById('MK').innerHTML='Password'
        document.getElementById('DN2').innerHTML='Login'
        document.getElementById('(*)1').innerHTML='(*)Do not have account?'
        document.getElementById('DK').innerHTML='REGISTER'
        document.getElementById('NAME').innerHTML='Your Name'
        document.getElementById('TK2').innerHTML='Account'
        document.getElementById('MK2').innerHTML='Password'
        document.getElementById('NLMK').innerHTML='Rewrite password'
        document.getElementById('DK2').innerHTML='Register'
        document.getElementById('(*)2').innerHTML='(*)I have an account?'
        document.getElementById('langu').innerHTML='VIE'
        document.getElementById("warn").innerHTML = "You do not write your name"
        document.getElementById('warn1').innerHTML = "You do not write your nickname"
        document.getElementById("warn2").innerHTML = "You do not write your password"
        document.getElementById("warn3").innerHTML = "Repassword is not same Password"
        document.getElementById("warn3_1").innerHTML = "You do not write repassword"
    }else{
        document.getElementById('DN').innerHTML='ĐĂNG NHẬP'
        document.getElementById('TK').innerHTML='Tài khoản'
        document.getElementById('MK').innerHTML='Mật khẩu'
        document.getElementById('DN2').innerHTML='Đăng nhập'
        document.getElementById('(*)1').innerHTML='(*)Chưa có tài khoản?'
        document.getElementById('DK').innerHTML='ĐĂNG KÍ'
        document.getElementById('NAME').innerHTML='Họ và tên'
        document.getElementById('TK2').innerHTML='Tài khoản'
        document.getElementById('MK2').innerHTML='Mật khẩu'
        document.getElementById('NLMK').innerHTML='Nhập lại mật khẩu'
        document.getElementById('DK2').innerHTML='Đăng kí'
        document.getElementById('(*)2').innerHTML='(*)Đã có tài khoản?'
        document.getElementById('langu').innerHTML='ENG'
        document.getElementById("warn").innerHTML = "Bạn chưa nhập tên của bạn"
        document.getElementById("warn1").innerHTML = "Bạn chưa nhập tên tài khoản"
        document.getElementById("warn2").innerHTML = "Bạn chưa nhập mật khẩu"
        document.getElementById("warn3").innerHTML = "Mật khẩu nhập lại không đúng"
        document.getElementById("warn3_1").innerHTML = "Bạn chưa nhập lại mật khẩu"
    }
    x++;
}

function textbox1(){
    let test = document.getElementById('mangluoi1a')
    let test2 = document.getElementById('mangluoi2a')
    test.style.height = '0.1%'
    test.style.backgroundColor = 'transparent'
    test.style.transition='0.5s'
    test2.style.height = '74%'
    test2.style.backgroundColor = 'rgba(0,0,0,0.7)'
    test2.style.transition='0.5s'
}

function textbox2(){
    let test = document.getElementById('mangluoi1a')
    let test2 = document.getElementById('mangluoi2a')
    test2.style.height = '0.1%'
    test2.style.backgroundColor = 'transparent'
    test2.style.transition='0.5s'
    test.style.height = '52%'
    test.style.backgroundColor = 'rgba(0,0,0,0.7)'
    test.style.transition='0.5s'
}
let infor = JSON.parse(localStorage.infor)
// localStorage.setItem("infor" , JSON.stringify(infor))
let warn = document.createElement("h4")
warn.classList.add("warn")
warn.setAttribute("id","warn")
warn.style.color = "red"
if(x%2==0) warn.innerHTML = "You do not write your name"
else warn.innerHTML = "Bạn chưa nhập tên của bạn"
warn.style.display = "none"  
document.getElementById("minibox3").appendChild(warn)  

let warn1 = document.createElement("h4")
warn1.classList.add("warn1")
warn1.setAttribute("id","warn1")
warn1.style.color = "red"
if(x%2==0) warn1.innerHTML = "You do not write your nickname"
else warn1.innerHTML = "Bạn chưa nhập tên tài khoản"
document.getElementById("minibox4").appendChild(warn1)
warn1.style.display = "none"

let warn2 = document.createElement("h4")
warn2.classList.add("warn2")
warn2.setAttribute("id","warn2")
warn2.style.color = "red"
if(x%2==0) warn2.innerHTML = "You do not write your password"
else warn2.innerHTML = "Bạn chưa nhập mật khẩu"
warn2.style.display = "none"
document.getElementById("minibox5").appendChild(warn2)
warn2.style.display = "none"

let warn3 = document.createElement("h4")
warn3.classList.add("warn3")
warn3.setAttribute("id" , "warn3")
warn3.style.color = "red"
if(x%2==0) warn3.innerHTML = "Repassword is not same Password"
else warn3.innerHTML = "Mật khẩu nhập lại không đúng"
document.getElementById("minibox6").appendChild(warn3)
warn3.style.display = "none"

let warn3_1 = document.createElement("h4")
warn3_1.classList.add("warn3_1")
warn3_1.setAttribute("id" , "warn3_1")
warn3_1.style.color = "red"
if(x%2==0) warn3_1.innerHTML = "You do not write repassword"
else warn3_1.innerHTML = "Bạn chưa nhập lại mật khẩu"
document.getElementById("minibox6").appendChild(warn3_1)
warn3_1.style.display = "none"

function dangki(){
    let name = document.getElementById('NAME1').value
    let tk = document.getElementById('tai-khoan').value 
    let mk = document.getElementById('mk').value
    let rmk = document.getElementById('rmk').value

    let complete = true
    if(name.length==0){ 
        warn.style.display = "flex"
        complete = false
    }
    else warn.style.display = "none"

    if(tk.length==0){
         warn1.style.display = "flex"
         complete = false
    }
    else warn1.style.display = "none"

    if(mk.length==0){
         warn2.style.display = "flex"
         complete = false
    }
    else warn2.style.display = "none"   

    if(mk.length!=0 && rmk.length==0)
    {
        warn3_1.style.display = "flex"
        warn3.style.display = "none"
        complete = false
    }
    else if(mk!=rmk)
    {
        warn3_1.style.display = "none"
        warn3.style.display = "flex"
        complete = false
    }
    else if(mk===rmk)
    {
        warn3.style.display = "none"
        warn3_1.style.display = "none"
    }

    if(complete == true)
    {
        let check_tk = JSON.parse(localStorage.infor)
        let index = true
        for(i of check_tk)
        {
            if(i.tai_khoan == tk) index = false
        }
        if(index== false){
            alert("Tên tài khoản đã tồn tại")
            window.location.reload()
        }else{
            check_tk.push({
                ten: name,
                tai_khoan: tk,
                mat_khau: mk,
            })
            localStorage.setItem("infor",JSON.stringify(check_tk))
            alert("Đăng kí thành công")
            window.location.reload()
        }
    }
}

function dangnhap()
{
    let check_tk = JSON.parse(localStorage.getItem("infor"))
    let ten_dang_nhap = document.getElementById('NAME1').value
    let name_dang_nhap = document.getElementById('tai-khoan1').value
    let mk_dang_nhap = document.getElementById('nhapmatkhau').value
    let dn=false
    for(i of check_tk)
    {
        if(i.tai_khoan==name_dang_nhap && i.mat_khau==mk_dang_nhap){
            dn = true
            if(x%2==0) alert("LOGIN SUCCESSFUL")
            else alert("Đăng nhập thành công")
            // location.assign("")
            window.location.href = "http://127.0.0.1:5500/Day9/index1.html"
            let account = [{
                ten_dang_nhap:i.ten,
                ten_tai_khoan: name_dang_nhap,
                mat_khau: mk_dang_nhap
            }]
            localStorage.setItem("account" , JSON.stringify(account))
            break
        }
    }

    if(dn==false){
        if(x%2==0) alert("LOGIN ERROR")
        else alert("Đăng nhập thất bại")
    }

}
