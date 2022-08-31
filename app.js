// https://www.omnicalculator.com/finance/ebitda-margin

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const EBITDAmarginRadio = document.getElementById('EBITDAmarginRadio');
const totalrevenuesRadio = document.getElementById('totalrevenuesRadio');
const EBITDARadio = document.getElementById('EBITDARadio');

let EBITDAmargin;
let totalrevenues = v1;
let EBITDA = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

EBITDAmarginRadio.addEventListener('click', function() {
  variable1.textContent = 'Total revenues';
  variable2.textContent = 'EBITDA';
  totalrevenues = v1;
  EBITDA = v2;
  result.textContent = '';
});

totalrevenuesRadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA margin';
  variable2.textContent = 'EBITDA';
  EBITDAmargin = v1;
  EBITDA = v2;
  result.textContent = '';
});

EBITDARadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA margin';
  variable2.textContent = 'Total revenues';
  EBITDAmargin = v1;
  totalrevenues = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(EBITDAmarginRadio.checked)
    result.textContent = `EBITDA margin = ${computeEBITDAmargin().toFixed(2)}`;

  else if(totalrevenuesRadio.checked)
    result.textContent = `Total revenues = ${computetotalrevenues().toFixed(2)}`;

  else if(EBITDARadio.checked)
    result.textContent = `EBITDA = ${computeEBITDA().toFixed(2)}`;
})

// calculation

function computeEBITDAmargin() {
  return (Number(EBITDA.value) / Number(totalrevenues.value)) * 100;
}

function computetotalrevenues() {
  return Number(EBITDA.value) / (Number(EBITDAmargin.value) / 100);
}

function computeEBITDA() {
  return (Number(EBITDAmargin.value) / 100) * Number(totalrevenues.value);
}