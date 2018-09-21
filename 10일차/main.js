class Blog {
    constructor() {
        this.setInitVariables();
        this.registerEvents();

        //화면 상태 변수
        this.state = "create";

        //찜 목록 변수
        this.likedSet = new Set();
    }

    //Blog 화면 받아오기
    setInitVariables() {
        this.blogList = document.querySelector(".blogList > ul");
    }

    //화면의 click event
    registerEvents() {
        const startBtn = document.querySelector("#start");
        const dataURL = "./data/data.json";

        startBtn.addEventListener("click", () => {
            // if (this.state === "stop")
            this.setInitData(dataURL);
        });

        this.blogList.addEventListener("click", ({ target }) => {
            const targetClassName = target.className;
            //classname이 like라면 찜하기 목록을 추가한다.

            if (targetClassName !== "like" && targetClassName !== "unlike") return;
            const postTitle = target.previousElementSibling.textContent;

            //찜 취소를 클릭한 경우에, 찜하기로 다시 변경하고, 찜목록을 제거하고
            //찜 목록뷰를 렌더링한다.

            if (targetClassName === "unlike") {
                target.className = "like";
                target.innerText = "찜하기";

                this.likedSet.delete(postTitle);
            } else {
                //찜목록에 추가.
                this.likedSet.add(postTitle);

                //찜 된 목록(div)의 클래스를 like에서 unlike로 변경하기
                target.className = "unlike";
                target.innerText = "찜취소";
            }

            //내 찜 목록 뷰에 추가.
            this.updateLikedList();
        });
    }

    updateLikedList() {
        const ul = document.querySelector(".like-list > ul");
        let likedSum = "";

        //li태그에 찜 리스트를 넣고 한번의 innerHTML을 사용한다.
        this.likedSet.forEach(v => {
            likedSum += `<li>${v}</li>`;
        });

        ul.innerHTML = likedSum;
    }


    setInitData(dataURL) {
        //여기 this가 왜 undefined?
        this.getData(dataURL, this.insertPosts.bind(this));
        //do suomething...
    }

    getData(dataURL, fn) {
        //데이터가 오면 callback받음
        const oReq = new XMLHttpRequest();

        oReq.addEventListener("load", () => {
            const list = JSON.parse(oReq.responseText).body;
            fn(list);
        });

        oReq.open('GET', dataURL);
        oReq.send();
    }

    insertPosts(list) {
        if (this.state === "create") {
            list.forEach(v => {
                // debugger;
                this.blogList.innerHTML += `
                        <li> 
                            <a href=${v.link}>${v.title}</a>
                            <div class="like">찜하기</div>
                        </li>
                        `;
                this.state = "stop";
            });
        } else if (this.state === "stop") {
            this.blogList.style = "display:none";
            this.state = "open";
        } else if (this.state === "open") {
            this.blogList.style = "display:block";
            this.state = "stop";
        }

    }
}

export default Blog;