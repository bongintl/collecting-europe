var { EXHIBITION_URL } = require('../../config');

module.exports = `

<div class="title"></div>

<div class="buttons buttons_wide">
	
	<div class="button">
		<a href="questions">
			<span class="text-ar">تشغيل</span>
			<span class="text-de">Spiel beginnen</span>
			<span class="text-el">Παιχνίδι</span>
			<span class="text-en">Play</span>
			<span class="text-es">Jugar</span>
			<span class="text-fr">Jouer</span>
			<span class="text-it">Gioco</span>
			<span class="text-ja">プレイ</span>
			<span class="text-ko">재생</span>
			<span class="text-pl">Zabawa</span>
			<span class="text-pt">Jogar</span>
			<span class="text-ru">Играть</span>
			<span class="text-tr">Oyun</span>
			<span class="text-zh">播放</span>
		</a>
	</div>
	
	<div class="button">
		<a href="${ EXHIBITION_URL }" target="_blank">
			<span class="text-ar">المعرض</span>
			<span class="text-de">Ausstellung</span>
			<span class="text-el">Έκθεση</span>
			<span class="text-en">Exhibition</span>
			<span class="text-es">Exhibición</span>
			<span class="text-fr">Exposition</span>
			<span class="text-it">Esibizione</span>
			<span class="text-ja">展覧会</span>
			<span class="text-ko">전시</span>
			<span class="text-pl">Wystawa</span>
			<span class="text-pt">Exibição</span>
			<span class="text-ru">Выставка</span>
			<span class="text-tr">Sunum</span>
			<span class="text-zh">展览</span>
		</a>
	</div>
	
</div>

<div class="logos">
	<a href="https://www.vam.ac.uk/" target="_blank">
		<img src="assets/logo_va.svg">
	</a>
	<a href="https://www.goethe.de/" target="_blank">
		<img src="assets/logo_goethe.svg">
	</a>
	<a href="https://www.britishcouncil.org/" target="_blank">
		<img src="assets/logo_bc.svg">
	</a>
</div>

<div class="credit">
	Created by <a href="http://www.thebeautifulmeme.com/" target="_blank">The Beautiful Meme</a> & <a href="http://bong.international/" target="_blank">BONG</a>
</div>
`