<?php

	$imageUrl = $_GET['img'];
	print($imageUrl);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@user">
	<meta name="twitter:creator" content="@user">
	<meta name="twitter:title" content="Test jonguh">
	<meta name="twitter:description" content="wow dit is een coole description">
	<meta name="twitter:image" content="http://i.imgur.com/UCjyx2l.jpg">
	<?php 
		echo '<meta name="twitter:image" content="'.$imageUrl.'">';
	?>
</head>

<body>

<h1>Vet coole twitter image</h1>

<?php 
	echo '<img src="'.$imageUrl.'" alt="Twitter image">';
?>

</body>
</html>