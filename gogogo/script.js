function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const articles = [
  {
    title: "GOGOGO.PL PODBIJA ŚWIAT",
    url: "#1",
    content: "W niesamowitym tempie gogogo.pl zdobywa światowe rynki, przewyższając konkurencję!"
  },
  {
    title: "Jak GOGOGO.PL podbiło całą Polskę?",
    url: "#2",
    content: "W krótkim czasie gogogo.pl zdobyło serca Polaków. Dowiedz się jak to się stało!"
  },
  {
    title: "Czy Google zniknie przez gogogo?",
    url: "#3",
    content: "Eksperci są zgodni: Google ma poważnego rywala. Czy to koniec giganta z Doliny Krzemowej?"
  },
  {
    title: "Czy GOGOGO.PL wykupi bazę danych Google?",
    url: "#4",
    content: "Plotki krążą o wielkim przejęciu. Gogogo.pl planuje wykupić dane Google i zakończyć erę konkurencji."
  },
  {
    title: "Korporacja GOGOGO zarobiła MILIARD W 2 DNI!!!",
    url: "#5",
    content: "Finansowy cud! Nowa wyszukiwarka osiąga niewiarygodne wyniki finansowe."
  },
  {
    title: "Czy to koniec Google?",
    url: "#6",
    content: "Analitycy twierdzą: Google może nie przetrwać starcia z innowacyjnym gogogo.pl."
  }
];

const query = getQueryParam("q");
const resultsDiv = document.getElementById("results");

if (!query) {
  resultsDiv.innerHTML = "<p>Brak zapytania.</p>";
} else {
  resultsDiv.innerHTML = articles.map(article => `
    <div class="result">
      <a href="${article.url}">${article.title}</a>
      <div class="snippet">${article.content}</div>
    </div>
  `).join("");
}
