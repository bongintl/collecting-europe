var { SHARE, TWITTER } = require('../../config');

var url = location.hostname + location.pathname;

module.exports = data => `

<div class="tabs">
    
    <div class="tab tab_me">
        <span class="text-ar">أنا</span>
		<span class="text-de">Ich</span>
		<span class="text-el">Εγώ</span>
		<span class="text-en">Me</span>
		<span class="text-es">Yo</span>
		<span class="text-fr">Moi</span>
		<span class="text-it">Io</span>
		<span class="text-ja">自分</span>
		<span class="text-ko">나</span>
		<span class="text-pl">Ja</span>
		<span class="text-pt">Eu</span>
		<span class="text-ru">Я</span>
		<span class="text-tr">Ben</span>
		<span class="text-zh">我</span>
    </div>
    
    <div class="tab tab_everyone">
        <span class="text-ar">و كل شخص</span>
		<span class="text-de">& Alle</span>
		<span class="text-el">Και όλοι οι άλλοι</span>
		<span class="text-en">& Everyone</span>
		<span class="text-es">y todo el mundo</span>
		<span class="text-fr">& tous les autres</span>
		<span class="text-it">& tutti</span>
		<span class="text-ja">& 全員</span>
		<span class="text-ko">모든 사람</span>
		<span class="text-pl">i wszyscy</span>
		<span class="text-pt">& Todos</span>
		<span class="text-ru">и каждый</span>
		<span class="text-tr">ve Herkes</span>
		<span class="text-zh">& 每个人</span>
	</div>
    
</div>

<div class="bio">Age ${data.age} &sdot; ${data.location}</div>

<div class="buttons buttons_main">
    
    <div class="button">
        <a href="archive">
            <span class="text-ar">الأخرون</span>
    		<span class="text-de">Andere</span>
    		<span class="text-el">Άλλοι</span>
    		<span class="text-en">Others</span>
    		<span class="text-es">Otros</span>
    		<span class="text-fr">Autres</span>
    		<span class="text-it">Altri</span>
    		<span class="text-ja">その他</span>
    		<span class="text-ko">기타</span>
    		<span class="text-pl">Inne</span>
    		<span class="text-pt">Outros</span>
    		<span class="text-ru">Другие</span>
    		<span class="text-tr">Diğerleri</span>
    		<span class="text-zh">其他</span>
        </a>
    </div>
    
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
    
    <div class="button button_share">
        <span class="text-ar">شارك</span>
		<span class="text-de">Teilen</span>
		<span class="text-el">Κοινή χρήση</span>
		<span class="text-en">Share</span>
		<span class="text-es">Compartir</span>
		<span class="text-fr">Partager</span>
		<span class="text-it">Condividi</span>
		<span class="text-ja">共有</span>
		<span class="text-ko">공유</span>
		<span class="text-pl">Udostępnij</span>
		<span class="text-pt">Partilhar</span>
		<span class="text-ru">Поделиться</span>
		<span class="text-tr">Paylaş</span>
		<span class="text-zh">共享</span>
    </div>
    
</div>

<div class="buttons buttons_share buttons_fade-out">
    
    <div class="button button_share-action button_copy" data-share-action="Copy URL">
        <span class="text-ar">انسخ URL</span>
		<span class="text-de">URL kopieren</span>
		<span class="text-el">Αντιγραφή URL</span>
		<span class="text-en">Copy URL</span>
		<span class="text-es">Copiar URL</span>
		<span class="text-fr">Copier l'URL</span>
		<span class="text-it">Copia URL</span>
		<span class="text-ja">URLのコピー</span>
		<span class="text-ko">URL 복사</span>
		<span class="text-pl">Kopiuj adres URL</span>
		<span class="text-pt">Copiar URL</span>
		<span class="text-ru">Копировать URL</span>
		<span class="text-tr">URL'yi kopyala</span>
		<span class="text-zh">复制 URL</span>
    </div>

    <div class="button button_share-action" data-share-action="Facebook">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${ url }">
            <span class="text-ar">فيس بوك</span>
    		<span class="text-de">Facebook</span>
    		<span class="text-el">Facebook</span>
    		<span class="text-en">Facebook</span>
    		<span class="text-es">Facebook</span>
    		<span class="text-fr">Facebook</span>
    		<span class="text-it">Facebook</span>
    		<span class="text-ja">Facebook</span>
    		<span class="text-ko">Facebook</span>
    		<span class="text-pl">Facebook</span>
    		<span class="text-pt">Facebook</span>
    		<span class="text-ru">Facebook</span>
    		<span class="text-tr">Facebook</span>
    		<span class="text-zh">Facebook</span>
        </a>
    </div>

    <div class="button button_share-action" data-share-action="Twitter">
        <a target="_blank" href="https://twitter.com/home?status=${ encodeURIComponent( [ SHARE, url, TWITTER ].join(' ') ) }">
            <span class="text-ar">تويتر</span>
    		<span class="text-de">Twitter</span>
    		<span class="text-el">Twitter</span>
    		<span class="text-en">Twitter</span>
    		<span class="text-es">Twitter</span>
    		<span class="text-fr">Twitter</span>
    		<span class="text-it">Twitter</span>
    		<span class="text-ja">Twitter</span>
    		<span class="text-ko">Twitter</span>
    		<span class="text-pl">Twitter</span>
    		<span class="text-pt">Twitter</span>
    		<span class="text-ru">Twitter</span>
    		<span class="text-tr">Twitter</span>
    		<span class="text-zh">Twitter</span>
        </a>
    </div>

    <div class="button button_cancel">
        <span class="text-ar">إلغاء</span>
		<span class="text-de">Abbrechen</span>
		<span class="text-el">Άκυρο</span>
		<span class="text-en">Back</span>
		<span class="text-es">Cancelar</span>
		<span class="text-fr">Supprimer</span>
		<span class="text-it">Cancella</span>
		<span class="text-ja">キャンセル</span>
		<span class="text-ko">취소</span>
		<span class="text-pl">Anuluj</span>
		<span class="text-pt">Cancelar</span>
		<span class="text-ru">Отмена</span>
		<span class="text-tr">İptal</span>
		<span class="text-zh">取消</span>
    </div>

</div>

<div class="stats">
    
    <div class="stats__column stats__column_1">
        
    </div>
    
    <div class="stats__column stats__column_2">
        
    </div>
    
    <div class="stats__callout">
    
    </div>
    
</div>

`