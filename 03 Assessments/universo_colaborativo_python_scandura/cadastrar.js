const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  var input_autor = document.getElementById("autor").value;
  var input_cidade = document.getElementById("cidade").value;
  var input_estado = document.getElementById("estado").value;
  var input_titulo = document.getElementById("titulo").value;
  var input_email = document.getElementById("email").value;
  var input_descricao = document.getElementById("descricao").value;

  event.preventDefault();

  axios
    .post("http://127.0.0.1:5000/post", {
      autor: input_autor,
      cidade: input_cidade,
      estado: input_estado,
      email: input_email,
      titulo: input_titulo,
      descricao: input_descricao,
    })
    .then(function (response) {
      console.log(response);
      console.table(response.data);
      alert("Parabéns você conseguiu fazer uma postagem");
      clear()
    })
    .catch(function (error) {
      console.error(error);
      alert(
        "Ouve algum erro com sua tentativa de postagem, confira as informações e tente novamente"
      );
    });
});

function clear() {
  document.getElementById("autor").value = "teste";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
  document.getElementById("titulo").value = "";
  document.getElementById("email").value = "";
  document.getElementById("descricao").value = "";
}
