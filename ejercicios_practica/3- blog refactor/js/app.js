"use strict";

/* Nueva forma de recorrer todos los posts y agregar la funcionalidad
  de mostrar/ocultar
*/
/* let accumulator = ""
for(const post of data){

  accumulator += `
  <article class="post">
    <div class="post-header">
      <img
      src= "${post.avatar}"
        class="icon-avatar"
        alt="avatar icon"
        width="75"
      />
      <h2>${post.titulo}</h2>
    </div>
    <div>
      <p>
        ${post.texto}
      </p>
    </div>
  </article>
  `
}; */


// innerHTML reemplaza todo el contenido HTML de ese elemento,
// todos los hijos, por lo que si habia código HTML se perderá
// y reemplazará por el nuevo.
// Es recomendable no invocar innerHTML muchas veces ya que
// no es muy performante


let Post = [];
for(const postInfo of data){
    Post.push(new postData(
        postInfo.titulo,
        postInfo.avatar,
        postInfo.texto)
    )
};

let accumulator ="";
for(const postData of Post){
    accumulator += postData.render();
};

const section = document.querySelector("section");
section.innerHTML = accumulator;
addPostsEvents();