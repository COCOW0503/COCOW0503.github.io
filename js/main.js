window.onload = function () {
    resizeFunction()
    let windowHeight = document.documentElement.clientHeight,
        bg = document.querySelector(".bg"),
        newMessage = document.querySelector(".newMessage"),
        modalMessageTop = document.querySelector(".top"),
        modalMessageBottom = document.querySelector(".bottom"),
        container2 = document.querySelector(".container2"),
        container4 = document.querySelector(".container4")
    // container
    let modal1Tip = document.querySelector(".modal1Tip"),
        modal1 = document.querySelector(".modal1"),
        modal2 = document.querySelector(".modal2")

    modal1Tip.onclick = function () {
        bg.style.display = "block"
        modal1.style.display = "block"
    }
    modal1.onclick = function () {
        modal1.style.display = "none"
        bg.style.display = "none"
    }

    bg.onclick = function () {
        bg.style.display = "none"
        modal1.style.display = "none"
        modal2.style.display = "none"
        container1_2_madal.style.display = "none"
        container1_2_madal_video.style.display = "none"
        modalMessageTop.style.display = "none"
        modalMessageBottom.style.display = "none"
    }

    modal2.onclick = function () {
        modal2.style.display = "none"
        bg.style.display = "none"
    }

    newMessage.onclick = function () {
        let index = 0
        if (modalMessageTop.style.display == "none" || modalMessageTop.style.display == "") {
            modalMessageTop.style.display = "block"
            modalMessageBottom.style.display = "block"
            bg.style.display = "block"
            if (container1.style.display == "block") index = 0
            if (container2.style.display == "block") index = 1
            if (container4.style.display == "block") index = 2
            newMessageListText(index)
        } else {
            modalMessageTop.style.display = "none"
            modalMessageBottom.style.display = "none"
        }
    }


    let newMessageList = [{
        img1: "",
        desc1: "“Music and cinema fit together naturally. Because there’s a kind of intrinsic musicality to the way moving images work when they’re put together. It’s been said that cinema and music are very close as art forms, and I think that’s true.” – Martin Scorsese",
        img2: "images/book.png",
        desc2: "Did you know that alfred Hitchcock originallyintended for the iconic 'shower scene' inPsycho' (1960) to have no music? ComposerBernard Herrmann persuaded him to include thechilling, high-pitched wiolin screeches, whichtransformed the scene and influenced thesound design of countless suspenseful films"
    }, {
        img1: "",
        desc1: "“Cinema is an old whore, like circus and variety, who knows how to give many kinds of pleasure.” – Federico Fellini",
        img2: "images/book.png",
        desc2: "As you explore these Silver Screen anctuariestake a moment to reflect on the enduring impactof cinema and the waus in which thesehallowed halls continue to shape our collective conscloushess."
    }, {
        img1: "",
        desc1: "“Cinema should make you forget you are sitting in a theater.” – Roman Polanski",
        img2: "images/book.png",
        desc2: "Many Free Cinema films were made on shoestring budgets, using handheld cameras and non-professional actors, showcasing the movement's focus on authenticity"
    }]
    function newMessageListText(index) {
        let topText = document.querySelector(".topText")
        let _p1 = document.createElement("p")
        topText.innerHTML = ""
        _p1.innerHTML = newMessageList[index].desc1
        topText.appendChild(_p1)

        let bottomText = document.querySelector(".bottomText")
        let _p2 = document.createElement("p"),
            _img2 = document.createElement("img")
        bottomText.innerHTML = ""
        _img2.src = newMessageList[index].img2
        _p2.innerHTML = newMessageList[index].desc2
        bottomText.appendChild(_img2)
        bottomText.appendChild(_p2)

    }

    let container1 = document.querySelector(".container1")
    // container1
    let audionstalga = document.querySelector(".audionstalga"),
        audioClass = document.querySelector(".audioClass"),
        audionstalga_page = document.querySelector(".audionstalga-page p"),
        container = document.querySelector(".container"),
        container1_1 = document.querySelector(".container1-1"),
        container1_2 = document.querySelector(".container1-2")
    container1.style.height = windowHeight * 2 + "px"
    container1_1.style.height = windowHeight + "px"
    container1_2.style.height = windowHeight + "px"
    audionstalga.onclick = audioFunction
    audioClass.onclick = audioFunction

    function audioFunction() {
        container.style.display = "none"
        container1.style.display = "block"
        container2.style.display = "none"
        container4.style.display = "none"
        audionstalga_page.style.animation = "opacityFade 6s ease-in-out"
        newMessage.style.display = "block"
    }


    let containerRight = document.querySelectorAll(".container-right")
    for (let i = 0; i < containerRight.length; i++) {
        containerRight[i].onclick = function () {
            container.style.display = "block"
            container1.style.display = "none"
            container2.style.display = "none"
        }
    }

    let container1_2_item = document.querySelector(".container1_2_item"),
        container1_2_madal = document.querySelector(".container1_2_madal")
    container1_2_item.onclick = function () {
        container1_2_madal.style.display = "block"
        bg.style.display = "block"
    }

    let container1_2_madal_item = document.querySelectorAll(".container1_2_madal_item"),
        container1_2_madal_video = document.querySelector(".container1_2_madal_video"),
        close = document.getElementById("close")

    // video
    let videoArray = [{
        id: 1,
        name: "A Night At The Movies",
        path: "../video/A Night At The Movies.mp3"
    },
    {
        id: 2,
        name: "Dancing in the Moonlight (Original Recording)",
        path: "../video/Dancing in the Moonlight (Original Recording) - King Harvest.mp3",
    },
    {
        id: 3,
        name: "Golden Age Dreams (2006 Remaster)",
        path: "../video/Golden Age Dreams (2006 Remaster).mp3",
    },
    {
        id: 4,
        name: "Stereo Space Odyssey",
        path: "../video/Stereo Space Odyssey.mp3"
    }]
    //创建音频播放器对象
    var player = document.getElementById('audio'),
        playBtn = document.getElementById("play-btn"),
        pauseBtn = document.getElementById("pause-btn"),
        playLeft = document.getElementById("play-left"),
        playRight = document.getElementById("play-right");
    //设置当前正在播放的歌曲的索引
    var currentIndex = 0;
    //声明一个标记，记录歌曲的播放状态
    var isplay = false;
    for (let i = 0; i < container1_2_madal_item.length; i++) {
        container1_2_madal_item[i].onclick = function () {
            let dataId = this.getAttribute("data-id")
            currentIndex = dataId
            playSrc()
            player.play()
            isplay = true
            container1_2_madal.style.display = "none"
            container1_2_madal_video.style.display = "block"
            bg.style.display = "block"
        }
    }
    close.onclick = function () {
        container1_2_madal_video.style.display = "none"
        bg.style.display = "none"
        player.pause()
        isplay = false
    }

    function playSrc() {
        player.setAttribute("src", videoArray[currentIndex].path)
    }

    playBtn.onclick = function () {
        player.play()
        isplay = true
    }

    pauseBtn.onclick = function () {
        player.pause()
        isplay = false
    }

    playLeft.onclick = function () {
        currentIndex--
        isplay = false
        if (currentIndex == -1) currentIndex = 3
        if (currentIndex == 4) currentIndex = 0
        playSrc()
        if (isplay) {
            player.pause()
            isplay = false
        } else {
            player.play()
            isplay = true
        }
    }

    playRight.onclick = function () {
        currentIndex++
        isplay = false
        if (currentIndex == -1) currentIndex = 3
        if (currentIndex == 4) currentIndex = 0
        playSrc()
        if (isplay) {
            player.pause()
            isplay = false
        } else {
            player.play()
            isplay = true
        }
    }

    //为列表项触发点击事件
    var trs = document.querySelectorAll('.music-item');
    for (var i = 0; i < trs.length; i++) {
        trs[i].addEventListener('click', function () {
            //清除状态
            clearstatus();
            var index = this.dataset.index;
            //记录当前播放的歌曲索引
            currentIndex = index;
            //获取需要播放的对象
            var m = musics[index];
            //设置播放源
            player.src = m.path;
            startPlay();
        })
    }

    // container2
    let timelessthetres = document.querySelector(".timelessthetres"),
        theatres = document.querySelector(".theatres"),
        timelessthetres_page = document.querySelector(".timelessthetres-page p"),
        container2_1 = document.querySelector(".container2-1"),
        container2_2 = document.querySelector(".container2-2"),
        container3 = document.querySelector(".container3")
    container2.style.height = windowHeight * 2 + "px"
    container2_1.style.height = windowHeight + "px"
    container2_2.style.height = windowHeight + "px"
    timelessthetres.onclick = theatresFunction
    theatres.onclick = theatresFunction

    function theatresFunction() {
        container.style.display = "none"
        container1.style.display = "none"
        container2.style.display = "block"
        container4.style.display = "none"
        timelessthetres_page.style.animation = "opacityFade 6s ease-in-out"
        newMessage.style.display = "block"
    }

    let container2_2_item = document.querySelector(".container2_2_item"),
        container2_2Modal = document.querySelector(".container2-2-modal")

    container2_2_item.onclick = function () {
        container2_2Modal.style.display = "block"
        bg.style.display = "block"
    }

    let container2_2ModalItem = document.querySelectorAll(".container2-2-modal-item")
    for (let i = 0; i < container2_2ModalItem.length; i++) {
        container2_2ModalItem[i].onclick = function () {
            container2.style.display = "none"
            container2_2Modal.style.display = "none"
            bg.style.display = "none"
            let dataName = this.getAttribute("data-name")
            container3.style.display = "flex"
            if (dataName == 'theastortheatre') {
                document.querySelector(".theastortheatre").style.display = "block"
            } else if (dataName == 'legrandrex') {
                document.querySelector(".legrandrex").style.display = "block"
            } else if (dataName == 'odeonleicestersquare') {
                document.querySelector(".odeonleicestersquare").style.display = "block"
            } else if (dataName == 'graumanchinesetheatre') {
                document.querySelector(".graumanchinesetheatre").style.display = "block"
            }
        }
    }

    // container3
    let back = document.querySelector(".back"),
        container3Item = document.querySelectorAll(".container3-item")
    back.onclick = function () {
        for (let i = 0; i < container3Item.length; i++) {
            container3Item[i].style.display = "none"
        }
        container3.style.display = "none"
        container2.style.display = "block"
    }

    // container4
    let cimaticrevolution = document.querySelector(".cimaticrevolution"),
        revolution = document.querySelector(".revolution"),
        cimaticrevolution_page = document.querySelector(".cimaticrevolution-page p"),
        container4_1 = document.querySelector(".container4-1"),
        container4_2 = document.querySelector(".container4-2")
    container4.style.height = windowHeight * 2 + "px"
    container4_1.style.height = windowHeight + "px"
    container4_2.style.height = windowHeight + "px"
    cimaticrevolution.onclick = revolutionFunction
    revolution.onclick = revolutionFunction

    function revolutionFunction() {
        container.style.display = "none"
        container4.style.display = "block"
        container1.style.display = "none"
        container2.style.display = "none"
        cimaticrevolution_page.style.animation = "opacityFade 6s ease-in-out"
        newMessage.style.display = "block"
    }

    let container4_2Btn = document.querySelector(".container4-2-btn"),
        container5 = document.querySelector(".container5")
    container4_2Btn.onclick = function () {
        container.style.display = "none"
        container4.style.display = "none"
        container5.style.display = "block"
    }

    // container5
    let index = 0
    let list = [
        {
            id: 0,
            question: "What was the primary country where the Free Cinema movement emerged in the 1950s?",
            option: [
                { id: 1, text: "United States" },
                { id: 2, text: "France" },
                { id: 3, text: "United Kingdom" },
                { id: 4, text: "Italy" }
            ],
            answer: 3
        },
        {
            id: 1,
            question: "Which of the following best describes a key principle of the Free Cinema movement?",
            option: [
                { id: 1, text: "Emphasis on big-budget productions" },
                { id: 2, text: "Focus on star-studded casts" },
                { id: 3, text: "Authenticity and raw storytelling" },
                { id: 4, text: "Strict adherence to traditional filmmaking techniques" }
            ],
            answer: 3
        },
        {
            id: 2,
            question: "Which of the following was NOT a common characteristic of Free Cinema films?",
            option: [
                { id: 1, text: "Use of non-professional actors" },
                { id: 2, text: "Handheld camera work" },
                { id: 3, text: "Elaborate set designs" },
                { id: 4, text: "Shoestring budgets" }
            ],
            answer: 3
        },
        {
            id: 3,
            question: "The Free Cinema movement influenced which other film movement?",
            option: [
                { id: 1, text: "German Expressionism" },
                { id: 2, text: "Italian Neorealism" },
                { id: 3, text: "French New Wave" },
                { id: 4, text: "Hollywood Golden Age" }
            ],
            answer: 3
        },
        {
            id: 4,
            question: "Which Free Cinema pioneer was also a co-founder of the British Film Institute's production board?",
            option: [
                { id: 1, text: "Lindsay Anderson" },
                { id: 2, text: "Karel Reisz" },
                { id: 3, text: "Tony Richardson" },
                { id: 4, text: "Richard Lester" }
            ],
            answer: 2
        }
    ]
    let desc_1 = document.querySelector(".desc_1"),
        desc_2 = document.querySelector(".desc_2"),
        desc_3 = document.querySelector(".desc_3"),
        opt = document.querySelector(".opt"),
        show = document.querySelector(".show"),
        success = document.querySelector(".success"),
        imgs = document.querySelector(".imgs"),
        successImgs = document.querySelector(".success-imgs"),
        errorImgs = document.querySelector(".error-imgs")
    boxText()
    boxOptionText(list[index].option)
    function boxText() {
        desc_1.innerHTML = `Question ${index + 1}:`
        desc_2.innerHTML = list[index].question
    }
    function boxCorrectText(text) {
        desc_3.innerHTML = `Correct answer: ${text}`
    }
    function boxOptionText(arr) {
        opt.innerHTML = ""
        for (let i = 0; i < arr.length; i++) {
            let _li = document.createElement("li")
            _li.setAttribute("data-id", `${arr[i].id}`)
            _li.onclick = function () {
                let id = this.getAttribute("data-id"), status = false
                opt.innerHTML = ""
                imgs.style.display = "block"
                if (id != list[index].answer) {
                    status = false
                    boxCorrectText(list[index].option[list[index].answer - 1].text)
                    successImgs.style.display = "none"
                    errorImgs.style.display = "block"
                } else {
                    status = true
                    success.style.display = "block"
                    show.style.display = "none"
                    successImgs.style.display = "block"
                    errorImgs.style.display = "none"
                }
                setTimeout(function () {
                    if (status) {
                        index++
                        if (index == 5) {
                            container5.style.display = "none"
                            container4.style.display = "block"
                            index = 0
                            boxText()
                            boxOptionText(list[index].option)
                            show.style.display = "block"
                            success.style.display = "none"
                            imgs.style.display = "none"
                            return
                        }
                        show.style.display = "block"
                    } else {
                        desc_3.innerHTML = ""
                    }
                    boxText()
                    boxOptionText(list[index].option)
                    success.style.display = "none"
                    imgs.style.display = "none"
                }, 1000)
            }
            let _img = document.createElement("img")
            _img.setAttribute("src", `images/f${i + 1}.png`)
            let _span = document.createElement("span")
            _span.innerHTML = `${arr[i].text}`
            _li.appendChild(_img)
            _li.appendChild(_span)
            opt.appendChild(_li)
        }
    }


    // 拖拽
    //获取每个要用到的元素
    var ali = document.getElementsByTagName("li")
    var oDiv = document.getElementById("out")
    var targetLi = null
    //给每个li绑定拖拽事件
    for (var i = 0; i < ali.length; i++) {
        ali[i].ondragstart = function (ev) {
            this.style.background = "rgba(0,0,0,0.2)"
            targetLi = this
            //定义拖拽的数据类型(文本)
            ev.dataTransfer.setData("text", this.innerHTML)
        }
        //拖拽li事件 拖拽时将li的背景色清空
        ali[i].ondragend = function () {
            this.style.background = ""
        }
    }
    oDiv.ondragenter = function () {
    }
    //阻止禁止投放的默认事件 重点
    oDiv.ondragover = function (ev) {
        ev.preventDefault()
    }
    oDiv.ondragleave = function () {
    }
    //投放事件
    oDiv.ondrop = function (ev) {
        bg.style.display = "block"
        modal2.style.display = "block"
        //targetLi=this,当前li的父级ul的孩子，找到当前li，删除
        targetLi.parentNode.removeChild(targetLi)
    }
}

window.addEventListener("resize", resizeFunction())

function resizeFunction() {
    let w_h = document.body.clientHeight
    let mainDom = document.querySelector("main")
    mainDom.style.height = w_h - 74 - 57 + "px"
}