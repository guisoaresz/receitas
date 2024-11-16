const conteudo = document.querySelector(".principal");
const voltaBtn = document.getElementById("voltar");
const ingredientes = document.querySelector(".ingredientes");
const passo = document.querySelector(".passo");
const img = document.querySelector(".imgReceita");
const titulo = document.querySelector(".tituloPrincipal");
const getUrl = document.URL;
const url = getUrl.split("#")[1];

voltaBtn.addEventListener("click", () => window.history.back());

fetch("./js/json/" + url + ".json")
    .then((res) => res.json())
    .then((json) => {
        titulo.innerHTML = json.titulo;
        img.src = json.imagem;

        json.preparo.forEach((item) => {
            let li = document.createElement('li');
            li.innerHTML = item;
            passo.append(li);
        });

        json.ingredientes.forEach((item) => {
            let li = document.createElement('li');
            li.innerHTML = item;
            ingredientes.append(li);
        });
                
    });
