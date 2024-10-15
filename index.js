function updateClock() {
    // Usa Intl.DateTimeFormat para pegar a hora de Brasília
    const now = new Date();
    const options = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    
    // Formata a data para o horário de Brasília
    const formatter = new Intl.DateTimeFormat('pt-BR', options);
    const [{ value: hours }, , { value: minutes }, , { value: seconds }] = formatter.formatToParts(now);
  
    // Atualiza os valores no HTML
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);
  
  // Chama a função inicialmente para garantir que o relógio não apareça com valores 00:00:00 ao carregar
  updateClock();
  