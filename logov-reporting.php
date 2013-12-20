<?php require_once "logov-reporting-functions.php"; ?>
<HTML>
<HEAD>
	<meta name="description" content="LoGov Logic Reporting">
	<meta name="keywords" content="LoGov,Reporting,Authority">
	<meta name="author" content="LoGov Logic">
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<!-- Jquery -->
	<script type="text/javascript" src="scripts/jquery-1.10.2.min.js"></script>
	<!-- Datatables -->
	<script type="text/javascript" src="scripts/jquery.dataTables.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/jquery.dataTables.css">
	<link rel="stylesheet" type="text/css" href="css/jquery.dataTables_themeroller.css">
	
	<!-- Logov Logic files -->
	<script type="text/javascript" src="scripts/logov-reporting.js"></script>
	<link rel="stylesheet" type="text/css" href="css/logov-reporting.css">
</HEAD>
<BODY onLoad="PageInitialisation();">
	<div id="report_source">
		<form name="report_settings" id="report_settings">
			<table>
				<tr>
					<td><h3>Data Source</h3></td>
					<td></td>
					<td><h3>Fields Available</h3></td>
					<td><h3></h3></td>
					<td><h3>Fields Selected</h3></td>
				</tr>
				<tr>
					<td><select name="report_datasource" id="report_datasource" onchange="InitFields();"></select></td>
					<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
					<td><select name="report_datafields_avail" ID="report_datafields_avail" SIZE="10" multiple="multiple" style="width: 250px"></select></td>
					<td>
						<input TYPE="BUTTON" VALUE="-&gt;" ONCLICK="AddFields();"></input>
						<br />
						<input TYPE="BUTTON" VALUE="&lt;-" ONCLICK="DelFields();"></input>
					</td>
					<td><select NAME="report_datafields_sel" ID="report_datafields_sel" SIZE="10" multiple="multiple" style="width: 250px"></select></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td ALIGN="left"><input TYPE="reset" VALUE="Reset" ONCLICK="InitFields();"></td>
					<td></td>
					<td ALIGN="right"><input TYPE="submit" VALUE="Submit"></td>
				</tr>
			</table>
		</form>
	</div>
</BODY>
<FOOT>
</FOOT>
</HTML>