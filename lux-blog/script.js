async function carregarPosts() {
  try {
    const resposta = await fetch("posts.json");
    const posts = await resposta.json();

    const container = document.getElementById("posts");

    posts.forEach(post => {
      const artigo = document.createElement("article");

      artigo.innerHTML = `
        <h2>${post.titulo}</h2>
        <small>Publicado em ${post.data}</small>
        <p>${post.conteudo}</p>
        <a href="${post.link}">Ler mais</a>
      `;

      container.appendChild(artigo);
    });
  } catch (erro) {
    console.error("Erro ao carregar posts:", erro);
  }
}

document.addEventListener("DOMContentLoaded", carregarPosts);