let feedbacksClass = document.querySelector('.feedbacks')
// console.log(feedbacks)
let feedbacks = [
  {
    id: 2,
    name: "Alexandre Machado",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "Ficou incrível! Parabéns!!!"
  },
  {
    id: 3,
    name: "Marcos Hamilton Santos",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "Parabéns, muito legal como sempre!"
  },
  {
    id: 4,
    name: "Claudia Uhr",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "Que trabalho lindo Lais Rodrigues"
  },
  {
    id: 5,
    name: "Mariana Negrão Trancoso",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "Que lindooo!!!!!"
  },
  {
    id: 6,
    name: "Willian Menezes",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "parabeens Lais, gostei dms"
  },
  {
    id: 7,
    name: "Carlos Bergson Louzada",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "Uau, ficou sensacional haha <3"
  },
  {
    id: 1,
    name: "Laiane Rodrigues",
    info: "Cliente",
    link: "",
    text: "Minha experiência com o convite personalizado foi maravilhosa, tendo em vista que a maioria dos meus convidados eram de cidades diferentes da minha. Esse tipo de convite facilitou a distribuição e me ofereceu bastante praticidade para a organização do casamento. Além disso, todo o desing foi exatamente como sempre sonhei e Laís,  sempre muito atenciosa, deixou todos os detalhes  perfeitos. Amei demais e super recomendo a experiência."
  }
]

const showFeedback = () => {
  feedbacks.map((item) => {
    feedbacksClass.innerHTML = `
      <div>
        <img/>
        <span>
        <h3>${item.name}</h3>
        <a href="${item.link}" target="_blank"><h4>${item.info}</h4></a>
        </span>
      </div>
      <p>${item.text}</p>
    `
  })
}

showFeedback()

// Localize o contêiner HTML
var animationContainer = document.getElementById('lottie-animation');

// Carregue a animação
var anim = lottie.loadAnimation({
  container: animationContainer, // Contêiner HTML
  renderer: 'svg', // Renderizador SVG
  loop: false, // Repetição da animação
  autoplay: true, // Iniciar a animação automaticamente
  path: './lottie.json' // Caminho para o arquivo JSON da animação do Lottie
});
