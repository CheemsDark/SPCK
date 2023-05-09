let backimg = [
]
let run=0
// function changeimg()
// {
    // document.getElementById('container1').style.backgroundImage = "url('" + `${backimg[run]}` + "')"
    // run++
    // if(run==backimg.length) run=0
// }
// setInterval(changeimg,5000)

let ten_nguoi_dung = document.getElementById('ten_nguoi_dung')
let ten_tai_khoan = document.getElementById('ten_tai_khoan')
let natural = document.getElementById('natural')

ten_nguoi_dung.classList.add("infor_nguoi_dung")
ten_tai_khoan.classList.add("infor_nguoi_dung")
natural.classList.add("infor_nguoi_dung")

let account_user = JSON.parse(localStorage.account)
ten_nguoi_dung.innerHTML = account_user[0].ten_dang_nhap
ten_tai_khoan.innerHTML = account_user[0].ten_tai_khoan
natural.innerHTML = "Việt Nam"

let warn1 = document.createElement("h3")
let warn2 = document.createElement("h3")
let warn3 = document.createElement("h3")
let warn4 = document.createElement("h3")
let warn5 = document.createElement("h3")

warn1.style.color = "red"
warn2.style.color = "red"
warn3.style.color = "red"
warn4.style.color = "red"
warn5.style.color = "red"

warn1.innerHTML = "Nhập mật khẩu hiện tại"
warn2.innerHTML = "Nhập mật khẩu mới"
warn3.innerHTML = "Nhập lại mật khẩu mới"
warn4.innerHTML = "Mật khẩu hiện tại không đúng"
warn5.innerHTML = "Nhập lại mật khẩu sai"

warn1.style.display = "none"
warn2.style.display = "none"
warn3.style.display = "none"
warn4.style.display = "none"
warn5.style.display = "none"

let doi_mk = document.getElementById("doi_mk")
let doi_mk_site = document.getElementById("doi_mk_site")
let tong_quan = document.getElementById("tong_quan")
let tong_quan_site = document.getElementById("tong_quan_site")

doi_mk_site.appendChild(warn1)
doi_mk_site.appendChild(warn2)
doi_mk_site.appendChild(warn3)
doi_mk_site.appendChild(warn4)
doi_mk_site.appendChild(warn5)


doi_mk.addEventListener('click' , ()=>{
    document.getElementById("tong_quan_site").style.display = "none"
    document.getElementById("doi_mk_site").style.display = "flex"
    document.getElementById("doi_mk_site").style.flexDirection = "column"
    doi_mk.style.borderLeft = "10px solid rgba(53, 207, 39, 0.593)"
    doi_mk.style.backgroundColor = "rgba(129, 149, 149, 0.573)"
    tong_quan.style.borderLeft = "2px solid rgba(191, 146, 146, 0.593)"
    tong_quan.style.backgroundColor = "transparent"

    document.getElementById("change_mk").addEventListener('click',()=>{
        let mk_hien_tai = document.getElementById("mk_hien_tai").value
        let mk_moi = document.getElementById("mk_moi").value
        let mk_moi_again = document.getElementById("mk_moi_again").value

        if(mk_hien_tai.length==0){
            warn1.style.display = "flex";
            warn2.style.display = "none";warn3.style.display = "none";warn4.style.display = "none";warn5.style.display = "none"; 
        }else if(mk_moi.length==0){
            warn2.style.display = "flex";
            warn1.style.display = "none";warn3.style.display = "none";warn4.style.display = "none";warn5.style.display = "none";
        }else if(mk_moi_again==0){
            warn3.style.display = "flex";
            warn2.style.display = "none";warn1.style.display = "none";warn4.style.display = "none";warn5.style.display = "none";
        }else if(mk_hien_tai!=account_user[0].mat_khau){
            warn4.style.display = "flex";
            warn2.style.display = "none";warn3.style.display = "none";warn1.style.display = "none";warn5.style.display = "none";
        }else if(mk_moi!=mk_moi_again){
            warn5.style.display = "flex";
            warn2.style.display = "none";warn3.style.display = "none";warn4.style.display = "none";warn1.style.display = "none";
        }else{
            alert("Thay đổi mật khẩu thành công")
            account_user[0].mat_khau = mk_moi
            localStorage.setItem("account" , JSON.stringify(account_user))
            
            let infor = JSON.parse(localStorage.infor)
            console.log(infor)
            for(j of infor){
                console.log(j.tai_khoan)
                if(account_user[0].ten_tai_khoan===j.tai_khoan){
                    j.mat_khau = account_user[0].mat_khau
                }
            }
            localStorage.setItem("infor" , JSON.stringify(infor))
            window.location.assign("./loginout.html")
        }
    })


})

tong_quan.addEventListener('click' , ()=>{
    document.getElementById("doi_mk_site").style.display = "none"
    document.getElementById("tong_quan_site").style.display = "flex"
    document.getElementById("tong_quan_site").style.flexDirection = "column"
    tong_quan.style.borderLeft = "10px solid rgba(53, 207, 39, 0.593)"
    tong_quan.style.backgroundColor = "rgba(129, 149, 149, 0.573)"
    doi_mk.style.borderLeft = "2px solid rgba(191, 146, 146, 0.593)"
    doi_mk.style.backgroundColor = "transparent"

})