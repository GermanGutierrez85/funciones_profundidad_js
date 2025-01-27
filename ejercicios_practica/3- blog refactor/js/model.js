"use strict";

function postData(titulo, avatar, texto) {
    this.titulo = titulo;
    this.avatar = avatar;
    this.texto = texto;

    this.render = () => {
        return  `
        <article class="post">
          <div class="post-header">
            <img
            src= "${this.avatar}"
              class="icon-avatar"
              alt="avatar icon"
              width="75"
            />
            <h2>${this.titulo}</h2>
          </div>
          <div>
            <p>
              ${this.texto}
            </p>
          </div>
        </article>
        `
    };
}

/*for(const post of data){

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