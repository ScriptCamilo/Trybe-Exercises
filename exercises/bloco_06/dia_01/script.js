function createStateOption() {
  // https://gist.github.com/ricardobarantini/5665214
  const states = [
    { abbr: "AC", state: "Acre" },
    { abbr: "AL", state: "Alagoas" },
    { abbr: "AP", state: "Amapá" },
    { abbr: "AM", state: "Amazonas" },
    { abbr: "BA", state: "Bahia" },
    { abbr: "CE", state: "Ceará" },
    { abbr: "DF", state: "Distrito Federal" },
    { abbr: "ES", state: "Espírito Santo" },
    { abbr: "GO", state: "Goiás" },
    { abbr: "MA", state: "Maranhão" },
    { abbr: "MT", state: "Mato Grosso" },
    { abbr: "MS", state: "Mato Grosso do Sul" },
    { abbr: "MG", state: "Minas Gerais" },
    { abbr: "PA", state: "Pará" },
    { abbr: "PB", state: "Paraíba" },
    { abbr: "PR", state: "Paraná" },
    { abbr: "PE", state: "Pernambuco" },
    { abbr: "PI", state: "Piauí" },
    { abbr: "RJ", state: "Rio de Janeiro" },
    { abbr: "RN", state: "Rio Grande do Norte" },
    { abbr: "RS", state: "Rio Grande do Sul" },
    { abbr: "RO", state: "Rondônia" },
    { abbr: "RR", state: "Roraima" },
    { abbr: "SC", state: "Santa Catarina" },
    { abbr: "SP", state: "São Paulo" },
    { abbr: "SE", state: "Sergipe" },
    { abbr: "TO", state: "Tocantins" }
  ]
  const stateSelect = document.querySelector('#select-state');

  for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.value = states[index].abbr;
    option.innerText = states[index].state;
    stateSelect.appendChild(option);
  }
}

window.onload = () => {
  createStateOption();
}