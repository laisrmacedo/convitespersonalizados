let feedbacksClass = document.querySelector('.feedbacks')
// console.log(feedbacks)
let feedbacks = [
  {
    id: 1,
    name: "Laiane Rodrigues",
    info: "Cliente",
    link: "",
    text: "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real."
  },
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