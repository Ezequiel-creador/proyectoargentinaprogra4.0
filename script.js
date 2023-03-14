/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);



/*****color-background**
function backColor(){

 document.getElementsByClassName('.flex-container').style.backgroundColor ='#000';
 document.getElementById('acerca').style.color='#fff';

};****/
const nocturno=document.querySelector('#modo-nocturno');
nocturno.addEventListener('click', ()=> {
document.body.classList.toggle('nocturno');
nocturno.classList.toggle('active');
});