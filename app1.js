let account =JSON.parse(localStorage.account)
let container2p = document.createElement('p')
container2p.setAttribute("id" , container2p)
container2p.innerHTML = account[0].ten_tai_khoan
container2p.style.fontSize = "20px"
container2p.style.color = "rgb(140, 149, 156)"
document.getElementById('container2_acc').appendChild(container2p)

if(!localStorage.liked_songs){
    let liked_songs = {
        data:[
            {

            },
        ]
    }
    localStorage.setItem("liked_songs" , JSON.stringify(liked_songs))
}

if(!localStorage.recently_songs){   
    let recently_songs = {
        data:[

        ]
    }
    localStorage.setItem("recently_songs",JSON.stringify(recently_songs))
} 
 
let earth_songs = {
    data: [
        {
            name: "EARTH" ,
            image: "https://i.ytimg.com/vi/pvuN_WvF1to/maxresdefault.jpg" ,
            iframe: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2S1LebN6AXXQqJolBxlWgO?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        },
        {
            name: "EARTH SONG",
            image:"https://i.ytimg.com/vi/ll0WC1E6wt0/maxresdefault.jpg" ,
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4GCGH6TJ69neckwITeBFXK?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`, 
            like:0,
        },
        {
            name: "Save The Earth",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Or4kuh0jeJEhMToSS0c5RMXn04t6Gggw_Q&usqp=CAU" ,
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/365gELdorkTOY4EvAgznBC?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`, 
            like:0,
        },
        {
            name:"Save The Earth 1" ,
            image:"https://i.scdn.co/image/ab67616d0000b27311f8329214c0d65763468074" ,
            iframe: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4A9w1rY1B5fDiI8vvtrel5?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        },
        {
            name:"Earth Day" ,
            image:"https://i.ytimg.com/vi/T-wnFZpYI7E/maxresdefault.jpg" ,
            iframe: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6aZZMOq8vviinJBQNmAd3Q?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        },
    ]
}
localStorage.setItem("earth_songs" , JSON.stringify(earth_songs))
function Earth_songs()
{
    let earth_songs = JSON.parse(localStorage.earth_songs)
    for( let i of earth_songs.data)
    {
    let main = document.createElement("div")
    main.classList.add("card")
    main.style.display = "flex"
    main.style.flexDirection = "row"
    main.style.width = "340px"
    main.style.height = "90px"
    main.style.marginRight = "30px"
    main.style.marginTop = "-40px"
    main.style.alignItems = "center"

    let imagecard = document.createElement("img")
    imagecard.setAttribute("src" , i.image)
    imagecard.style.height = "90px"
    imagecard.style.width = "100px"
    main.appendChild(imagecard)

    if(i.name == "Earth Day"){
        imagecard.style.width = "120px"
        imagecard.style.height = "75px"
    }

    if(i.name == "EARTH"){
        imagecard.style.width = "120px"
    }

    if(i.name == "EARTH SONG") imagecard.style.width = "120px"

    let title = document.createElement("h2")
    title.innerHTML = i.name
    title.style.marginLeft = "27px"
    title.style.color = "white"
    title.style.fontSize = "20px"

    main.appendChild(title)
    main.innerHTML += `<i class="fas fa-play-circle" style="color: #34df87;"></i>`

    document.getElementById("song_for_earth").appendChild(main)


    let song = document.createElement("div")
    song.classList.add("song_run")
    song.innerHTML = i.iframe
    song.style.color = "white"   
    main.addEventListener('click' , ()=>{
        document.getElementById("iframe_here").innerHTML = i.iframe

        let like_song = document.createElement("div")
        like_song.classList.add("like_song")

        let x = JSON.parse(localStorage.earth_songs)
        let check = 0
        while(x.data[check].name!=i.name) check++
        if(x.data[check].like%2==1) like_song.innerHTML = `<i class="fas fa-heart" style="color: #55ec73;"></i>`
        else like_song.innerHTML = `<i class="far fa-heart" style="color: #47b38f;"></i>`

        like_song.addEventListener('click' , ()=>{
            i.like+=1
            if(i.like%2==1){
                like_song.innerHTML = `<i class="fas fa-heart" style="color: #55ec73;"></i>`;

                let liked_songs = JSON.parse(localStorage.liked_songs)
                liked_songs.data.push({
                    name: i.name,
                    image: i.image,
                    iframe: i.iframe,
                })
                localStorage.setItem("liked_songs" , JSON.stringify(liked_songs))
            }else{
                like_song.innerHTML = `<i class="far fa-heart" style="color: #47b38f;"></i>`;

                let liked_songs = JSON.parse(localStorage.liked_songs)
                let run=0
                for(j of liked_songs.data){
                    if(j.name==i.name){
                        liked_songs.data.splice(run,1)
                    }
                    run++
                }
                localStorage.setItem("liked_songs" , JSON.stringify(liked_songs))
            }

            let see_all_earth_songs = JSON.parse(localStorage.seeall_earthsongs)
            for(j of see_all_earth_songs.data){
                if(j.name==i.name) j.like=i.like
            }
            localStorage.setItem("seeall_earthsongs" , JSON.stringify(see_all_earth_songs))
            console.log(see_all_earth_songs)
            
            localStorage.setItem("earth_songs" , JSON.stringify(earth_songs))
        })
        document.getElementById("iframe_here").appendChild(like_song)
        console.log(i.name)
    })

    main.addEventListener("click" , ()=>{
        let recently_songs = JSON.parse(localStorage.recently_songs)
        if(recently_songs.data.length == 4)
        {
            recently_songs.data.splice(0,1)
            recently_songs.data.push({
                name:i.name,
                image:i.image,
                iframe:i.iframe
            })
            localStorage.setItem("recently_songs" , JSON.stringify(recently_songs))
        }else{
            recently_songs.data.push({
                name:i.name,
                image:i.image,
                iframe:i.iframe
            })
            localStorage.setItem("recently_songs" , JSON.stringify(recently_songs))
        }
        recently()
    })
    }

}

Earth_songs()


let afternoon_songs = {
    data:[
        {
            name: "Cứ Chill Thôi",
            image:"https://i1.sndcdn.com/artworks-KQ4g7qCwNczeW1o3-caQqAA-t500x500.jpg" ,
            iframe: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/014DA3BdnmD3kI5pBogH7c?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        },
        {
            name:"Don't Côi",
            image:"https://avatar-ex-swe.nixcdn.com/song/2022/12/07/5/6/5/7/1670385361814_640.jpg",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3ukrFH17Zl6iEZ2QJ1Zwiy?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        },
        {
            name:"Muộn Rồi Mà Sao Còn",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidjBYZ1cNkPfMtnSOq-ZBv2W02npD08uRC01sDDSxOapCNcG4CkdT1kXBBk5i4ofJfxM&usqp=CAU",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5fFLotKS1286huYIMQHqz7?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        },
        {
            name:"Chúng Ta Của Hiện Tại",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiYt7DmOxlhxzSenqd3_X3dgtXN4xMNdHAg&usqp=CAU",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/17iGUekw5nFt5mIRJcUm3R?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        },
        {
            name:"Như Anh Đã Thấy Em",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwwU1lvZ7hl1jVfvxp-M9TKVkVezm1gJgyA&usqp=CAU",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7h2zqUH4bYyknNUxsYnS5V?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        },
        {
            name:"Lần Sau Cuối",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMhDBQcpgTvEQwhUhUOwk6b2IncQIQvIRLQ&usqp=CAU",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4pg2H704hhVrEpl2JRmDlF?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        },
        {
            name:"3 1 0 7",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKckA6GodMk9WTytISiq-lMuUYQEUOsBGasw&usqp=CAU",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5uyNAX6MazVAjBjVeOsTvp?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        },
        {
            name:"Ôm Em Lần Cuối",
            image:"data:image/jpeg;base64,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",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0PcydKNpMjC1Yygy6CdQhr?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
            like:0,
        }
    ]
}
localStorage.setItem("afternoon_songs" , JSON.stringify(afternoon_songs))


function afternoon(){
    for( let i of afternoon_songs.data)
    {
        localStorage.setItem("afternoon_songs" , JSON.stringify(afternoon_songs))
        let main = document.createElement("div")
        main.classList.add("card")
        main.style.display = "flex"
        main.style.flexDirection = "row"
        main.style.width = "340px"
        main.style.height = "90px"
        main.style.marginRight = "30px"
        main.style.marginTop = "-40px"
        main.style.alignItems = "center"
    
        let imagecard = document.createElement("img")
        imagecard.setAttribute("src" , i.image)
        imagecard.style.height = "90px"
        imagecard.style.width = "100px"
    
        if(i.name == "Lần Sau Cuối") imagecard.style.width = "110px" , imagecard.style.height = "85px";
    
        main.appendChild(imagecard)
    
        let divh2 = document.createElement("div")
        divh2.classList.add("divh2")
        let title = document.createElement("h2")
        title.innerHTML = i.name
        title.style.marginLeft = "15px"
        title.style.color = "white"
        title.style.fontSize = "20px"
        divh2.appendChild(title)
        main.appendChild(divh2)
    
        main.innerHTML += `<i class="fas fa-play-circle" style="color: #34df87;"></i>`
        document.getElementById("song_for_after").appendChild(main)
    
        let song = document.createElement("div")
        song.classList.add("song_run")
        song.innerHTML = i.iframe
        song.style.color = "white"   
        main.addEventListener('click' , ()=>{
            document.getElementById("iframe_here").innerHTML = i.iframe
    
            let like_song = document.createElement("div")
            like_song.classList.add("like_song")
            let x = JSON.parse(localStorage.afternoon_songs)
            // console.log(x)
            let check = 0
            while(x.data[check].name!=i.name) check++
            if(x.data[check].like%2==1) like_song.innerHTML = `<i class="fas fa-heart" style="color: #55ec73;"></i>`
            else like_song.innerHTML = `<i class="far fa-heart" style="color: #47b38f;"></i>`
            like_song.addEventListener('click' , ()=>{
                i.like+=1
                if(i.like%2==1){
                    like_song.innerHTML = `<i class="fas fa-heart" style="color: #55ec73;"></i>`;
                    
                    let liked_songs = JSON.parse(localStorage.liked_songs)
                    liked_songs.data.push({
                        name: i.name,
                        image: i.image,
                        iframe: i.iframe,
                    })
                    localStorage.setItem("liked_songs" , JSON.stringify(liked_songs))
                }else{
                    like_song.innerHTML = `<i class="far fa-heart" style="color: #47b38f;"></i>`;
    
                    let liked_songs = JSON.parse(localStorage.liked_songs)
    
                    let run=0
                    for(j of liked_songs.data){
                        if(j.name==i.name){
                            liked_songs.data.splice(run,1)
                        }
                        run++
                    }
                    localStorage.setItem("liked_songs" , JSON.stringify(liked_songs))
                }
    
                localStorage.setItem("afternoon_songs" , JSON.stringify(afternoon_songs))
            })
            
            document.getElementById("iframe_here").appendChild(like_song)
    
            console.log(i.name)
        })
    
        main.addEventListener("click" , ()=>{
            let recently_songs = JSON.parse(localStorage.recently_songs)
            if(recently_songs.data.length == 4)
            {
                recently_songs.data.splice(0,1)
                recently_songs.data.push({
                    name:i.name,
                    image:i.image,
                    iframe:i.iframe
                })
                localStorage.setItem("recently_songs" , JSON.stringify(recently_songs))
            }else{
                recently_songs.data.push({
                    name:i.name,
                    image:i.image,
                    iframe:i.iframe
                })
                localStorage.setItem("recently_songs" , JSON.stringify(recently_songs))
            }
    
            recently()
        })
    }
    
}

afternoon()

let song_top_mix = {
    data: [
        {
            image:"https://i.scdn.co/image/ab67616d0000b27334e7bc09360f659bcdc3a5fe",
            name1:"Andiez Mix",
            name2:"Link Lee, Bozitt and 14 Casper",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4h3K653rm69JYWpO4du2BJ?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1kZD_1fn4d10MsJfT5cX8R5A9M4Ye881DBw&usqp=CAU",
            name1:"Chillies Mix",
            name2:"Andiez. Sơn Tùng M-TP and Da LAB",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5YiqPAVbiFUj1G1qvbXo0X?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
        {
            image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgYFxgXGRgYGBcYGBcXGhoXGBgYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xABEEAABAgMFAwkECQMDBAMAAAABAAIDESEEEjFBUQVhcQYTIjKBkaGx8AdSwdEUIzNCYnJzsuEkNPGCksIVQ1PSVKKz/8QAGwEAAgMBAQEAAAAAAAAAAAAAAgMAAQQGBQf/xAA4EQACAQIDBAkDAQgDAQAAAAAAAQIDERIhMQRBUWEFEyIycYGRodEzscHwBhQ0QlJy4fEjYoIV/9oADAMBAAIRAxEAPwAXOVzlwKwRhv4SWxNOMZ0Zn1qvVOlUSlY6cV7zQSaArKDFmMDLcEnbnSqcJz7MJd6uIA6LeA8kJUI6iTZ3phpwrjknr1B0T3KYFPW/+ETLHDwVjVCxX2h7yLrWkHVNbCs5hw6tJOJGfBMQhM3sP5WrXHLGOLQNT6zzKEmCzuY+rqgmRnTX+Ey2NkGO7sUwyHhPICfGSkKIi1EEYshVru75IT7YwZOO6RqmytXFRJIroluYWu6JoCJEGU5SummtEPZN7m2gzLmiRp3K0uKRhqCnTbzFw8b+5ZzrdUd7BUgCnmaoIriFYtxINe0jFbmNUy2GNB3LGWVpIpmoKcBW4JY0QYjBqrfaxu3WtpTsVbtC0ljSW4igmcZ/5yngiTESiLyCVjSVjAvHE610pPyBSlutAaWzNCT4V8vJWIlEp9sQ5tddmTKgGsj/AB3KOzIUoQ4/GpVnaY8pgDcNJ6T4VQXAyrn4SqolmZ5IGJHA9yXjOaMSOCPEcSJAynjIeKC6Hu8NEYmSFnObPEYJd0RvvBPOhDQdyQ2jDHNmQB3jKSjEtE+cb7w8FiQ/6ePfKxLxPgVbmdJDCO/CWXooTUcxMAEJ2ajkVu1mdCUvvN/c1XUGHIKn2vkJ9IvaR2GfwVzDiYDNVvJCPaYUjNSZjL/HBLRXzdIJuGFBtgklCLDpLePNGYRKahFfSgmoymrjbsSoEpuFYHuF55EJnvPxPBuJWzaIEPqQjFPvRMOxg+KXKr/TmZlWV7RWJ8tPN6C0CE5/Ua53AE+KdGyouL7kMfjcB5TSsbbbzQxC0ZNYLo8KqvFvYSQJuOf8oW58bFWqy1tH3Lg2KH960w/9Ic7yUhBgf/IPZDcqrnXnBqkGRdyrC+LJ1ct836Jfgs/osGv9Sa6w3SUf+mtPVjwnbiS3zVeYMXchPEUZAqYZLeC4y3Tfon+EXD9nRW15u8NWkO8qoMMydWhGRofFV0O1xGYBzd7SR5Kws23HOpEDYg/GK9jgpimuYvt8pe33yCbSaC4Z4GW4fyq+0Q5kE4TNZTlkB8exW0XmXmj+ado+rDwdl2oNos7mSERsgcDi08Dn/CONWL5CrJ9nR8H+s/Iq4EIHHCWG/CfwmkbcwTc4iglKmFaAZaeCs3sJcZmQylu0n5pKOy80TkCNew4etyehE4le+EXSLjMgzGgU3MTcOzmXDPXfTALboYkiRmlErhDWRWS9ZJx0LNLR8Jep6etEQiURC1MEpHEidMh6n3JETMIzMqdsyK8UztATbSjhITnUtnM8Mwol7W4nKgVXFSRQfSDosUeaf7p/2rEoA7mAxoYTdBlhRSgt3ALIRE3NngAfGSYY1WdwkRMIGshPWSIwSWAKTQqLsSY3cicVAJyw2LnJucbkJvWef2t1cqlJRV2KqTjCN5aGrHZ3xXXWDDEmjWjUnJO/SIcH7KUSJnEd1Wn8Az4pa17QBbzcMXIIyzedXnNI3nOo2gSrOevoZ+rlVznkuHz8eozHtxJLnuLnb/hoEoDEdOVAmLPZQ1MykmqDtwGLDHJIRsmzxfMyT0RPv/yriHBaABJL2RvSI3JtxRKKQipLOxFzgMgttjHRCu5evWKlLH4ZogLGPcbpM61+KU2a68C52ZpuGQ7vNOtb5JHYAnBnq+Iey+ZeCDeS9kP3RooOsoIwCm4zmAijIZqPMFsq4myJVaa76qcDaESD0SLzDi01aezJWN/JDiNBoapcqcZEburSV0DdAhxmk2eQeMYTjX/Q7MbkjFsbA2bpzpeykRluwULZYC3pQyQRUSpI5JyxbQbaQGRZMjSEnnqvOF1445pacqeuaFSXmvdfK9yviwG3p1rlMy7BOi3Egta2ZAAzJOEjvwTFrhuY43+jdxGg+I0Shh35F2XVbkBOhIzdhwWqLTV0Z5xsL8005Y4JSLYWSlU7yZnirKIlYjgiMsola+ws03Y+t6WiWZowHarMhAiBFYRJCV5+q2j0WKWAzLGzibid1dEdpUA5SZDaMgl2O40JzWwVjQNAjQLJzrgxo6TjIbt53BU8ldgykkrvJB9m2PnCS43YbKxH6DQbytbS2gHyAF2E3qN/5HUotvtDA3mWH6qGan/yPzcdRoqkExDPBuiTFOTxPyRlpxdSXWS8lw5+L9jcIF5mcFYQ3NFFFgRRJaIxsMkybJLbnIsF3RcNyFBiTRCL5moMMh5eZy8pTmfJNQ3TE9UMOMpGs59y1hw0VWFu7zDtbitRHACcyUK4FGOzo0HqYUSMXSFWVDZatWGsYtrxSNutYkZGsqY/JD2S8MhshnEUOMpmprLVeUe0jbtpgWtrIMeIxpgsMmmQmS6vgFzEDlfbQ5pNpikAzPSOqz1K8IyaaeRzGxbd0rtEIVXUpqMrPuu9vU+jC4AzmsBXKciNoujc4XPLxIObeM6GeHguqdDB3abt6ZCWOOJHa16PVVHBu9t+7PM2SMlgFAoNs4BxPetmANT3qxVkDiA1me7tVdFsTXNmMyZHt+fmnotjnQudLigWfZTGAgFxB1JprKtMlVinfcGsUfngIEYjnW0hPP3vwOPkfRWisukhwkRQg5GaDa9lNIoXA5VNN+PBOPb9IhzNY8EC/rEYPv8A5hn/AIWdXpS5MXKKtwX2fw+G58tK950Sj2q1sNhY8XiDQa0VZFgNJmBuFTXsWtPgY5xa1AESyQIkkeNZm8O1KOgNlMjE0xJl28EVzNKJq4FiX+jD1JbUsxeEuZKU0G8ptKWdvYK0q2Y7mIBfhEjAhurYebuJ+SS2XZediNZkTNx0aKn5dqDyht99z3jCV1g0a2g+falVO08PDUx1l1lRU9yzf4Xm8/BCrXc4GhvVkn4TABJJbAZKAJ8VZALRCOVxrlc3JFYhBTYmC5aB4Aq7globqgcU1ZetPIBAhiZmTmh3iVqxkLQWry22qsok1QjnoniPNqlNRtJoRw/cFW88vpj+Ar/2S+x4l7Wf71v6LP3PXEgrtva1/et/Rb+6IuIXlV/qS8Tm+if4Gl/ajvfZvymECM2HEMmnog7jrwMj3r3JpwkvlEFei8ifaI6ztEC0kvhCjXYuhjQ5ub4jwTNnqqPZeh0MekGoJVE3hVrrN2/NtMs7bsj2txUZqu2ZtuBHAMKIx4ObXAkcaTCevLcO2XbKO1RcqUrpOz1Vnws0iRxKgSpEoZO8IDUBfXu+WetErz7oURsVuLSaZEZg8QnngJC3yuz491MlUoqSswGrFhaw1rSYf2cYXmbh95vYadqqyyitrPAvQXQfvAc7C4jrN7QqsxpieSXRk1eD3CKkbrjb9J/jyFYqSjtTcR6RivWq5jkgKxbmFilxdh10Mb+9Sazee9RLtPBbbEVZHZlxYRzdmixJ9KIeaad0puI7PJcuHOixC1juiKEywxFN66Tb7rkODBwuw7zp+9EqfW9VezoAY2maz0o4s+JjoXlF1P6n7LJDtjgBsm5BP2dorPIJRkVN2Y0dwW1qyKq3aBGWklHnJGaiX5LAKqy0g4fMblkMDIDetE0W2iQmhaE1Jwpxc5NJLVvJEyBoFscEB0bTwr5hU20uVVlgEiLaGAj7oIe8djQSFTaWbOXq/tbsan1dCM6z/wCqy9X8HSsYNKqNpHRPr7wXL7L5c2SLeuve6V2pZdxva8F0bowfDvDAhpHAkIIyjJ5O5t22rOv0RUryhKClCeUtcrr8Hivta/vW/os/c9cdBhlxAAmTQDVdj7Wv71v6DP3PXLbF+3hfmC8yv9SXieN0JBT2WhF71FetkLPYQZEEEZFDkvYNm8koVuZEvSD2kXXDeDQrmds+zuPBJkTLUjo/7hh2hBgla9sjpNp6HqU6sqdNqdvJ+jt7HN8nYhFoZIkVOBl906L27kYHRIby57jJ+ZJyGq8j2VsGLDiteQ0tE513Fev8gvson5/+ITNmf/Iepsuz1aHR81Vi4vGtVusdE6zTzOuS2bK0mdT20RRgovetxjuyTobe712pO3QWhhPuzdqTnVMh00ta4k2uz6PfN0vmoCyt2DtN7i2IDIQz1aknWRnQFs6SxmibVsbm2h7A4Bh6TODpH5jsVRySPRcPxO85Lodt1hQIuYvQndhm3wmkS7M1LiAs0r77r8op4llr1z2DFBfZhqd9R8k3EnitPwmtRjkhbmmaHw+SxSWKxdiIR7JCvPa33nNHeQEvBN4TBVpsCFO0Qgfen3TPwQTuoNnWVpYacpcE/sA5URb1piAYXro4NkPgtQxRLWx16O4z++497imZb1ezrsgU44aUFyX2QRoTVid0XE5zSjHVAz9VTDW0ugyoVosKqcAbnVRAgNsoA6x7zMozbPvPeqVyPDxCApLae0IcGG6LFcGsbiTjPJo1JlgmXMkfWFF4x7QeUZtMcw2H6mESGywc4UL/ADA3cUqvWVON9+4+cdM7RU6W297HTbVGl3mt7/3kvN8Lb5UcuY9pJZDJhQcA1pIc4avIx4CnFcgCm9nWB0Z11mOZOAC6mx8mYVAQ6I48RPgAvInNyd3mzpei+g6lSnbZoKMFveS+X7ifIzqxOLP+S9usP9vD/I3/AIrzmw8l3wp3ITwDKePxM16NZIBEBk8Q1tDl1aLXscWpNtWPU6cp9T0G6MpJuMamjvrdnjvta/vW/os/c9cvsb7eF+YLqPa1/et/QZ+565fY328L8wSK/wBSXict0B9DZv8Ax90e6ez3CNxb5Fdc4TXIcgD0Y3FvkV154+C10Ppo7XpP+Ln4lHyo2fB5l7+bZeAMiAJzkc1Pk7Z2ss7Cxsi5ocZZulimNrWYPY4OcZSOlJiU1HZLjzTQJdGba/hp40Pajw2lcz4p4LXduBYCp9etFC5TD5VxUYZiZ3QO0ntW338iO7+UQqxuC0ivl8TmlrYwyLQJUMt0pAU7UeT/AHgOwJO22eI8Sv0IkaAdyopopOSjJMdredNdHaG37JGHuOY8doulV9msIhABjscaZ6lWFhaTDtDS6c4LjwumaTWXYXIFLCs9zT90UsOJNg1UIhotWWH0TU04fJbfD3nv/hPg8jLONm0CksW+bGh7/wCFtGLsBsDeiFe8nf7mFxPk5UVgiAtEuCudgPlaYR/FLvmPihn9NnSbSr0ZW4P7FUftXcT5p2GEpEbKPEGjnDucU2xHQziG32V4IiXfWgfhKZc7AjEKvefrhuYadqeJkmreLktCTnT7fOSLCJQGIg4qxbiVHK+3mBZI8UGTrkmn8TxdB7yvn6a9p9qJP0B354XryXiwXl7Y+3bgfNug4Wp1ZvvSqSv5P/Z3nJuyXYLABN0SR4kmg8l6rsPZTIDRgXnrOznoNAvOuQEZr3Wf8JuHiJy+C9Vki2OCs5H1GvUS2ajSp93Cn4+Pnc1HZOo0/n4IcN84frJwTAcq+C+sRuj5Dtulbd5znTc4w6NruWXZfvkkeQ+1r+9b+gz9z1y+xft4f5gum9rB/rQNILPNy5zYLJx4e4z7qryq/wBSXieJ+z6vR2Zf2fdHt/II9GNxb5FdZfXI8g+rF4t8iumLjKa27P8ATR3PSSvtU/EFtE/Vv/KUvyedOC0617/4kOxEt7/q3k6GWeSX5Nz5hm4U4ZHuR/zGPcXZNEO8tuKCVbKSCFyhFdRaDqIcWoQl2AgpvZtRG/Qi/BIuCd2c6UO0HSC4f7jJJr9wTLuvy+6ObseL+KOWgevmlbG7pO4oz3p0O6jNV7zCXhosQJrEQkXssIspj68E5YLXKIwy6rmnuIKWLlCxViv/ACt8Sfko1dWOqmla3G5Zbfa5ltigNmC69jk4B3mVERXaJ3lD0hZ43vw2tP5oZkfPwSs1Wy3wW4CKDvSjfhb0y/AtDa6/fphKScvO0CxTaVoirBMiC5Z054eKKHIk1duYDZz3LOxujWGOyU3BvOADWHI/AheDr6ZxxXhXLTYJsloc0D6t83Qzun1eLcO5efttN5S3HG1djey7VUt3KrxLk/5l65rzENh7YfZoge2tQSNZL3PYe3W2uE2LBunJzXEgsOYMga+YXzuE9szacWzvvwYjmO1Ge4jAjis9Cs6b5GlbbtFOnhptO2mLT2zSPoi8+9ObZSkaOJ3SMsErtC2Q4EN0WI4NaKknEu0GpMsF5MPaPbZS+qJ1uV85eCoNsbctFpIMaIXSwGDRwaKBapbXFLs6nP7dQ6R6TkobXKMKSd8ML5/r21M5RbUNqtESMaXjQaNFGjukrHklZek6KchdHEzn63qn2dYXRXXW9p0Gq9E2LsuZZBhjA46auK893k+bO3/Z7o9OaryWGnS08Uvxv5nZcj4DmwLwl03E10FB5FXjhENKKdkgBjGsbg0ADsRF6sI4YpcDXWrdZUlPixK2WeJEbdo2eJx+CLZ4ZYxrWgdEASmZSGeCYvIbnSV23iiV47kF08yK0otsmlbf0WgCgmqZbVgse/k0HGQnKUhwUmNeOk4DCUp4VWnPkZDWZ7SpujSqdQqBaAviPlMMAFM5U7tBgmGxXNskd5Am5zGCugvGst6XtEQ8KyHCc5/HtRNtPuWWEydXXoh/1Ub4JFbOyFvK3ivbN/Y5Kyx31IaKzxK1HtcafRa2XHfqpwXC5PLEZzBwM/WKLFNN86/CXYU5LIxSuI87H91nefksTU+Ph81iuwqwZzkLZxnGf+VvmUIOefu96PYYLmueSQSQOGaNanVPM6KGOdssWH96C4Rm/llJ48ykIT5hT2NbTCite6Raei8atNDx17FHaVkdBivhCUgZsM8WGo+XYUqEsFRriZ4dipKD0faX2l8+BIuU2vQGl2g71sF08B3rTcdYZmp3ko57gMKorS6Q6PiiUgHEaBVdt3ZEK1wjCiimLSOsx2rd+7NMiLw71KHFO7vVNxkrMTOEZq0rNHjO3eRFos7jL6xuRFJ9+e5c6+xRRjDd3FfRURt4SLQRnOUlWR9hQX9UFp3Gg3SqvPqbI79h5czJ/wDN2WTzbi+Wa9NTwiFYYrsIbj2FW9h5MvNYhuDQVP8AC9Pi8nZTk55HAYfHgjwthQmkTBfUCrpSroAkrZqm/I00ui9gpdqpKVTlay/XmcvsbY5P1cFkhmdd7iu/2Lsptnbq89Z2u4aBFs0mC62G1oGAaQj3yfula6NCNPPVmraNq62KpwSjBbl/gaaaLTkDnzk0+C2Yp9EJ5hwtBgVFxqgviun1SeEviUF9qNeg6n5a8KzQthKIwKJfaDxITwn8Cgm3H/xRP/p/7Je1ufELWhhAmCSZZVlQpbZHaw89+B7+6alDIqSZyHYPUkKOx0hgTSYnL1RK3HZ3RxPrcrAkO2SEYsS5m8gcAcT3T8UpyytwdFMuqCGNA0aJDsn5q02WOZhRI5kDIw4f5j1ndg+K4+0i/FlMSEtVnTxTvwM1TK/LLzevpkhhoutaJZTJ30+S07D1ktRwRmD2/wAKutVtIIYMXEimUlovYyyY/wA4PdWIPPn3PFYoLHA5FDkk2JVEvpp1akOzVuPr7PSsazjtfB+Jb6xVJNHslsdCe2KzFpw94ZtO4pNWGJXWqFV6cpRTh3lmvjz0JQzOqJeTG1bM0BseF9jEw/A/Nh03KuDqpkKqkrl05xqxxR/0+HkEjxZNNd6PYYt5jTumlHM1wzRNlu+rbLCsuF4yRxbcipo8y5YcjPo0N9p56/OJ1bspXyTjeOCZ5DcjRGEG1ui9EPnzd01uOp0p6jRdB7UD/Qn9RnxTPs1d/QQvzP8A/wBCsnVQVbDbK1zxVslL97wWytfzuVmx7LCbarY9ltEVz4cb6sBwIzN8mnRwHFVvsntjITbXEiuDWNbDJJyq/vJyCr+R5/rrX+lafNc5s6wRorIphglkNofEAwkJyMs5dI8JpWPC4yS0uY+twuE4rfLI9h5N8shbIhZCgRA1vWiOLQ0DLtOi4vlpyK5hkW1c/enEncuS+0d717Kei6n2bbTgxLIIbGhj4dIjRmThE3z8wdyl7Tnf0D/zw/3J81jpYpO7Nk6Sq7Njm8TSbXI5XkNyJFobCtTovRESsO6STcdhennLRdNyj9o0OBEMKDD557TJxndaDm0SBLiFv2cOP/TQG9acWXG8ZeK5z2VPgiNG52XP0uXpTxN+7P705b0uPZjGMcsW8x03JThSpvDiim3xvdfj3L3YXtJhxniHGhc0SZAg3mz3zAIXOe1907VCINOZGH53qXtSfBNphc1dMUA85dluuXpfe62+UlX+0Iu5yzXutzDZ/wC5yCpUk04Sd7WH15SdCcZO7jJK/G/wei8pOWsCyxGwbrosQ4thy6M8AZ/eOivbJHc+G1zmGG5wnccQS3cZUnuyXkHJx5sNvb9Nh9JwnfeZlhfURJzkcwTlXRexOcnU6jldt+Rr2SpKq5Nu1t3DxJTW70kBz1F8RMNbNRjMzmVKyWYxIga2riaTMwNTwASroiuXO+iwa0jxBXWHDPk4+sEqpK2S1M8pW01enz5aiPKm3taBDh9SGLrfxH7zu0+qrmrG2QLjiVu1RucfIYBSiPlRXTjYyza0Wi/V/Mk9yqrR9vB4u/anXRElEE4sM6Xv2lGzPMJz5WJLnFivECWLXup0T4IzrTdnMGiWDlpzpuaNS3zTGdDiyHhapykDVHhxDmCKTQWozFLDlcd2PthsJzmPBdBifaN00eNCExtaxGCQQb8N9YbxUOGh3pBoEjOtEzsva4hThRhfs78W5tPvMORWacHB4oiqkZRk6kM795cea5r3WQrGjtlWcu5Es1ta1rWyIppTE0EvVVZbQ2dcaIjHc5Bd1XjLc/QpEEdbSk898k+nPFmmHGcaixRf65lRyss7LVB5kvMObmuncLsN0xqicmoDbLAbBvOfdJM7hbO84nCZ81YtEzMisqbq/wADuUgfgph7WLeL6iPWdZvtbyOW2NyXEKPFjc8TzrYjbhhyI5zOYeZyTvJDku+x87J4ic4Girbsrt7HpGeK6Bpr4JqEfIqo0oprlf3FfulKFmlmr2z46nKbM5FOs9r+kQI4a0msK4ZFpxZMOw0pSiueU2xvpdndBvCHMtM5XuqZ4TGPFWIesvK1TgouK0ZS2WEYuKWUtwhyX2MbHZxAvh8i43rt3rGcpTPmqHlXyCgxnOjMicy9xm+gLCTnKYk4mWBXXqDhPFVKEXHC1oBPYaM4qMl3VZeHicVyb5BwYT2xHxOdlUdG60aGUzNWHKrkQbbEZEEUQ7jLt25en0nOnO8JYy7E9YHgRXsJJuHo6AV7CVb2m0yMgcEtU4YbWKezU3T6tLIouV/J1lsY1pdzcRlQ+V6QzaaiY7cQmOTkN8KEyC+JzpZQOkWm790EEnAZ6STbok5pN8aRGE6mXrf8FbilLEW6cYz6xavJjke/PHChI8PNDjxhUA8f8obS4gtxJdLecTLsmArmDY4dkaItokYhqyF5OiaDd6C51MPiDKSWu/Rb34fOgewwGwGC0RgLxrCYcz77tAKLl9t7SL3um4FxMyeKHtvbbojy5xm4+A0AyCrrNB+8cUMIu93qZ5Sd+LevJcF+sxyyQqUEyoxhwHasDpIMVycIk7GOEqJeIZOB0B8aLUSIl3uVCZMFdO5YsvLFBdx1r1hf02fmHmhQgfdK3FY8uZSgI85p57ty3D8eNO9b5+iQfGfMgAATxUr7tB3qx6qcBt9rk2uJIoO1QgTeZvynIcZYnsSgc6YMvFMMjEfd8UNiKd9Sz2dtaJZXdGsN3WY6rXDePiryHZoNpF6yuDImJgv4f9snHh5LkIkZxy8lB0J7TeYDexx8kmVKzvHIXKKxY49l8flb/Z8y9tEN0MlrmlpGREigCLh61TFh5XOIEO1whFbkXGTxweK+sU+dmWePWzxw0n/txeieAfgUKrNd5BfvDj9RW5rNfK80V0J8z6x9FNtfiBk0+Shadi2iEDehOlkR0h3iY70CADWZFQQR8NyfConoximprsu/gHY5aiRZfwqwxIlZtGOR/hQfFie6O/8AhS5cpFtBinPQdiFaS51AZVHaNOKQEWLKYDUN0SMSaAA4GnfihbF4uCYxFiw2xMZECc92Hesbar5JNDpmZS8VWQNmRL8gC8nQE+AqV0uzeSsYNDokobBW9EIZ4GqU6qQiU8PftErmuTWzNjxYzi5rZNAN57qNExKpOPYrUuscConaH7+hCn5u8QqLbXKSNEk0ua1uTGiTR2Z9qBzlLQCUm1krc3+Fq/OyLmJtCBZBKDKJGlIxXDot/Tbnx81xO3NpueZlxc4ubUzJmSAgR3vcaFBbYiSLxEhI01aZ49gUULZmWUtbb9W9X/jkhmzQa3nYpy+lOcrLtWjFTQL2GokSiA+Ilosc5BBfH4qCpSCvehPegRI+49ygHT17kNxDZO/vWIFdD4/JYpcC5a88Zepk70Xn5Z6JMnehO1JloBkFrdz2sdh/n0RkaZSDa5ojXb+9UEpsdMXvW+czSgfhUrXOqB9YMtjTe3efmnzExXNveecZPM1GUxruV05yqOdyU6l7jD2giqXuOb1So87RYIqppMPFvRY7N5TWiDRr3AbjTuNFcQ+Wof8AawoUT80OR7x8lzMNwOKG6E0pMqMWKlGEs5RTfHR+qsdiNtWJ/WsoH5Ijh4SUzb7AcYUbsiN+JXCOgaFb5gjByDqfEq6WmJeEn8nct2hYMoEQ0n0ogHkUGLykszKQ7JDJ1e4vlxpvXEGE6c7x9bkNtnqJuJzlgBvKHqkwJNPW78ZP/B120+XUZrCIZbDoZc20NG6pzVC3lDEe2b3ue73nEk+OCqI7A4kVOmldAi7OYAylakePruVxppPJCoywy7CSGzbHu+K1Z4XvGZ9UUHRMfXrBbLtMP8/x4phTlfNhecGAzw1081C/id3ifhJDfEAwxlKe/P4pZ75gy8VVxcpBjF0yCG+ITWdUEv8AXreh3pqhMmFLtN61OqFfFdymHqCzTnV3LXOG4OJ80KO+VdFFzug3gquLbM53isQZ71tS4BZuw7lB3wWLFsZ7JuHh61RBisWKi46EluHmsWKPULeJ23rs/N8Crh2fErFiFbyQ1YEqaxYqYQSGtFYsVshgxW9FixCiMHE6p9ZoETA+slixCxUgcHH1os2V9kP9f7nLFiBaiV3vUmc/WRRG9X1qsWKyC5xQ24d3ktLEIlkH4n1qo5H194rFisWxZuJ7PJHOAWLEApgLZ1D2rQ6jeAWLFN4L1BrFixUAf//Z",
            name1:"TikTok Mix",
            name2:"Music Remix,Lofi From TikTok",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7wBX6boSy2Tm5Id0X7EvM4?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
        {
            image:"data:image/jpeg;base64,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",
            name1:"Link Lee",
            name2:"Link Lee, Phuc XP and Ha Anh Tuan",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6iXGivPFpsqKmrINhIbPvx?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
        {
            image:"data:image/jpeg;base64,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",
            name1:"Vũ Mix",
            name2:"Chill With Vũ",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6uxuJ8Fr1AAfSPJUF9N1yr?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
        {
            image:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/a/2/8/3a2883b725a610def357c56fa0ecc723.jpg",
            name1:"Tăng Duy Tân Mix",
            name2:"Tăng Duy Tân x Phong Max Remix",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/36BQLOKzGVk7PjQtBnef5b?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
        {
            image:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/0/a/6/10a6a546e85a0f185840b281d2fafed8.jpg",
            name1:"Hà Anh Tuấn Mix",
            name2:" See Sing Share - Đà Lạt",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/53zusvCJkyGYjEZ6bnLIjh?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
        {   
            image:"data:image/jpeg;base64,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",
            name1:"K-Pop Mix",
            name2:"IVE,BTS,FIFTY FIFTY And More",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3eL1bSaPTtI1wamNJ7dTw5?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        }
    ]
}

for(i of song_top_mix.data)
{
    let main = document.createElement("div")
    main.classList.add("card2")
    main.style.display = "flex"
    main.style.flexDirection = "column"
    main.style.height = "335px"
    main.style.width = "250px"
    main.style.paddingTop = "10px"
    main.style.alignItems = "center"

    let imga = document.createElement("img")
    imga.classList.add("image_topmix")
    imga.setAttribute("src",i.image)
    imga.style.height = "220px"
    imga.style.width = "220px"
    main.appendChild(imga)

    let title = document.createElement("div")
    title.classList.add("title_topmix")
    title.style.width = "88%"
    title.style.marginTop = "30px"
    title.style.alignItems = "flex-start"
    let title1 = document.createElement("h3")
    title1.innerHTML = i.name1
    title.style.color = "whitesmoke"

    let title2 = document.createElement("p")
    title2.innerHTML = i.name2
    title2.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
    title2.style.color = "#9E9E9E"

    title.appendChild(title1)
    title.appendChild(title2)

    main.appendChild(title)
    document.getElementById("song_top_mix").appendChild(main)

    let frame = i.iframe
    let name1 = i.name2
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
}


let artists = {
    data:[
        {
            name:"Jimin",
            job:"Artist",
            image:"https://awsimages.detik.net.id/visual/2021/07/04/jimin-bts-5.jpeg?w=650",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3Ua0m0YmEjrMi9XErKcNiR?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
        {
            name:"tlinh",
            job:"Artist",
            image:"data:image/jpeg;base64,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",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/28bxbqNcAuNxYDZYet6eZ7?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
        {
            name:"Tăng Duy Tân",
            job:"Artist",
            image:"https://i.vietgiaitri.com/2022/8/21/tang-duy-tan-chu-nhan-cua-loat-ban-hit-viet-gay-sot-quoc-te-1dc-6603674.png",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/62SFLTN7txImu8pQwBMP6A?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
        {
            name:"MONO",
            job:"Artist",
            image:"https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-17.jpg",
            iframe:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5hkAuvgkOrd4KpDOlCNsvW?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        }
    ]
}

for(i of artists.data)
{
    let main = document.createElement("div")
    main.classList.add("card3")
    main.style.display = "flex"
    main.style.flexDirection = "column"
    main.style.height = "335px"
    main.style.width = "250px"
    main.style.paddingTop = "10px"
    main.style.alignItems = "center"

    let ima_box = document.createElement("div")
    ima_box.classList.add("image_box_art")
    ima_box.style.backgroundColor = "green"
    ima_box.style.height = "230px"
    ima_box.style.width = "230px"
    let image = document.createElement("img")
    image.setAttribute("src" , i.image)
    ima_box.appendChild(image)

    let infor = document.createElement("div")
    infor.classList.add("infor_art")
    let title1 = document.createElement("h2")
    title1.classList.add("infor_tit1")
    title1.innerHTML = i.name
    let title2 = document.createElement("p")
    title2.classList.add("infor_tit2")
    title2.innerHTML = i.job

    infor.appendChild(title1)
    infor.appendChild(title2)
    main.appendChild(ima_box)
    main.appendChild(infor)
    document.getElementById("popular_art").appendChild(main)

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
}

let butchange = 0
document.getElementById("updown_button").addEventListener("click" , ()=>{
    butchange++
    if(butchange%2==1){
        document.getElementById("updown_button").innerHTML =  `<i class="fas fa-sort-down fa-rotate-180"></i>`
        document.getElementById("iframe_box").style.height = "30px"
        document.getElementById("iframe_box").style.marginTop = "810px"
        document.getElementById("iframe_box").style.transition = "0.5s"
    }else{
        document.getElementById("updown_button").innerHTML =  `<i class="fas fa-sort-down"></i>`
        document.getElementById("iframe_box").style.height = "130px"
        document.getElementById("iframe_box").style.marginTop = "710px"
        document.getElementById("iframe_box").style.transition = "0.5s"

    }
})

//before change

document.getElementById("container2_acc").addEventListener('click' , ()=>{
    window.location.assign("./acc.html")
})