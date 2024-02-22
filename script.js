const feedbacksDiv = document.querySelector('.feedback')
const containerPoint = document.querySelector('#container-point')
let currentIndex = 0;
let intervalId;

const feedbacks = [
  {
    name: "Laiane Rodrigues",
    info: "Cliente",
    link: "",
    text: "Minha experiência com o convite personalizado foi maravilhosa, tendo em vista que a maioria dos meus convidados eram de cidades diferentes da minha. Esse tipo de convite facilitou a distribuição e me ofereceu bastante praticidade para a organização do casamento. Além disso, todo o desing foi exatamente como sempre sonhei e Laís,  sempre muito atenciosa, deixou todos os detalhes  perfeitos. Amei demais e super recomendo a experiência."
  },
  // {
  //   name: "Laiane Rodrigues",
  //   info: "Cliente",
  //   link: "",
  //   text: "Laís, eu amei o convite! Atendeu as minhas expectativas, ficou bem funcional, prático e muito lindo 😍. Atendimento excelente, obrigada pela paciência <3"
  // },
  {
    name: "Bruna França",
    info: "Cliente",
    link: "",
    text: "Laís, eu amei o convite! Atendeu as minhas expectativas, ficou bem funcional, prático e muito lindo 😍. Atendimento excelente, obrigada pela paciência <3"
  },
  {
    name: "Erivonaldo Silva",
    info: "Cliente",
    link: "",
    text: "Ficou excelente, bonito e prático, gostei muito do controle de convidados e envio das senhas. Parabéns pelo excelente trabalho Laís."
  },
  {
    name: "Alexandre Machado",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "Ficou incrível! Parabéns!!! Como sempre vc se destaca tbm pelo ótimo design 👏👏👏"
  },
  {
    name: "Marcos Hamilton Santos",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "Parabéns, muito legal como sempre!"
  },
  {
    name: "Claudia Uhr",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "Que trabalho lindo Lais Rodrigues"
  },
  {
    name: "Flávia Santos",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "Ficou incrível!!! Parabéns Lais Rodrigues !!!"
  },
  {
    name: "Willian Menezes",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "parabeens Lais, gostei dms"
  },
  {
    name: "Pedro Maia Filho",
    info: "Comentou pelo LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7110318668542001152/",
    text: "Caraca, ficou muito bacana! Parabéns Laís"
  }
]

const updateFeedback = () => {
  feedbacksDiv.innerHTML = `
    <div>
      <img/>
      <span>
      <h3>${feedbacks[currentIndex].name}</h3>
      <a href="${feedbacks[currentIndex].link}" target="_blank"><h4>${feedbacks[currentIndex].info}</h4></a>
      </span>
    </div>
    <p>${feedbacks[currentIndex].text}</p>
  `

  containerPoint.innerHTML = ''
  for (const i in feedbacks) {
    if (i == currentIndex) {
      containerPoint.innerHTML += `<div><span class="currentPoint"></span></div>`
    } else {
      containerPoint.innerHTML += `<div><span class="othersPoints"></span></div>`
    }
  }

  startInterval();
}

updateFeedback()

function nextSlide() {
  currentIndex = (currentIndex + 1) % feedbacks.length;
  updateFeedback();
}

function startInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 8000);
}

startInterval();

let touchStartX = 0;
let touchEndX = 0;
let currentPosition = 0;

feedbacksDiv.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});
feedbacksDiv.addEventListener('touchmove', (event) => {
  touchEndX = event.touches[0].clientX;
});
feedbacksDiv.addEventListener('touchend', () => {
  if (touchStartX < touchEndX && touchEndX - touchStartX > 50) {
    currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
  } else if (touchStartX > touchEndX && touchStartX - touchEndX > 50) {
    currentIndex = (currentIndex + 1) % feedbacks.length;
  }
  updateFeedback()
  touchStartX = 0;
  touchEndX = 0;
});

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
