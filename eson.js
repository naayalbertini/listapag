const formComprador = document.querySelector('#form-comprador');
const compradoresDiv = document.querySelector('#compradores');

formComprador.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = document.querySelector('#nome').value;
  const compradorDiv = document.createElement('div');
  compradorDiv.classList.add('comprador');
  
  const nomeSpan = document.createElement('span');
  nomeSpan.textContent = nome;
  compradorDiv.appendChild(nomeSpan);
  
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Confirmar Pagamento';
  compradorDiv.appendChild(button);
  
  compradoresDiv.appendChild(compradorDiv);
  
  button.addEventListener('click', function() {
    compradorDiv.classList.add('pago');
    nomeSpan.textContent += ' (pago)';
    button.disabled = true;
    button.textContent = 'Pago';
  });
  
  formComprador.reset();
});
