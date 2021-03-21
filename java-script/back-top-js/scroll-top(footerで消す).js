// バックトップ
//スクロール量を取得する
 function getScrolled() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : document.documentElement.scrollTop;
}
const topButton = document.getElementById("js-scroll");
const topButton2 = document.getElementById("js-scroll2");
window.onscroll = function () {
  getScrolled() > 200
    ? topButton.classList.add("is-fadein")
    : topButton.classList.remove("is-fadein");
};
//トップに移動
function scrollToTop() {
  const scrolled = getScrolled();
  window.scrollTo(0, Math.floor(scrolled / 2));
  if (scrolled > 0) {
    window.setTimeout(scrollToTop, 30);
  }
}
topButton.onclick = function () {
  scrollToTop();
};
topButton2.onclick = function () {
  scrollToTop();
};
// フッターで消す
window.addEventListener('scroll', () => {
  const scrollTop = document.querySelector('.scroll-top');
  const docHeight = document.body.clientHeight;
  const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollPos = document.documentElement.clientHeight + scrollCount;
  const footerHeight = document.querySelector('.footer').clientHeight;
  if (docHeight - scrollPos <= footerHeight) {
    scrollTop.style.position = 'absolute';    
  }
  else {
    scrollTop.style.position = 'fixed';
  }
});
