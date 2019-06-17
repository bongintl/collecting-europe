<?php
	
	$title = 'Collecting Europe';
	
	$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	
	$description = "Where do your boundaries lie?";
	
	$twitter = "@V_and_A";
	
	$route = trim( $_SERVER[ 'REQUEST_URI' ], '/' );
	
	$imgs = "http://95.85.37.181/img/";
	
	$image = is_numeric( $route ) ? $imgs . $route : $url . 'assets/marble/negX.png';
	
?>

<!doctype html>
<html lang="en">
<head>
	
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-P24KW5');</script>
	<!-- End Google Tag Manager -->

	<meta charset="UTF-8">
	<title>Collecting Europe</title>
	<link rel="stylesheet" href="style.css" type="text/css" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	
	<link rel="shortcut icon" href="CE_favicon.ico" />

	<meta name="description" content="<?= $description ?>">
	<meta property="og:type" content="website">
	<meta property="og:title" content="<?= $title ?>">
	<meta property="og:image" content="<?= $image ?>">
	<meta property="og:url" content="<?= $url ?>">
	<meta property="og:description" content="<?= $description ?>">
	<meta itemprop="name" content="<?= $title ?>">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:creator" content="<?= $twitter ?>">
	<meta name="twitter:site" content="<?= $twitter ?>">
	<meta name="twitter:url" content="<?= $url ?>">
	<meta name="twitter:title" content="<?= $title ?>">
	<meta name="twitter:descripton" content="<?= $description ?>">
	<meta name="twitter:image" content="<?= $image ?>">
	
</head>
<body>
	
	<!-- Google Tag Manager (noscript) -->
	<!--<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P24KW5"-->
	<!--height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>-->
	<!-- End Google Tag Manager (noscript) -->
	
	<div class="landscape-prompt">
		<span>Landscape please</span>
	</div>
	
	<div class="loading">Loading...</div>
	
	<div class="language-display">
		<span class="text-ar">AR</span>
		<span class="text-de">DE</span>
		<span class="text-el">GR</span>
		<span class="text-en">EN</span>
		<span class="text-es">ES</span>
		<span class="text-fr">FR</span>
		<span class="text-it">IT</span>
		<span class="text-ja">JP</span>
		<span class="text-ko">KR</span>
		<span class="text-pl">PL</span>
		<span class="text-pt">BR</span>
		<span class="text-ru">RU</span>
		<span class="text-tr">TR</span>
		<span class="text-zh">CN</span>
	</div>
	
	<div class="language-select">
		<div class="language-select__inner">
			<a data-lang="ar">اللغة العربية الفصحى</a>
			<a data-lang="zh">中文</a>
			<a data-lang="en">English</a>
			<a data-lang="fr">Français</a>
			<a data-lang="de">Deutsch</a>
			<a data-lang="el">Ελληνικά</a>
			<a data-lang="it">Italiano</a>
			<a data-lang="ja">日本語</a>
			<a data-lang="ko">한국어</a>
			<a data-lang="pl">Polski</a>
			<a data-lang="pt">Português</a>
			<a data-lang="ru">Русский язык</a>
			<a data-lang="es">Español</a>
			<a data-lang="tr">Türkçe</a>
		</div>
	</div>
	
	<script type="text/javascript" src="bundle.js"></script>
	
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
	  ga('create', 'UA-91178753-1', 'auto');
	  ga('send', 'pageview');
	
	</script>
</body>
</html>