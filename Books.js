let books = [
    {
        id : 1 ,
        name : "كتاب اساسيات برنامج ’Microsoft Access 2003" ,
        desc : "A practical guide to cultivating positivity and resilience in daily life." ,
        pageCount : "200" ,
        Author : "Ali" ,
        img : "33333.jpg" ,
         pdf : "book/كتاب اساسيات برنامج ’Microsoft Access 2003.pdf"
    },
    {
        id : 2 ,
        name : "1000 سوال وجواب في الشبكات" ,
        desc : "A practical guide to cultivating positivity and resilience in daily life." ,
    
        pageCount : "14" ,
        Author : "راشد صلاح  الدين " ,
        img : "33333.jpg" ,
          pdf : "was.pdf"
    },
    {
        id : 3 ,
        name : "لغة الاستعلام المهيكل ( sql & sql  plus )" ,
        desc : "" ,
        pageCount : "107" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/لغة الاستعلام المهيكل ( sql & sql  plus ).pdf"
    },
    {
        id : 4 ,
        name : "1816تعلم Office 2007" ,
        desc : "" ,
        pageCount : "109" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/1816تعلم Office 2007.pdf"
    },
    {
        id : 5 ,
        name : "أساسيات الشبكات" ,
        desc : "" ,
        pageCount : "166" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/أساسيات الشبكات.pdf"
    },
    {
        id : 6 ,
        name : "امن الشبكات وحمايتها" ,
        desc : "" ,
        pageCount : "109" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/امن الشبكات وحمايتها.pdf"
    },
    {
        id : 7 ,
        name : "تصميم ويب" ,
        desc : "" ,
        pageCount : "2" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/تصميم ويب.pdf"
    },
    {
        id : 8 ,
        name : "تعلم برمجة SOAP و WSDL" ,
        desc : "" ,
        pageCount : "23" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/تعلم برمجة SOAP و WSDL.pdf"
    },
    {
        id : 9 ,
        name : "تعلم برمجه RAT بلا Delphi" ,
        desc : "" ,
        pageCount : "22" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/تعلم برمجة الـ Remote Admin tool بالدلفي.pdf"
    },
    {
        id : 10 ,
        name : "خدمات ويب Web Services" ,
        desc : "" ,
        pageCount : "16" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/خدمات ويب Web Services.pdf"
    },
    {
        id : 11 ,
        name : "دورة كاملة في الشبكات CCDA " ,
        desc : "" ,
        pageCount : "88" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/دورة كاملة في الشبكات CCDA.pdf"
    },
    {
        id : 12 ,
        name : "كتاب شامل في الشبكات" ,
        desc : "" ,
        pageCount : "198" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/كتاب شامل في الشبكات.pdf"
    },
    {
        id : 13 ,
        name : "كيفية تصميم موقع مجاني من البداية حتى النهاية" ,
        desc : "" ,
        pageCount : "" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/كيفية تصميم موقع مجاني من البداية حتى النهاية.pdf"
    },
    {
        id : 14,
        name : "كيفية برمجة Web Service SOAP بالدلفي و PHP" ,
        desc : "" ,
        pageCount : "" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/كيفية برمجة Web Service SOAP بالدلفي و PHP.pdf"
    },
    {
        id : 15 ,
        name : "سلسلة تعليم شبكات الويرلس" ,
        desc : "" ,
        pageCount : "" ,
        Author : "" ,
        img : "33333.jpg" ,
        pdf : "book/سلسلة تعليم شبكات الويرلس.pdf"
    },
    {
        id : 16 ,
        name : "محاضره دكتوره نجلاء " ,
        desc : "نيتورك" ,
        pageCount : "108" ,
        Author : "د/نجلاء" ,
        img : "33333.jpg" ,
        pdf : "book/security.pptx"
    },
    {
        id : 10 ,
        name : "الصيانه البرمجية للحاسوب" ,
        desc :"هذا الكتاب من تاليف وإعداد المهندس أكر " ,
      pageCount : "" ,
        Author : "" ,
        img : "2222.jpg" ,
        pdf : "book/95wDGc_1732413558.pdf"
    },
]


let DrawBooksUI = books.map((book) => {
    return `
            <div class="book">
                    <div class="img">
                        <img src="images/${book.img}" alt="">
                    </div>
                    <div class="data">
                        <h1>${book.name}</h1>
                        <p>${book.desc}</p>
                        <p>Author : ${book.Author}</p>
                        <p>Pages Count : ${book.pageCount}</p>
                        <button><a href="${book.pdf}">Download</a></button>
                    </div>
             </div>
    `
})

let user = document.querySelector(".user");
let logLink = document.querySelector(".logLink");

let booksLink = document.querySelector(".booksLink");
let booksSec = document.querySelector(".bookSec");
booksLink.onclick = (e) => {
    e.preventDefault()
    booksSec.style.transform = "translateX(0)"
    if (localStorage.getItem("Name")) {
        booksSec.innerHTML += DrawBooksUI;
        user.style.display = "block";
        logLink.style.display = "none";
    }else {
        booksSec.style.height = '100vh';
        document.querySelector("body").style.overflow = 'hidden';
        booksSec.innerHTML = `<p class= "booksError" > Please Login <a href="login.html"> Login </a> </p>`;
    }
}


    if (localStorage.getItem("Name")) {
        user.style.display = "block";
        logLink.style.display = "none";

        document.querySelector(".username").innerHTML = localStorage.getItem("Name")
    }

    let logout = document.querySelector(".logout");
    logout.onclick = () => {
        localStorage.clear()
        window.onload = () => {

        }
    }



    
    // document.querySelector("main").addEventListener("scroll" , () => {
    //     if (scrollY > 300) {
    //         document.querySelector("header").style.backgroundColor = "#fff";
    //     }
    // })




let sear = document.querySelector("#sear");

sear.onkeyup = (e) => {
    e.preventDefault();
    let text = sear.value;
    console.log(text , booksSec);
    
    let filtered = books.filter((book) => book.name.startsWith(text));
    let DrawBooksUI = filtered.map((book) => {
        return `
                <div class="book">
                        <div class="img">
                            <img src="images/${book.img}" alt="">
                        </div>
                        <div class="data">
                            <h1>${book.name}</h1>
                            <p>${book.desc}</p>
                            <p>Author : ${book.Author}</p>
                            <p>Pages Count : ${book.pageCount}</p>
                            <button><a href="${book.pdf}">Download</a></button>
                        </div>
                 </div>
        `
    })
    booksSec.innerHTML = `
    <h1 style = "display : block ; text-align = center; font-size : 40px ;"> Filter Books </h1> <br>
    ${DrawBooksUI}
    ` ;
    booksSec.style.transform = "translateX(0)";
    booksSec.style.bottom = "0";
    booksSec.style.height = "100vh";
}