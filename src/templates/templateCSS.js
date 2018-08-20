const css = `

body {
	background-color: #F7F7F7;
	font-family: source-sans-pro, sans-serif;
}

#subHeaderWrapper {
	padding: 20px;
}

.innerHtmlStyles {
	margin-top: 10px;
}
.innerHtmlStyles p, .innerHtmlStyles ol, .innerHtmlStyles ul  {
	margin-top: 10px;
}

@media
only screen and (max-width: 600px),
(min-device-width: 600px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr {
		display: block;
	}

	.emailHeader td {
		width: 100%;
	}

	.emailHeader td img {
		margin-left: auto;
		margin-right: auto;
	} 

	.emailFooter {
		width: 100%;
		minHeight: 200%;
		color: #F7F7F7;
		margin-right: auto;
		margin-left: auto;
		font-size: 10pt;
	}
	.emailFooter td {
		padding: 0px 10px 5px 10px;
		font-size: 10pt;
		height:20px;
	}

	#subHeaderWrapper {
		width: 100%;
		padding: 0px;
	}

	.report td {
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee;
    	position: relative;
    	text-align: center;
	}

	.report td:before {
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%;
		padding-right: 10px;
		white-space: nowrap;
	}
	
	.customButton:hover {
		color:black;
		
	}


/*End of media query*/
}


	
	`.trim();

export default css;
