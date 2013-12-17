// Create arrays for holding all required information
var dataSources = [
	["gl_budget", "General Ledger Budget"],
	["pc_budget", "Project Costing Budget"],
	["pl_usage", "Plant Usage"],
];

// Populate the Data Source list
function popDataSources() {
	var i;
	clearOptions("report_datasource");
	for (i = 0; i = dataSources.length - 1; i++) {
		createOption("report_datasource", dataSources[i][0], dataSources[i][1]);
	}
}

// Add the options to the target drop down
function createOption(target, label, value) {
	var opts = document.getElementById(target);
	opts.options.add(new Option(label,value) );
}

function clearOptions(target) {
	var opts = document.getElementById(target);
	opts.options.length=0;
}

// Selection - invoked on submit
function selDataSource(btn) {
  var pickList = document.getElementById("PickList");
  var pickOptions = pickList.options;
  var pickOLength = pickOptions.length;
  if (pickOLength < 1) {
    alert("No Selections in the Picklist\nPlease Select using the [->] button");
    return false;
  }
  for (var i = 0; i < pickOLength; i++) {
    pickOptions[i].selected = true;
  }
  return true;
}

// On document ready
$(document).ready(function() {
	popDataSources();
});
