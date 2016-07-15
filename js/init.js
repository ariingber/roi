//global variables and dom element captture
var costOfInvestment = 0;
var puffsPerDay = 0;
var estimAdhere = 0;
var numberOfPatients = 0;
var actuaPerCan = 0;

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

var sliderValueEstimAdhere = document.getElementById('slider-valueEstimAdhere');
var sliderValuePuffsPerDay = document.getElementById('slider-valuePuffsPerDay');
var sliderValueActuaPerCan = document.getElementById('slider-valueActuaPerCan');

var savingsDisplays = [ savingsDisplay1, savingsDisplay2, savingsDisplay3,
  savingsDisplay4, savingsDisplay5, savingsDisplay6,savingsDisplay7,
  savingsDisplay8, savingsDisplay9, savingsDisplay10 ]
var roiDisplays = [ roiDisplay1, roiDisplay2, roiDisplay3, roiDisplay4,
  roiDisplay5, roiDisplay6, roiDisplay7, roiDisplay8, roiDisplay9, roiDisplay10 ]
var percentLifts = [ 1.4, 1.38, 1.3, 1.2, 1.1 ]
var years = [1,2,3,4,5,6,7,8,9,10]
  ///////////////////////////////////////////////////////////////////////////////



//create sliders
noUiSlider.create(slideEstimAdhere, {
  start: 46,
  step: 1,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  },
  format: wNumb({
		decimals: false,
		prefix: ' %',
	})
});

var slidePuffsPerDay = document.getElementById('slidePuffsPerDay');
noUiSlider.create(slidePuffsPerDay, {
  start: 4,
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

var slideActuaPerCan = document.getElementById('slideActuaPerCan');
noUiSlider.create(slideActuaPerCan, {
  start: 60,
  step: 1,
  format: wNumb({
		decimals: false
	}),
  connect: 'lower',
  range: {
    'min': 30,
    'max': 300
  }
});
////////////////////////////////////



//create functions to be called when changes are made
function changesEstimAdhere ( values, handle ) {
  var stringEstimAdhereVal = values + '';
  EstimAdhere = parseInt(stringEstimAdhereVal.replace(/\D/g,''));
  chartUpdate()
};

function changesPuffsPerDay ( values, handle ) {
  puffsPerDay = parseInt(values[handle]);
  chartUpdate()
};

function changesActuaPerCan ( values, handle ) {
  actuaPerCan = parseInt(values[handle]);
  chartUpdate()
};
////////////////////////////////////////////////////////



//call correct changes function depending on slider or input field changing
slideEstimAdhere.noUiSlider.on('update', changesEstimAdhere);
slidePuffsPerDay.noUiSlider.on('update', changesPuffsPerDay);
slideActuaPerCan.noUiSlider.on('update', changesActuaPerCan);

//THIS IS THE NUMBER OF PATIENTS VALUE JQUERY
$('input').keyup( function() {
  numberOfPatients = parseInt($(this).val());
  chartUpdate ();
});
/////////////////////////////////////////////////////////////////////////////


//CHART UPDATE FORMULAS, LINES DRAWN, RIGHT SIDE VALUES UPADATED, AND TEXT UNDERSLIDER UPADTES
function chartUpdate () {
  costOfInvestment = numberOfPatients;
  // text underslider updates
  sliderValueEstimAdhere.innerHTML = '% ' + EstimAdhere;
  sliderValuePuffsPerDay.innerHTML = puffsPerDay;
  sliderValueActuaPerCan.innerHTML = actuaPerCan;

//ONE TIME COST LINE DRAWN
  for (i = 0; i <= 9; i++) {
    myChart.data.datasets[0].data[i] = costOfInvestment;
  }

  // EQUATION FOR EACH YEAR, PINK LINES DRAWN, ROI AND SAVINGS INNERHTML UPADATE
  for (j=1; j <= 5; j++) {
    for (k = 0; k <= 9; k++) {
      myChart.data.datasets[j].data[k] = (costOfInvestment * percentLifts[j - 1] * years[k]);
      // savingsDisplays[i].innerHTML = '$' + ((numberOfPatients * EstimAdhere * (i+1)) - costOfInvestment).toFixed(2);
      // roiDisplays[i].innerHTML = (((numberOfPatients * EstimAdhere * (i+1)) - costOfInvestment)/costOfInvestment).toFixed(2);
    }
  }
    myChart.update();

}
