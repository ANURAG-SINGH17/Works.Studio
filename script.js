function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    document.querySelector("#foot1 button").addEventListener("click", () => {
        scroll.scrollTo(0);
    });
    document.querySelector("#hero-end button").addEventListener("click", () => {
        scroll.scrollTo("#page2");
    });
}
loco();

function heroAnimation(){
    var tl = gsap.timeline();

tl.to("#yellow-page",{
    top:"-100%",
    delay:0.3,
    duration:0.4,
    ease:"power3"
});

tl.from("#yellow-page2",{
    top:"100%",
    delay:0.3,
    delay:0.7,
    duration:0.4,
    ease:"power3"
},"same");

tl.to("#page1",{
    delay:0.8,
    color:"black"
},"same");

tl.to(".ch",{
    delay:0.8,
    color:"black"
},"same");

tl.to("path",{
    delay:0.8,
    fill:"black"
},"same");
}
heroAnimation();

function page2Anim(){
    var page = document.querySelector("#page2");

var elem = document.querySelectorAll("#container-headings");
elem.forEach( function (elm){
    elm.addEventListener("mouseenter",function(){
        var imgLink = elm.getAttribute("data-img");
        page.style.backgroundImage = `url(${imgLink})` ;

    })
})

}
page2Anim();

function PageLine1(){
    const images = [
        {
        title:"CONVERSE NEXTSTUDIO",
        imgg:`https://works.studio/assets/imager/images/converse-nextstudio/35375/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
    
    {
        title:"PUBLIC.COM CAMPAIGN",
        imgg:`https://works.studio/assets/imager/images/public/37839/public-cover2_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
    },
    
        {
            title:"BETWEEN PLACES VISUAL IDENTITY",
            imgg:`https://works.studio/assets/imager/images/between-places/40495/W%C3%98RKS_BetweenPlaces_Cover_240219_231911_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
        
        {
            title:"CONVERSE BASKETBALL HO19",
            imgg:`https://works.studio/assets/imager/images/converse-basketball-ho19/1766/Converse-Basketball-Identity-Shoe-Photgraphy_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
    
        {
            title:"NIKE AIR MAX 21",
            imgg:`https://works.studio/assets/imager/images/nike-air-max-day-21-nyc-identity/38233/amd-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
    
        {
            title:"JHON ELLOIOTT SCENES FROM NEPAL",
            imgg:`https://works.studio/assets/imager/images/john-elliott-nepal/37810/john-elliott-nepal-cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        }
    ]
    
    const line1 = document.querySelector("#line1");
    
    
    
        images.forEach(function(item) {
            var imgCont = document.createElement("div");
            imgCont.setAttribute("id" , "img-cont")
    
            imgCont.innerHTML = `
                <div class="overlay">
                    <p>${item.title}</p>
                </div>
                <img src="${item.imgg}" alt="${item.title}">
            `;
    
            line1.appendChild(imgCont);
        });
} PageLine1();

function PageLine2(){
    const images = [
        {
        title:"NIKE STUDIO 45",
        imgg:`https://works.studio/assets/imager/images/nike-studio-45/3184/Nike-Studio-45-Desk_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
    
    {
        title:"NIKE NFL 2022 CAMPAIGN",
        imgg:`https://works.studio/assets/imager/images/nike-nfl-2022/37789/nike-nfl-cover2_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
    },
    
        {
            title:"JEEN-YUSH FILM IDENTITY" ,
            imgg:`https://works.studio/assets/imager/images/jeen-yuhs/35858/v1.5-home-image2_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
        
        {
            title:"NIKE AIR FEAR OF GOD IDENTITY",
            imgg:`https://works.studio/assets/imager/images/Fear-of-God-Nike/38013/fog-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
    
        {
            title:"ESSENTIALS FEAR OG GOD IDENTITY",
            imgg:`https://works.studio/assets/imager/images/essentials-fear-of-god/42214/Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
    
        {
            title:"LED STUDIO WEBSITE",
            imgg:`https://works.studio/assets/imager/images/led-studio/26053/thumbnail_230526_162436_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        }
    ]
    
    const line1 = document.querySelector("#line2");
    
    
    
        images.forEach(function(item) {
            var imgCont = document.createElement("div");
            imgCont.setAttribute("id" , "img-cont")
    
            imgCont.innerHTML = `
                <div class="overlay">
                    <p>${item.title}</p>
                </div>
                <img src="${item.imgg}" alt="${item.title}">
            `;
    
            line1.appendChild(imgCont);
        });
} PageLine2();

function PageLine3(){
    const images = [
        {
        title:"FEATURE WORLD IDENTITY & WEBSITE",
        imgg:`https://works.studio/assets/imager/images/futurevvorld/38020/fvv-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
    
    {
        title:"CONVERSE BASKETBALL IDENTITY",
        imgg:`https://works.studio/assets/imager/images/converse/38120/v1.5-converse-bball-3_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
    },
    
        {
            title:"U.S SCOCCER CAMPAIGN" ,
            imgg:`https://works.studio/assets/imager/images/us-soccer/21753/NewThumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
        
        {
            title:"VERSACE TRIGRECA",
            imgg:`https://works.studio/assets/imager/images/versace-trigerca-identity/38005/versace-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
    
        {
            title:"THE NORTH FACE CLIMB FESTIVAL VISUAL IDENTITY",
            imgg:`https://works.studio/assets/imager/images/the-north-face-climb-festival/41520/Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        },
    
        {
            title:"THE XI BRAND DESIGN",
            imgg:`https://works.studio/assets/imager/images/the-xi/38084/xi-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg`
        }
    ]
    
    const line1 = document.querySelector("#line3");
    
    
    
        images.forEach(function(item) {
            var imgCont = document.createElement("div");
            imgCont.setAttribute("id" , "img-cont")
    
            imgCont.innerHTML = `
                <div class="overlay">
                    <p>${item.title}</p>
                </div>
                <img src="${item.imgg}" alt="${item.title}">
            `;
    
            line1.appendChild(imgCont);
        });
} PageLine3();







