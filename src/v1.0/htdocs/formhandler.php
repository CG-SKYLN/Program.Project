<!DOCTYPE html>
<html>

    <?php
    $feedback = fopen("feedback.txt", "a") or die("Unable to open file!");

    $name = $_POST["name"] . PHP_EOL;
    fwrite($feedback, $name);
    $txt = $_POST["sugTxt"] . PHP_EOL;
    fwrite($feedback, $txt);
    fclose($feedback);
    ?> 

<!-- Shows up above everything else -->

<head>
    <style src="style.css">
    </style>
    
    <a href="http://bugatti.supercarstatsdevelopment.epizy.com" id="bugattiLink"></a>
    <a href="http://ferrari.supercarstatsdevelopment.epizy.com" id="ferrariLink"></a>
    <a href="http://lamborghini.supercarstatsdevelopment.epizy.com" id="lamboLink"></a>
    <a href="http://mclaren.supercarstatsdevelopment.epizy.com" id="mclarenLink"></a>
    <a href="http://koenigsegg.supercarstatsdevelopment.epizy.com" id="koenLink"></a>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">


	<!-- What is displayed above the URL -->
	<title>Supercar Stats!(v1.0)</title>

	<link href="style.css" rel="stylesheet" type="text/css" />

	
</head>

    <h1 id="heading">Supercar Stats!</h1>

<!-- Things found below the heading -->

<body id="main">

    <p id="intro">Welcome this app! You can learn about some supercars by going to different pages, each with a few cars!<br> Click the title to return to the home page!<br>
		As this is still in development, bugs are expected. If you find some, please leave an entry in the feedback form at the bottom of the page!</p><br>
    <nav id="links">
            <button type="button" onclick="getElementById('bugattiLink').click();"><img src="images/bugatti-logo.png"><img></button>
            <button type="button" onclick="getElementById('ferrariLink').click();"><img src="images/ferrari-logo.png"><img></button>
            <button type="button" onclick="getElementById('lamboLink').click();"><img src="images/lambo-logo.png"><img></button>
            <button type="button" onclick="getElementById('mclarenLink').click();"><img src="images/mclaren-logo.png"><img></button>
            <button type="button" onclick="getElementById('koenLink').click();"><img src="images/koen-logo.png"><img></button>
    </nav><br><br>
    </p>
	<noscript>Sorry, it seems that your browser doesn't support JavaScript!</noscript>
</body>

<footer id="creds">
	<p>Created by Caelan Grippa, 2021. <a href="https://github.com/CG-SKYLN/Program.Project">Project on Github</a>
</footer>

<p style="margin:auto; text-align:center; text-size:12px">Thank you for your feedback!</p>

<?php
echo "You said:<br>" . $txt;
?>

</html>