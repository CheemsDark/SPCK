let liked_array = JSON.parse(localStorage.liked_songs)
let sang_liked = {
    data:[
    ]
}

for(i of liked_array.data)
{
    let check = 1
    for(j of sang_liked.data)
    {
        if(i.name===j.name) check = 0
    }
    if(check){
        sang_liked.data.push({
            name:i.name,
            image:i.image,
            iframe:i.iframe,
        })
        localStorage.setItem("sang_liked" , JSON.stringify(sang_liked))
    }
}

console.log(sang_liked)

document.getElementById("contai1_love").addEventListener('click' , ()=>{
    let container2 = document.getElementById("container2")
    let sang_liked_1 = JSON.parse(localStorage.sang_liked)
    container2.innerHTML = ""
    container2.style.height = "100%"
    container2.style.marginTop = "0px"
    container2.style.backgroundImage = "linear-gradient(to top,rgba(20, 70, 136, 0.377),rgba(70,50,30, 0.75))";
    container2.style.display = "flex"
    container2.style.flexDirection = "column"
    container2.style.justifyContent = "flex-start"
    container2.style.alignItems = "flex-start"

    let title = document.createElement("h1")
    title.innerHTML = "Your Liked Songs"
    title.style.color = "white"  ; title.style.fontWeight = "600"
    title.style.marginTop = "50px"
    title.style.marginLeft = "60px"
    title.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    container2.appendChild(title)
    let stt = 0
    let contai_liked_songs = document.createElement("div")
    contai_liked_songs.classList.add("song_for_earth")
    contai_liked_songs.style.display = "flex" ; contai_liked_songs.style.flexDirection = "column";
    contai_liked_songs.style.width = "98%"
    contai_liked_songs.style.marginLeft = "40px"
    for(i of sang_liked_1.data)
    {
        if(stt>0){
        let main = document.createElement("div")
        main.classList.add("seeall1")

        let Stt = document.createElement("div")
        Stt.classList.add("Stt")
        let numberStt = document.createElement("h1")
        numberStt.innerHTML = "#" + stt ;
        Stt.appendChild(numberStt)
        stt++

        let ima = document.createElement("img")
        ima.setAttribute("src" , i.image)
        let title_song = document.createElement("div")
        title_song.classList.add("seeall1_title")
        let song_name=document.createElement("h2")
        song_name.innerHTML = i.name
        song_name.style.color = "white"
        song_name.style.width = "50%"
        song_name.style.marginLeft = "40px"
        title.appendChild(song_name)

        main.appendChild(Stt)
        main.appendChild(ima)
        main.appendChild(song_name)
        main.innerHTML += `<i class="fas fa-play-circle" style="color: #34df87;"></i>`
        
        let frame = i.iframe
        let name1 = i.name
        let imagine = i.image
        main.addEventListener('click' , ()=>{
            document.getElementById("iframe_here").innerHTML = frame

            let recently_songs = JSON.parse(localStorage.recently_songs)
            if(recently_songs.data.length == 4)
            {
                recently_songs.data.splice(0,1)
                recently_songs.data.push({
                    name:name1,
                    image:imagine,
                    iframe:frame
                })
                localStorage.setItem("recently_songs" , JSON.stringify(recently_songs))
            }else{
                recently_songs.data.push({
                    name:name1,
                    image:imagine,
                    iframe:frame
                })
                localStorage.setItem("recently_songs" , JSON.stringify(recently_songs))
            }
            recently()
        })

        contai_liked_songs.appendChild(main)
        }else{
            stt++
        }
    }
    container2.appendChild(contai_liked_songs)
})