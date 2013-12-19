<?php
function getDataSources() {
	?>
	<form name="datasource_form" id="datasource_form" action="whatever" onSubmit="return selDataSource();">
		<select name="datasource_list" id="datasource_list">
			<option value="gl_budget">General Ledger Budget</option>
			<option value="pc_budget">Project Costing Budget</option>
			<option value="plant_usage">Plant Usage</option>
		</select>
		<input type="submit" value="Next">
	</form>
	<?php
}
?>