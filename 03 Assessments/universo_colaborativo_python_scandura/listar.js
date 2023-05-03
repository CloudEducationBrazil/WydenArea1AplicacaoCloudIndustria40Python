axios
    .get("http://127.0.0.1:5000/posts")
    .then(function (response) {
      console.log(response);
      console.table(response.data.posts);
      var data = response.data.posts;

      const container = document.getElementById("container");
      data.forEach((usuario) => {
        const div = document.createElement("div");
        const destaque = document.createElement("div");
        const corpo = document.createElement("div");
        const titulo = document.createElement("h1");
        const descricao = document.createElement("h2");
        const autor = document.createElement("h3");
        const email = document.createElement("h3");
        const cidade = document.createElement("h3");
        const estado = document.createElement("h3");
        const data = document.createElement("h4");

        titulo.innerText = usuario.titulo;
        descricao.innerText = usuario.descricao;
        autor.innerText = `Autor: ${usuario.autor}`;
        estado.innerText = `Estado: ${usuario.estado}`;
        cidade.innerText = `Cidade: ${usuario.cidade}`;
        cidade.innerText = `Cidade: ${usuario.cidade}`;
        data.innerText = `Data da postagem: ${usuario.data_atual}`;
        email.innerText = `E-mail: ${usuario.email}`;

        div.appendChild(destaque);
        div.appendChild(corpo);
        destaque.appendChild(titulo);
        destaque.appendChild(descricao);
        destaque.appendChild(data)
        corpo.appendChild(autor);
        corpo.appendChild(email);
        corpo.appendChild(cidade);
        corpo.appendChild(estado);
        container.appendChild(div);

        destaque.classList.add('destaque')
        corpo.classList.add('corpo')
        div.classList.add('box')
      });
    })
    .catch(function (error) {
      console.error(error);
    });

