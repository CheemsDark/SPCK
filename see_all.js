let seeall_earthsongs = {
    data:[
        {
            name: "EARTH" ,
            image: "https://i.ytimg.com/vi/pvuN_WvF1to/maxresdefault.jpg" ,
            iframe: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2S1LebN6AXXQqJolBxlWgO?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
            artist:"Lil Dicky",
        },
        {
            name: "EARTH SONG",
            image:"https://i.ytimg.com/vi/ll0WC1E6wt0/maxresdefault.jpg" ,
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4GCGH6TJ69neckwITeBFXK?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`, 
            like:0,
            artist:"Michael Jackson",
        },
        {
            name: "Save The Earth",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Or4kuh0jeJEhMToSS0c5RMXn04t6Gggw_Q&usqp=CAU" ,
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/365gELdorkTOY4EvAgznBC?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`, 
            like:0,
            artist:"Various Artista",
        },
        {
            name:"Save The Earth 1" ,
            image:"https://i.scdn.co/image/ab67616d0000b27311f8329214c0d65763468074" ,
            iframe: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4A9w1rY1B5fDiI8vvtrel5?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
            artist:"*Fabbro",
        },
        {
            name:"Earth Day" ,
            image:"https://i.ytimg.com/vi/T-wnFZpYI7E/maxresdefault.jpg" ,
            iframe: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6aZZMOq8vviinJBQNmAd3Q?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
            artist:"Horia Surdu",
        },
        {
            name:" Our Earth",
            image:"https://i.scdn.co/image/ab67616d0000b27386456d854ed8f5fca143b4df",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5Xlua51C6sGO1n6hB42WjI?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
            artist:"Amadeus Indetzki, Epic Music World, Niklas Hardt",
        },
        {
            name:"Our Earth Sizzi Bird",
            image:"https://i1.sndcdn.com/artworks-uUdaenBSyX55MRUM-VBrMZA-t500x500.jpg",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3wOr6AYltDOC5MONTkJHUz?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
            artist:"Sizzi Bird",
        },
        {
            name:"Earth K-391",
            image:"https://i1.sndcdn.com/artworks-000534071370-qfhena-t500x500.jpg",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Z4oCaL8tQBGQRUJRh2Gua?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
            artist:"K-391",
        },
        {
            name:"Earthquake",
            image:"https://i1.sndcdn.com/artworks-000343493568-bovozz-t500x500.jpg",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1QiYDTbIEPDRTavCXXaJFl?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
            artist:"VINNE, Galck",
        },
        {
            name:"Earth 2020",
            image:"https://i.scdn.co/image/ab67616d0000b2739a52e482a600f76197357e66",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2APhx63Q8xpqlQ1lkomqTO?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
            artist:"Tatari Gami, Seious Voices",
        },
    ]
}

if(!localStorage.seeall_earthsongs) localStorage.setItem("seeall_earthsongs" , JSON.stringify(seeall_earthsongs))

let see1 = 0
let see2 = 0
let see_earth_songs = document.getElementById("see_earth_songs")
let song_for_earth = document.getElementById("song_for_earth")
see_earth_songs.addEventListener("click" , ()=>{
    see1++
    if(see1%2==1)
    {
        song_for_earth.innerHTML=""
        see_earth_songs.innerHTML = "Shorten"
        song_for_earth.style.display = "flex"
        song_for_earth.style.flexDirection = "column"

        if(see2%2==1)
        {
            let container2 = document.getElementById("container2")
            container2.style.height = "545%"
            container2.style.marginTop = "3720px"
        }else{
            let container2 = document.getElementById("container2")
            container2.style.height = "460%"
            container2.style.marginTop = "3010px"
        }

        let stt=1
        let see_all_earth_songs1 = JSON.parse(localStorage.seeall_earthsongs)
        console.log(see_all_earth_songs1)
        for( i of see_all_earth_songs1.data)
        {
            let main = document.createElement("div")
            main.classList.add("seeall1")
            main.setAttribute("id" , "seeall1")
            let Stt = document.createElement("div")
            Stt.classList.add("Stt")
            let numberStt = document.createElement("h1")
            numberStt.innerHTML = "#" + stt ; stt++ ; 
            Stt.appendChild(numberStt)

            let ima = document.createElement("img")
            ima.setAttribute("src" , i.image)

            let title_song = document.createElement("div")
            title_song.classList.add("seeall1_title")
            let song_name=document.createElement("h2")
            song_name.innerHTML = i.name
            let art_name=document.createElement("p")
            art_name.innerHTML = i.artist
            title_song.appendChild(song_name)
            title_song.appendChild(art_name)

            main.appendChild(Stt)
            main.appendChild(ima)
            main.appendChild(title_song)

            main.innerHTML += `<i class="fas fa-play-circle" style="color: #34df87;"></i>`
            song_for_earth.appendChild(main)

            let song = document.createElement("div")
            song.classList.add("song_run")
            song.innerHTML = i.iframe
            song.style.color = "white"   

            let frame = i.iframe
            let name1 = i.name
            let like1 = i.like
            let imagine = i.image
            main.addEventListener('click' , ()=>{
                document.getElementById("iframe_here").innerHTML = frame;

                let like_song = document.createElement("div")
                like_song.classList.add("like_song")
                if(like1%2==0){
                    like_song.innerHTML = `<i class="far fa-heart" style="color: #47b38f;"></i>`
                }else{
                    like_song.innerHTML = `<i class="fas fa-heart" style="color: #55ec73;"></i>`
                }

                like_song.addEventListener('click' , ()=>{
                    like1++
                    if(like1%2==1){
                        like_song.innerHTML = `<i class="fas fa-heart" style="color: #55ec73;"></i>`;
                        let liked_songs = JSON.parse(localStorage.liked_songs)
                        let check_like = 1
                        for(k of liked_songs.data) if(k.name==name1) check_like=0
                        if(check_like==1){
                        liked_songs.data.push({
                            name: name1,
                            image: imagine,
                            iframe: frame,
                        })
                    }
                        localStorage.setItem("liked_songs" , JSON.stringify(liked_songs))
                        i.like=like1
                    }else{
                        like_song.innerHTML = `<i class="far fa-heart" style="color: #47b38f;"></i>`;
                        let liked_songs = JSON.parse(localStorage.liked_songs)
                        let run=0
                        for(j of liked_songs.data){
                            if(j.name==name1){
                                liked_songs.data.splice(run,1)
                            }
                            run++
                        }
                        localStorage.setItem("liked_songs" , JSON.stringify(liked_songs))
                        i.like=like1
                    }
                    localStorage.setItem("seeall_earthsongs" , JSON.stringify(seeall_earthsongs))
                    
                    // let earth_songs
                })
                document.getElementById("iframe_here").appendChild(like_song)

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

        }
    }
    else{
        song_for_earth.innerHTML = ""
        song_for_earth.style.display = "grid"
        song_for_earth.style.gridTemplateColumns = "auto auto auto"
        song_for_earth.style.flexDirection = "row"
        song_for_earth.style.justifyContent = "space-between"
        song_for_earth.style.alignItems = "center"
        song_for_earth.style.gridGap = "70px 20px"
        let container2 = document.getElementById("container2")
        container2.style.height = "380%"
        container2.style.marginTop = "2340px"
        if(see2%2==0){
            let container2 = document.getElementById("container2")
            container2.style.height = "380%"
            container2.style.marginTop = "2340px"
            }else{
                let container2 = document.getElementById("container2")
                container2.style.height = "460%"
                container2.style.marginTop = "3010px"
            }
        Earth_songs()
        see_earth_songs.innerHTML = "See all"
    }
})

let seeall_aftersongs = {
    data:[
        {
            name: "Cứ Chill Thôi",
            image:"https://i1.sndcdn.com/artworks-KQ4g7qCwNczeW1o3-caQqAA-t500x500.jpg" ,
            iframe: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/014DA3BdnmD3kI5pBogH7c?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            artists:"Chillies, Suni Hạ Linh, Rhymastic",
        },
        {
            name:"Don't Côi",
            image:"https://avatar-ex-swe.nixcdn.com/song/2022/12/07/5/6/5/7/1670385361814_640.jpg",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3ukrFH17Zl6iEZ2QJ1Zwiy?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            artists:"RPT Orijinn, Ronboogz",
        },
        {
            name:"Muộn Rồi Mà Sao Còn",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidjBYZ1cNkPfMtnSOq-ZBv2W02npD08uRC01sDDSxOapCNcG4CkdT1kXBBk5i4ofJfxM&usqp=CAU",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5fFLotKS1286huYIMQHqz7?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            artists:"Sơn Tùng M-TP",
        },
        {
            name:"Chúng Ta Của Hiện Tại",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiYt7DmOxlhxzSenqd3_X3dgtXN4xMNdHAg&usqp=CAU",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/17iGUekw5nFt5mIRJcUm3R?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            artists:"Sơn Tùng M-TP",
        },
        {
            name:"Như Anh Đã Thấy Em",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwwU1lvZ7hl1jVfvxp-M9TKVkVezm1gJgyA&usqp=CAU",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7h2zqUH4bYyknNUxsYnS5V?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            artists:"PhucXP, Freak D",
        },
        {
            name:"Lần Sau Cuối",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMhDBQcpgTvEQwhUhUOwk6b2IncQIQvIRLQ&usqp=CAU",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4pg2H704hhVrEpl2JRmDlF?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            artists:"Duongg, Freak D",
        },
        {
            name:"3 1 0 7",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKckA6GodMk9WTytISiq-lMuUYQEUOsBGasw&usqp=CAU",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5uyNAX6MazVAjBjVeOsTvp?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            artists:"W/N, Duongg, Nau, titie",
        },
        {
            name:"Ôm Em Lần Cuối",
            image:"data:image/jpeg;base64,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",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0PcydKNpMjC1Yygy6CdQhr?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            artists:"NIT, Sing"
        },
        {
            name:"Kẻ Theo Đuổi Ánh Sáng",
            image:"https://i.scdn.co/image/ab67616d0000b273db4499eb8d1bb4224d01f432",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3wH2lto4EJqyIJ4dvl0cig?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            artists:"Orinn, Freak D, Huy Vạc",
        },
        {
            name:"Gió Lofi",
            image:"https://avatar-ex-swe.nixcdn.com/song/2023/03/21/5/5/b/2/1679396959846_640.jpg",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0P1Os2gcJDbstDJX2M2xnB?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            artists:"1967, Jank",
        }
    ]
}
localStorage.setItem("seeall_aftersongs" , JSON.stringify(seeall_aftersongs))

let see_after_songs = document.getElementById("see_after_songs")
let song_for_after = document.getElementById("song_for_after")
see_after_songs.addEventListener("click" , ()=>{
    see2++
    if(see2%2==1)
    {
        song_for_after.innerHTML=""
        see_after_songs.innerHTML = "Shorten"
        song_for_after.style.display = "flex"
        song_for_after.style.flexDirection = "column"

        if(see1%2==1)
        {
            let container2 = document.getElementById("container2")
            container2.style.height = "545%"
            container2.style.marginTop = "3720px"
        }else{
            let container2 = document.getElementById("container2")
            container2.style.height = "460%"
            container2.style.marginTop = "3010px"
        }

        let stt=1
        let see_all_after_songs1 = JSON.parse(localStorage.seeall_aftersongs)
        for( i of see_all_after_songs1.data)
        {
            let main = document.createElement("div")
            main.classList.add("seeall1")
            main.setAttribute("id" , "seeall1")
            let Stt = document.createElement("div")
            Stt.classList.add("Stt")
            let numberStt = document.createElement("h1")
            numberStt.innerHTML = "#" + stt ; stt++ ; 
            Stt.appendChild(numberStt)

            let ima = document.createElement("img")
            ima.setAttribute("src" , i.image)

            let title_song = document.createElement("div")
            title_song.classList.add("seeall1_title")
            let song_name=document.createElement("h2")
            song_name.innerHTML = i.name
            let art_name=document.createElement("p")
            art_name.innerHTML = i.artists
            title_song.appendChild(song_name)
            title_song.appendChild(art_name)

            main.appendChild(Stt)
            main.appendChild(ima)
            main.appendChild(title_song)

            main.innerHTML += `<i class="fas fa-play-circle" style="color: #34df87;"></i>`
            song_for_after.appendChild(main)

            let song = document.createElement("div")
            song.classList.add("song_run")
            song.innerHTML = i.iframe
            song.style.color = "white"   

            let frame = i.iframe
            let name1 = i.name
            let like1 = i.like
            let imagine = i.image
            main.addEventListener('click' , ()=>{
                document.getElementById("iframe_here").innerHTML = frame;

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
        }
    }else{
        song_for_after.innerHTML = ""
        song_for_after.style.display = "grid"
        song_for_after.style.gridTemplateColumns = "auto auto auto"
        song_for_after.style.flexDirection = "row"
        song_for_after.style.justifyContent = "space-between"
        song_for_after.style.alignItems = "center"
        song_for_after.style.gridGap = "70px 20px"
        if(see1%2==0){
        let container2 = document.getElementById("container2")
        container2.style.height = "380%"
        container2.style.marginTop = "2340px"
        }else{
            let container2 = document.getElementById("container2")
            container2.style.height = "460%"
            container2.style.marginTop = "3010px"
        }
        afternoon()
        see_after_songs.innerHTML = "See all"
    }   
})

