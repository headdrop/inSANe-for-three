function firstWordclass() {
  document.querySelectorAll(".title>h2").forEach((title)=>{
    const originalText = title.innerText;
    const splitText = originalText.split(" ");
    if (splitText.length > 1) {
      title.innerHTML = "<span class='first-word'>" + splitText[0] + "</span>&#32;" + originalText
      .substring(originalText.indexOf(" ") + 1);
    } else {
      title.innerHTML = "<span class='first-word'>" + originalText
      [0]+ "</span>"+originalText
      .substring(1);
    }
  });
}
function category(e) {
  if(e.target.checked) {
  const tg = e.target;
  if (tg.id == "all") {
    // 카테고리 전체 선택
    document.querySelectorAll(".gallery-item").forEach((item)=>{
      item.classList.remove("hide");
    });
  } else if (tg.id[0]) {
    const cycleNum=tg.id[0];
    document.querySelectorAll(".gallery-item").forEach((item)=>{
      if (item.querySelector("a").getAttribute("data-num")[0]==cycleNum) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  }

  } else { return;}
}

function scroll () {
  // 등장액션 대상:
  const showBox = document.querySelectorAll(".card-item");
  // 화면높이값
  var screenH = window.innerHeight ;
  
  // 등장액션 대상 위치값 리턴함수
  const retVal = ele => ele.getBoundingClientRect().top;
  const botVal = ele => ele.getBoundingClientRect().bottom;

  // 클래스 넣기 함수
  const showTit = ele => {
    const cd = ele.querySelector(".card");
    const ct = ele.querySelector(".content");
    // const gal = document.querySelector("#gallery");
    // const ft = document.querySelector("#footer");
    // let cardtop = retVal(cd);
    // let cardbottom = botVal(cd);
    let boxtop = retVal(ele);
    let boxbottom = botVal(ele);
    // let contenttop = retVal(ct);
    // let contentbottom = botVal(ct);
    // if (bval < screenH && bval > 0) {
    if (ele.id==="menu") {
      console.log(boxtop);
      if (boxtop <= 0) {
        ele.classList.add("on");
      } else {
        ele.classList.remove("on");
      }
    } else { // menu 아닐 때
      if (boxbottom < screenH && boxbottom > 0) {
        ele.classList.add("on");
      }
      else  {
        ele.classList.remove("on");
      }
    }
  };
  window.addEventListener("scroll", () => {
    // 스크롤 등장요소 개수만큼 for문 돌리기
    for (let x of showBox) showTit(x);
    showTit(document.getElementById("menu"));
  });
}
// BGM
function bgm () {
  const bgm = document.querySelector("#bgm>audio");
  const btn = document.querySelector("#bgmbtn");
  if(bgm.paused) {
    btn.className="fa-solid fa-circle-pause";
    bgm.play();
  } else {
    btn.className="fa-solid fa-circle-play";
    bgm.pause();
  }
}


function eventRun() {
  // category
  document.querySelectorAll("#category input").forEach((input)=>{
    input.addEventListener("change", category);
  });
}

// RUN 
firstWordclass();
scroll();
eventRun();
