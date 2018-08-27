const css = `

@import {
	font-family: "source-sans-pro";
	url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

}
html {
	font-family: 'Source Sans Pro', sans-serif;
}

#subHeaderWrapper {
	padding-top: 20px;
	padding-bottom: 0px;
}

.innerHtmlStyles {
	margin-top: 10px;
}
.innerHtmlStyles p, .innerHtmlStyles ol, .innerHtmlStyles ul  {
	margin-top: 10px;
}

button.buttonWidths {
	-webkit-appearance: none;
	-moz-appearance: none;
}

@media
only screen and (max-width: 768px)  {
	
	body{
		background-color: #F7F7F7;
		margin-left: auto;
		margin-right: auto;
		font-family: source-sans-pro, sans-serif;
		
	}

	

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr {
		display: block;		
	}
	
	#courseCertificate {
		max-width: 100%;
	}

	.courseCertificate {
		width: 100%;
		margin: auto;
	}
	
	.emailHeader td {
		width: 100%;
	}

	.emailHeader td img {
		margin-left: auto;
		margin-right: auto;
	} 

	.emailFooter {
		width:500px
		color: #F7F7F7;
		margin-right: auto;
		margin-left: auto;
		font-size: 10pt;
		// padding: 15px 0px 10px 0px;
	}

	.emailFooter td {
	
		color: #F7F7F7;
		margin-right: auto;
		margin-left: auto;
		font-size: 10pt;
		
	}

	.report td {
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee;
    	position: relative;
    	text-align: top;
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
}
	@media (min-width: 769px) {

		html{
			padding-left:25%;
		}
		body{
			background-color: #F7F7F7;
			margin-left: auto;
			margin-right: auto;
			font-family: source-sans-pro, sans-serif;
			max-width:55%;
			
		}
		/* Force table to not be like tables anymore */
		table, thead, tbody, th, td, tr {
			// display: block;		
		}

		#courseCertificate {
			max-width: 100%;
		}
		.courseCertificate {
			width: 100%;
			margin: auto;
		}
		
		.emailHeader td {
			
		}
	
		.emailHeader td img {
			margin-left: auto;
			margin-right: auto;
		} 
	
		.emailFooter {
			width:100%;
			color: #F7F7F7;
			margin-right: auto;
			margin-left: auto;
			font-size: 10pt;
			// padding: 15px 0px 10px 0px;
		}

		.emailFooter td {
			width:100%;
			color: #F7F7F7;
			margin-right: auto;
			margin-left: auto;
			font-size: 10pt;
			
		}

	
		.report td {
			/* Behave  like a "row" */
			border: none;
			border-bottom: 1px solid #eee;
			position: relative;
			text-align: top;
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
