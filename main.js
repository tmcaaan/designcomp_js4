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


/*=================================================
  PICK UP（横スクロール自動ループ）
==================================================*/

// 変数宣言
// 横スクロールの要素
const pickUp = document.querySelector(".pick-img");

// 自動スクロールの間隔（ミリ秒）
const intervalTime = 3000;

// スクロール量
const scrollAmount = 450;

// 自動スクロール処理
function autoScroll() {

  // 端まで行ったら最初に戻す
  if (pickUp.scrollLeft + pickUp.clientWidth >= pickUp.scrollWidth) {
    pickUp.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    // それ以外は右に流す
    pickUp.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  }
}

// 繰り返し実行
setInterval(autoScroll, intervalTime);