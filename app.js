homePage = document.getElementsByClassName("homePage");

for (i = 0; i < homePage.length; i++) {
  homePage[i].onclick = function () {
    location.href = "./index.html";
  };
}

rekomPage = document.getElementsByClassName("rekomPage");

for (i = 0; i < rekomPage.length; i++) {
  rekomPage[i].onclick = function () {
    location.href = "./rekomPage.html";
  };
}

jenisPage = document.getElementsByClassName("jenisPage");

for (i = 0; i < jenisPage.length; i++) {
  jenisPage[i].onclick = function () {
    location.href = "./jenisPage.html";
  };
}

tipsPage = document.getElementsByClassName("tipsPage");

for (i = 0; i < tipsPage.length; i++) {
  tipsPage[i].onclick = function () {
    location.href = "./tipsPage.html";
  };
}

tentangKami = document.getElementsByClassName("tentangKami");

for (i = 0; i < tentangKami.length; i++) {
  tentangKami[i].onclick = function () {
    location.href = "./tentangKami.html";
  };
}
