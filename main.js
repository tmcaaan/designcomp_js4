  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/

  // 変数宣言
  // ハンバーガーメニューの要素
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
  const navi = document.getElementById("hamburger-navigation");

  // ハンバーガーメニュー内の各セクションの要素
  const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");

  // ハンバーガーメニューをクリックした時の処理
  hamburgerMenu.addEventListener("click", function () {
    // toggleを使用することで、hamburgerクラスとhamburger-navigationIDに
    // activeクラスが存在する場合は削除、存在しない場合を追加する処理を自動で行ってくれる
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle('active');
  });

  // ハンバーガーメニュー内の各セクションをクリックした際、開いていたハンバーガーメニューを閉じる
  hamburgerMenuSections.forEach((hamburgerMenuSection) => {
    hamburgerMenuSection.addEventListener("click", function () {
      hamburgerMenu.classList.remove("active");
      navi.classList.remove("active");
    });
  });


/*=========================================
  PICK UP 自動中央スクロール
=========================================*/

// 横スクロールの要素
const pickUp = document.querySelector(".pick-img");

// 画像一覧を取得
const slides = pickUp.querySelectorAll("img");

// 自動スクロールの間隔
const intervalTime = 3000;

// 今どの画像か
let currentIndex = 0;

function autoScroll() {

  const slide = slides[currentIndex];

  // 画像を画面中央にする位置を計算
  const offset =
    slide.offsetLeft -
    (pickUp.clientWidth / 2 - slide.clientWidth / 2);

  pickUp.scrollTo({
    left: offset,
    behavior: "smooth"
  });

  currentIndex++;

  // 最後までいったら最初に戻す
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
}

setInterval(autoScroll, intervalTime);