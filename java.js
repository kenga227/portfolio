window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("myBtn").style.display = "block"; } 
    else {
    document.getElementById("myBtn").style.display = "none"; }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; }