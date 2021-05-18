<html>
<style src="style.css">
</style>

    <?php
    $feedback = fopen("/feedback.txt", "a") or die("Unable to open file!");

    $name = $_POST["name"];
    fwrite($feedback, $name);
    $txt = $_POST["suggest"];
    fwrite($feedback, $txt);
    fclose($feedback);
    ?> 

<!-- Shows up above everything else -->

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">


	<!-- What is displayed above the URL -->
	<title>Supercar Stats!(Development)</title>

	<link href="style.css" rel="stylesheet" type="text/css" />


	<!-- A header with an identifier so it can be found & manipulated by JS -->
	<h1 id="heading"></h1>
<p id="intro">Welcome to the untested & unfinished version of the app! You can learn about some supercars by going through the dropdowns!<br>
		As this is still in development, do not be suprised if there are some bugs needing to be worked out.</p><br>
    <p id="featureList">The current features being developed are:<br>
    A feedback input! (Buggy, so use at your own risk!)<br>
    New look and operation of site!<br>
    More cars & more stats for cars!<br>
    </p><br><br>
</head>


<!-- Things found below the heading -->

<body id="main">



	<!-- Creates classes located in 'script.js' -->
	<script src="script.js">

	</script>

	<!-- Declares variable arrays in 'data.js' -->
	<script src="data.js">

	</script>

	<!-- Renders all of the code using 'engine.js' -->
	<script src="engine.js">

	</script>

	<noscript>Sorry, it seems that your browser doesn't support JavaScript!</noscript>
</body>

<footer id="creds">
	<p>Created by Caelan Grippa & Nate Sauthoff, 2021. <a href="https://github.com/CG-SKYLN/Program.Project">Project on Github</a>.</p>
</footer>
<p style="margin:auto; text-align:center; text-size:12px">Thank you for your feedback!<br>Sadly, this form is not functional yet, so your response has not been officialy recorded.<br>If you would like, you can save your response as a text file so you can save your feedback.</p>

<button type="button" onclick="sFeed.saveFile();" style="margin:auto; text-align:center">Download Text File</button>
</html>