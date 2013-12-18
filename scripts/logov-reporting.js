// Globals 
var dataField = {};
var dataSource = {};

function InitaliseDataFields() {
	// Populate auglbals fields
	dataField.auglbals = {};
	dataField.auglbals.lgr_acc = "GL Account";
	dataField.auglbals.pst_yer = "Posting Year";
	dataField.auglbals.cmt_bal = "Total Commitments";
	dataField.auglbals.act_p01 = "P1 Actuals";
	dataField.auglbals.act_p02 = "P2 Actuals";
	dataField.auglbals.act_p03 = "P3 Actuals";
	dataField.auglbals.act_p04 = "P4 Actuals";
	dataField.auglbals.act_p05 = "P5 Actuals";
	dataField.auglbals.act_p06 = "P6 Actuals";
	dataField.auglbals.act_p07 = "P7 Actuals";
	dataField.auglbals.act_p08 = "P8 Actuals";
	dataField.auglbals.act_p09 = "P9 Actuals";
	dataField.auglbals.act_p10 = "P10 Actuals";
	dataField.auglbals.act_p11 = "P11 Actuals";
	dataField.auglbals.act_p12 = "P12 Actuals";
	dataField.auglbals.act_p13 = "P13 Actuals";
	dataField.auglbals.onc_p01 = "P1 Oncosts";
	dataField.auglbals.onc_p02 = "P2 Oncosts";
	dataField.auglbals.onc_p03 = "P3 Oncosts";
	dataField.auglbals.onc_p04 = "P4 Oncosts";
	dataField.auglbals.onc_p05 = "P5 Oncosts";
	dataField.auglbals.onc_p06 = "P6 Oncosts";
	dataField.auglbals.onc_p07 = "P7 Oncosts";
	dataField.auglbals.onc_p08 = "P8 Oncosts";
	dataField.auglbals.onc_p09 = "P9 Oncosts";
	dataField.auglbals.onc_p10 = "P10 Oncosts";
	dataField.auglbals.onc_p11 = "P11 Oncosts";
	dataField.auglbals.onc_p12 = "P12 Oncosts";
	dataField.auglbals.onc_p13 = "P13 Oncosts";
	dataField.auglbals.bgt_p01 = "P1 Budget Actuals";
	dataField.auglbals.bgt_p02 = "P2 Budget Actuals";
	dataField.auglbals.bgt_p03 = "P3 Budget Actuals";
	dataField.auglbals.bgt_p04 = "P4 Budget Actuals";
	dataField.auglbals.bgt_p05 = "P5 Budget Actuals";
	dataField.auglbals.bgt_p06 = "P6 Budget Actuals";
	dataField.auglbals.bgt_p07 = "P7 Budget Actuals";
	dataField.auglbals.bgt_p08 = "P8 Budget Actuals";
	dataField.auglbals.bgt_p09 = "P9 Budget Actuals";
	dataField.auglbals.bgt_p10 = "P10 Budget Actuals";
	dataField.auglbals.bgt_p11 = "P11 Budget Actuals";
	dataField.auglbals.bgt_p12 = "P12 Budget Actuals";
	dataField.auglbals.bgt_p13 = "P13 Budget Actuals";
	dataField.auglbals.boc_p01 = "P1 Budget Oncosts";
	dataField.auglbals.boc_p02 = "P2 Budget Oncosts";
	dataField.auglbals.boc_p03 = "P3 Budget Oncosts";
	dataField.auglbals.boc_p04 = "P4 Budget Oncosts";
	dataField.auglbals.boc_p05 = "P5 Budget Oncosts";
	dataField.auglbals.boc_p06 = "P6 Budget Oncosts";
	dataField.auglbals.boc_p07 = "P7 Budget Oncosts";
	dataField.auglbals.boc_p08 = "P8 Budget Oncosts";
	dataField.auglbals.boc_p09 = "P9 Budget Oncosts";
	dataField.auglbals.boc_p10 = "P10 Budget Oncosts";
	dataField.auglbals.boc_p11 = "P11 Budget Oncosts";
	dataField.auglbals.boc_p12 = "P12 Budget Oncosts";
	dataField.auglbals.boc_p13 = "P13 Budget Oncosts";
}

function InitaliseDataSources() {
	// Populate data source names
	dataSource.gl_budget = {};
	dataSource.gl_budget.sourceDesc = "General Ledger Budget Reporting";
	dataSource.gl_budget.defaults = {};
	dataSource.gl_budget.other = {};
	dataSource.pc_budget = {};
	dataSource.pc_budget.sourceDesc = "Project Costing Budget Reporting";
	dataSource.pc_budget.defaults = {};
	dataSource.pc_budget.other = {};
	dataSource.pl_usage = {};
	dataSource.pl_usage.sourceDesc = "Plant Usage Reporting";
	dataSource.pl_usage.defaults = {};
	dataSource.pl_usage.other = {};
	
	//Populate GL Budget fields
	dataSource.gl_budget.defaults.f001 = "auglbals-lgr_acc";
	dataSource.gl_budget.defaults.f002 = "auglbals-pst_yer";
	dataSource.gl_budget.defaults.f003 = "auglbals-cmt_bal";
	dataSource.gl_budget.other.f004 = "auglbals-act_p01";
	dataSource.gl_budget.other.f005 = "auglbals-act_p02";
	dataSource.gl_budget.other.f006 = "auglbals-act_p03";
	dataSource.gl_budget.other.f007 = "auglbals-act_p04";
	dataSource.gl_budget.other.f008 = "auglbals-act_p05";
	dataSource.gl_budget.other.f009 = "auglbals-act_p06";
	dataSource.gl_budget.other.f010 = "auglbals-act_p07";
	dataSource.gl_budget.other.f011 = "auglbals-act_p08";
	dataSource.gl_budget.other.f012 = "auglbals-act_p09";
	dataSource.gl_budget.other.f013 = "auglbals-act_p10";
	dataSource.gl_budget.other.f014 = "auglbals-act_p11";
	dataSource.gl_budget.defaults.f015 = "auglbals-act_p12";
	dataSource.gl_budget.other.f016 = "auglbals-act_p13";
	dataSource.gl_budget.other.f017 = "auglbals-onc_p01";
	dataSource.gl_budget.other.f018 = "auglbals-onc_p02";
	dataSource.gl_budget.other.f019 = "auglbals-onc_p03";
	dataSource.gl_budget.other.f020 = "auglbals-onc_p04";
	dataSource.gl_budget.other.f021 = "auglbals-onc_p05";
	dataSource.gl_budget.other.f022 = "auglbals-onc_p06";
	dataSource.gl_budget.other.f023 = "auglbals-onc_p07";
	dataSource.gl_budget.other.f024 = "auglbals-onc_p08";
	dataSource.gl_budget.other.f025 = "auglbals-onc_p09";
	dataSource.gl_budget.other.f026 = "auglbals-onc_p10";
	dataSource.gl_budget.other.f027 = "auglbals-onc_p11";
	dataSource.gl_budget.defaults.f028 = "auglbals-onc_p12";
	dataSource.gl_budget.other.f029 = "auglbals-onc_p13";
	dataSource.gl_budget.other.f030 = "auglbals-bgt_p01";
	dataSource.gl_budget.other.f031 = "auglbals-bgt_p02";
	dataSource.gl_budget.other.f032 = "auglbals-bgt_p03";
	dataSource.gl_budget.other.f033 = "auglbals-bgt_p04";
	dataSource.gl_budget.other.f034 = "auglbals-bgt_p05";
	dataSource.gl_budget.other.f035 = "auglbals-bgt_p06";
	dataSource.gl_budget.other.f036 = "auglbals-bgt_p07";
	dataSource.gl_budget.other.f037 = "auglbals-bgt_p08";
	dataSource.gl_budget.other.f038 = "auglbals-bgt_p09";
	dataSource.gl_budget.other.f039 = "auglbals-bgt_p10";
	dataSource.gl_budget.other.f040 = "auglbals-bgt_p11";
	dataSource.gl_budget.defaults.f041 = "auglbals-bgt_p12";
	dataSource.gl_budget.other.f042 = "auglbals-bgt_p13";
	dataSource.gl_budget.other.f043 = "auglbals-boc_p01";
	dataSource.gl_budget.other.f044 = "auglbals-boc_p02";
	dataSource.gl_budget.other.f045 = "auglbals-boc_p03";
	dataSource.gl_budget.other.f046 = "auglbals-boc_p04";
	dataSource.gl_budget.other.f047 = "auglbals-boc_p05";
	dataSource.gl_budget.other.f048 = "auglbals-boc_p06";
	dataSource.gl_budget.other.f049 = "auglbals-boc_p07";
	dataSource.gl_budget.other.f050 = "auglbals-boc_p08";
	dataSource.gl_budget.other.f051 = "auglbals-boc_p09";
	dataSource.gl_budget.other.f052 = "auglbals-boc_p10";
	dataSource.gl_budget.other.f053 = "auglbals-boc_p11";
	dataSource.gl_budget.defaults.f054 = "auglbals-boc_p12";
	dataSource.gl_budget.other.f055 = "auglbals-boc_p13";
}

function InitialiseDataSourceObjects() {
	InitaliseDataFields();
	InitaliseDataSources();
}

// Add the options to the target drop down
function CreateOption(optTarget, optLabel, optValue) {
	var dropdown = document.getElementById(optTarget);
	dropdown[dropdown.length] = new Option(optLabel, optValue);
}

// Delete all options from a dropdown
function ClearOptions(optTarget) {
	var dropdown = document.getElementById(optTarget);
	dropdown.options.length = 0;
}

// Populate the Data Source list
function PopulateDataSources() {
	ClearOptions("report_datasource");
	
	for (var key in dataSource) {
		// Make sure it isnt object from proto
		if (dataSource.hasOwnProperty(key)) {
			var optValue = key;
			var optLabel = dataSource[key].sourceDesc;
			CreateOption("report_datasource", optLabel, optValue);
		}
	}
}

//Populate the Data Fields list
function PopDatafields() {
	InitFields();
}

function InitFields() {
	// Get datasource that we are getting the fields for
  	var dataSourceControl = document.getElementById("report_datasource");
  	var dataSourceSelected = dataSourceControl.options[dataSourceControl.selectedIndex].value;
  	
  	// Some variables for what we are doing
  	var availList = document.getElementById("report_datafields_avail");
  	var availOptions = availList.options;
  	var selectedList = document.getElementById("report_datafields_sel");
  	var selectedOptions = availList.options;
  	var i = 0;
  	
  	// clear pickedList and availList
  	selectedOptions.length = 0;
  	availOptions.length = 0;
  	 
  	// Populate pickedList with defaults (0 is defaults index, 1 is others index)
  	for (var key in dataSource[dataSourceSelected]["defaults"]) {
  		 if (dataSource[dataSourceSelected]["defaults"].hasOwnProperty(key)) {
	       	var fieldid = dataSource[dataSourceSelected]["defaults"][key];
	       	var fieldidarr = fieldid.split("-");
	       	var fieldname = dataField[fieldidarr[0]][fieldidarr[1]] + "\u00a0\u00a0\u00a0\u00a0" + "(" + fieldid.replace("-",".") + ")";
	       	selectedList[selectedList.length] = new Option(fieldname, fieldid);
	   	}
  	}
  	
  	// Populate select list with other fields
  	for (var key in dataSource[dataSourceSelected]["other"]) {
  		 if (dataSource[dataSourceSelected]["other"].hasOwnProperty(key)) {
	       	var fieldid = dataSource[dataSourceSelected]["other"][key];
	       	var fieldidarr = fieldid.split("-");
	       	var fieldname = dataField[fieldidarr[0]][fieldidarr[1]] + "\u00a0\u00a0\u00a0\u00a0" + "(" + fieldid.replace("-",".") + ")";
	       	availList[availList.length] = new Option(fieldname, fieldid);
	   	}
  	}
  	if (!(availList.length > -1)) {
	    availList[0].selected = true;  // Set first selected on load
	    availList[0].defaultSelected = true;  // In case of reset/reload
  	}
  	availList.focus();  // Set focus on the availList
}

// Add datafield to fieldlist
function AddFields(){
  var availList = document.getElementById("report_datafields_avail");
  var availIndex = availList.selectedIndex;
  var availOptions = availList.options;
  var pickedList = document.getElementById("report_datafields_sel");
  var pickedOptions = pickedList.options;
  var pickedOptLength = pickedOptions.length;
  var tempText;
  var tempValue;
  // An item must be selected
  while (availIndex > -1) {
    pickedOptions[pickedOptLength] = new Option(availList[availIndex].text);
    pickedOptions[pickedOptLength].value = availList[availIndex].value;
    availOptions[availIndex] = null;
    // Sort the pick list
    while (pickedOptLength > 0 && pickedOptions[pickedOptLength].value < pickedOptions[pickedOptLength-1].value) {
    	tempText = pickedOptions[pickedOptLength-1].text;
        tempValue = pickedOptions[pickedOptLength-1].value;
        pickedOptions[pickedOptLength-1].text = pickedOptions[pickedOptLength].text;
        pickedOptions[pickedOptLength-1].value = pickedOptions[pickedOptLength].value;
        pickedOptions[pickedOptLength].text = tempText;
        pickedOptions[pickedOptLength].value = tempValue;
        pickedOptLength = pickedOptLength - 1;
    }
    availIndex = availList.selectedIndex;
    pickedOptLength = pickedOptions.length;
  }
  availOptions[0].selected = true;
}

// remove datafield from fieldlist
function DelFields() {
  	var availList = document.getElementById("report_datafields_avail");
  	var availOptions = availList.options;
  	var availOptLength = availOptions.length;
  	var pickedList = document.getElementById("report_datafields_sel");
  	var pickedIndex = pickedList.selectedIndex;
  	var pickedOptions = pickedList.options;
  	while (pickedIndex > -1) {
  		availOptions[availOptLength] = new Option(pickedList[pickedIndex].text);
      	availOptions[availOptLength].value = pickedList[pickedIndex].value;
    }
    pickedOptions[pickedIndex] = null;
    if (singleSelect && sortSelect) {
      	var tempText;
      	var tempValue;
      	// Re-sort the select list
      	while (availOptLength > 0 && availOptions[availOptLength].value < availOptions[availOptLength-1].value) {
	        tempText = availOptions[availOptLength-1].text;
        	tempValue = availOptions[availOptLength-1].value;
        	availOptions[availOptLength-1].text = availOptions[availOptLength].text;
        	availOptions[availOptLength-1].value = availOptions[availOptLength].value;
        	availOptions[availOptLength].text = tempText;
        	availOptions[availOptLength].value = tempValue;
        	availOptLength = availOptLength - 1;
      	}
    }
    pickedIndex = pickedList.selectedIndex;
    availOptLength = availOptions.length;
}

function SelFields(btn) {
  var pickedList = document.getElementById("report_datafields_sel");
  var pickedOptions = pickedList.options;
  var pickedOptLength = pickedOptions.length;
  if (pickedOptLength < 1) {
    alert("No Selections in the pickedList\nPlease Select using the [->] button");
    return false;
  }
  for (var i = 0; i < pickedOptLength; i++) {
    pickedOptions[i].selected = true;
  }
  return true;
}

// Call all functions that are required onLoad
function PageInitialisation() {
	InitialiseDataSourceObjects();
	PopulateDataSources();
	// Do an initial load of fields for the first data source in the list
	InitFields();
}