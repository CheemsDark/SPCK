let contai1_find = document.getElementById("contai1_find")

if(!localStorage.recently_search){
    let recently_search = [

    ]
    localStorage.setItem("recently_search" , JSON.stringify(recently_search))
}

contai1_find.addEventListener('click' , ()=>{
    let container2 = document.getElementById("container2")

    container2.innerHTML = ""
    container2.style.height = "100%"
    container2.style.marginTop = "0px"
    container2.style.backgroundImage = "linear-gradient(to top,rgba(20, 70, 136, 0.377),rgba(70,50,30, 0.75))";
    container2.style.display = "flex"
    container2.style.flexDirection = "column"
    container2.style.justifyContent = "flex-start"
    container2.style.alignItems = "flex-start"

    let title = document.createElement("h1")
    title.innerHTML = "Search:"
    title.style.color = "white"  ; title.style.fontWeight = "600"
    title.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    
    let search_inp = document.createElement("input")
    search_inp.classList.add("search_inp")
    search_inp.setAttribute("placeholder" , "Find your beautiful songs")
    search_inp.setAttribute("id" , "search_inp")
    let search_head = document.createElement("div")
    search_head.classList.add("search_head")
    let search_icon = document.createElement("div")
    search_icon.classList.add("search_icon")
    search_icon.innerHTML = `<i class="fas fa-search"></i>`
    search_head.appendChild(title)
    search_head.appendChild(search_inp)
    search_head.appendChild(search_icon)

    container2.appendChild(search_head)

    let search_name="";
    let search_image="";
    let search_iframe=``;
    let search_art = ";"
    let search1 = JSON.parse(localStorage.seeall_aftersongs)
    let search2 = JSON.parse(localStorage.seeall_earthsongs)
    let check = 0

    search_icon.addEventListener('click',()=>{
        container2.innerHTML = ""
        container2.appendChild(search_head)
        let input_infor = search_inp.value
        search_inp.value = ""
        for(i of search1.data)
        {
            if(i.name==input_infor){
                search_name = i.name;
                search_image = i.image;
                search_iframe = i.iframe;
                search_art = i.artists;
                check = 1;

                let recently_search = JSON.parse(localStorage.recently_search)
                if(recently_search.length<4){
                recently_search.push({
                    name:search_name,
                    image:search_image,
                    iframe:search_iframe,
                    artists:search_art,
                })
                localStorage.setItem("recently_search" , JSON.stringify(recently_search))
            }else{
                recently_search.splice(0,1)
                recently_search.push({
                    name:search_name,
                    image:search_image,
                    iframe:search_iframe,
                    artists:search_art,
                })
                localStorage.setItem("recently_search" , JSON.stringify(recently_search))
            }

                let finded = document.createElement("div")
                finded.classList.add("finded")
                    
                let ima = document.createElement("img")
                ima.setAttribute("src" , i.image)
                finded.appendChild(ima)

                let title_song = document.createElement("div")
                title_song.classList.add("seeall1_title")
                let song_name=document.createElement("h2")
                song_name.innerHTML = i.name
                let art_name=document.createElement("p")
                art_name.innerHTML = i.artists
                title_song.appendChild(song_name)
                title_song.appendChild(art_name)
                finded.appendChild(title_song)

                finded.innerHTML +=`<i class="fas fa-play-circle" style="color: #34df87;"></i>`

                let frame = i.iframe
                finded.addEventListener('click' , ()=>{
                    document.getElementById("iframe_here").innerHTML = frame;
                })

                container2.appendChild(finded)
                re_search()
            }
        }

        for(i of search2.data){
            if(i.name==input_infor){
                search_name = i.name;
                search_image = i.image;
                search_iframe = i.iframe;
                check = 1;

                let recently_search = JSON.parse(localStorage.recently_search)
                if(recently_search.length<4){
                recently_search.push({
                    name:search_name,
                    image:search_image,
                    iframe:search_iframe,
                    artists:search_art,
                })
                localStorage.setItem("recently_search" , JSON.stringify(recently_search))
            }else{
                recently_search.splice(0,1)
                recently_search.push({
                    name:search_name,
                    image:search_image,
                    iframe:search_iframe,
                    artists:search_art,
                })
                localStorage.setItem("recently_search" , JSON.stringify(recently_search))
            }

                let finded = document.createElement("div")
                finded.classList.add("finded")
                    
                let ima = document.createElement("img")
                ima.setAttribute("src" , i.image)
                finded.appendChild(ima)

                let title_song = document.createElement("div")
                title_song.classList.add("seeall1_title")
                let song_name=document.createElement("h2")
                song_name.innerHTML = i.name
                let art_name=document.createElement("p")
                art_name.innerHTML = i.artist
                title_song.appendChild(song_name)
                title_song.appendChild(art_name)
                finded.appendChild(title_song)

                finded.innerHTML +=`<i class="fas fa-play-circle" style="color: #34df87;"></i>` 

                let frame = i.iframe
                finded.addEventListener('click' , ()=>{
                    document.getElementById("iframe_here").innerHTML = frame;
                })

                container2.appendChild(finded)
                re_search()
            }
        }

        // if(check==1)
        // {

        // }
        
    })
    re_search()
})

function re_search()
{
    let recent = document.createElement("div")
    recent.classList.add("song_top_mix")
    recent.innerHTML = ""
    recent.style.marginLeft = "30px"
    let recently_search = JSON.parse(localStorage.recently_search)
    for(j of recently_search){
        let main = document.createElement("div")
        main.classList.add("card4")
        main.style.display = "flex"
        main.style.flexDirection = "column"
        main.style.height = "335px"
        main.style.width = "250px"
        main.style.paddingTop = "10px"
        main.style.alignItems = "center"
        // main.style.marginLeft = 
        let ima = document.createElement("img")
        ima.setAttribute("src" , j.image)
        ima.style.height = "220px"
        ima.style.width = "220px"
        ima.style.borderRadius = "70px"
        main.appendChild(ima)
        let title = document.createElement("h3")
        title.innerHTML = j.name
        let title2 =document.createElement("h4")
        title2.innerHTML = j.artists
        main.appendChild(title)

        let frame = j.iframe
        main.addEventListener('click' , ()=>{
            document.getElementById("iframe_here").innerHTML = frame
        })

        recent.appendChild(main)
    }
    let haizz = document.createElement("h1")
    haizz.innerHTML = "Recently search"
    haizz.style.color = "white"
    haizz.style.marginLeft = "60px"
    haizz.style.marginTop = "50px"
    container2.appendChild(haizz)
    container2.appendChild(recent)
}
