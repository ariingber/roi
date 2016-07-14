//global variables and dom element captture
var costOfInvestment = 0;
var yearsOfInvestment = 0;
var avgEmergHospVis = 0;
var openFieldValue =0;
var baseSolution = 0;

var savingDisplay1 = document.getElementById('savingDisplay1');
var roiDisplay1 = document.getElementById('roiDisplay1');
var savingsDisplay2 = document.getElementById('savingsDisplay2');
var roiDisplay2 = document.getElementById('roiDisplay2');
var savingDisplay3 = document.getElementById('savingDisplay3');
var roiDisplay3 = document.getElementById('roiDisplay3');
var savingsDisplay4 = document.getElementById('savingsDisplay4');
var roiDisplay4 = document.getElementById('roiDisplay4');
var savingDisplay5 = document.getElementById('savingDisplay5');
var roiDisplay5 = document.getElementById('roiDisplay5');
var savingsDisplay6 = document.getElementById('savingsDisplay6');
var roiDisplay6 = document.getElementById('roiDisplay6');
var savingDisplay7 = document.getElementById('savingDisplay7');
var roiDisplay7 = document.getElementById('roiDisplay7');
var savingsDisplay8 = document.getElementById('savingsDisplay8');
var roiDisplay8 = document.getElementById('roiDisplay8');
var savingDisplay9 = document.getElementById('savingDisplay9');
var roiDisplay9 = document.getElementById('roiDisplay9');
var savingsDisplay10 = document.getElementById('savingsDisplay10');
var roiDisplay10 = document.getElementById('roiDisplay10');

var savingsDisplays = [ savingsDisplay1, savingsDisplay2, savingsDisplay3,
  savingsDisplay4, savingsDisplay5, savingsDisplay6,savingsDisplay7,
  savingsDisplay8, savingsDisplay9, savingsDisplay10 ]
var roiDisplays = [ roiDisplay1, roiDisplay2, roiDisplay3, roiDisplay4,
  roiDisplay5, roiDisplay6, roiDisplay7, roiDisplay8, roiDisplay9, roiDisplay10 ]

var sliderValueAvgEmergVisit = document.getElementById('slider-valueAvgEmergVisit');
var sliderValueYearsOfInvestment = document.getElementById('slider-valueYearsOfInvestment');
var sliderValueCostOfInvestment = document.getElementById('slider-valueCostOfInvestment');
var slideAvgEmergVisit = document.getElementById('slideAvgEmergVisit');


//create sliders
noUiSlider.create(slideAvgEmergVisit, {
  start: 0.00,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 3
  }
});

var slideYearsOfInvestment = document.getElementById('slideYearsOfInvestment');
noUiSlider.create(slideYearsOfInvestment, {
  start: 0,
  step: 1,
  format: wNumb({
		decimals: false
	}),
  connect: 'lower',
  range: {
    'min': 0,
    'max': 10
  }
});


//call correct changes function depending on slider or input field
slideAvgEmergVisit.noUiSlider.on('update', changesEmergVisit);
slideYearsOfInvestment.noUiSlider.on('update', changesYearsOfInvest);


function changesEmergVisit ( values, handle ) {
  avgEmergHospVis = parseFloat(values[handle]);
  chartUpdate()
};

function changesYearsOfInvest ( values, handle ) {
  yearsOfInvestment = parseInt(values[handle]);
  chartUpdate()
};

$('input').keyup( function() {
  openFieldValue = parseInt($(this).val());
  chartUpdate ();
});



//chart update function and math done here
function chartUpdate () {
  costOfInvestment = yearsOfInvestment * 1000;
  sliderValueYearsOfInvestment.innerHTML = yearsOfInvestment;
  sliderValueCostOfInvestment.innerHTML = costOfInvestment;
  sliderValueAvgEmergVisit.innerHTML = avgEmergHospVis;


  for (i = 0; i <= 9; i++) {
    myChart.data.datasets[1].data[i] = costOfInvestment;
  }
  myChart.update();


  for (i = 0; i <= 9; i++) {
    myChart.data.datasets[0].data[i] = (openFieldValue * avgEmergHospVis * (i+1)) - costOfInvestment;
    savingsDisplays[i].innerHTML = '$' + ((openFieldValue * avgEmergHospVis * (i+1)) - costOfInvestment).toFixed(2);
    roiDisplays[i].innerHTML = (((openFieldValue * avgEmergHospVis * (i+1)) - costOfInvestment)/costOfInvestment).toFixed(2);
  }
  myChart.update();
}
