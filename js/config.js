module.exports = {
    DB_ROOT: "/request.php?q=",
    URL: "collectingeurope.net",
    TWITTER: "@V_and_A",
    INTRO_TEXT: {
        "ar": "إن شكل العالم ليس مجرد كرة زرقاء وخضراء فحسب، بل هو خليط لا نهائي من وجهات النظر حول الحاضر والمستقبل. ويمكن رؤية جزء من هذا الشكل هنا. كما أن هذا الشكل سيتغير طالما تطلعنا على آرائك.",
        "de": "Unsere Welt hat nicht nur die Gestalt eines blaugrünen Globus. Vielmehr formt sie sich aus einer schier endlosen Mischung unterschiedlicher Standpunkte zu Fragen der Gegenwart und der Zukunft. Ein Teil dieser Form nimmt hier Gestalt an. Sie verändert sich, wenn du uns mitteilst, was du denkst.",
        "el": "Το σχήμα του κόσμου δεν είναι μια μπλε και πράσινη σφαίρα, αλλά ένα απεριόριστο μείγμα απόψεων για το παρόν και το μέλλον. Ένα κομμάτι αυτού του σχήματος μπορείτε να το δείτε εδώ. Θα αλλάζει, καθώς μας λέτε την άποψή σας.",
        "en": "The shape of the world isn’t a blue and green globe, but an endless mix of viewpoints about the present and the future. Some of that shape can be seen here. It will change as you tell us what you think.",
        "es": "La forma del mundo no es solo la de un globo azul y verde, sino que se trata de una mezcla sin fin de puntos de vista sobre el presente y el futuro. Algunas de estas formas se pueden ver aquí. Cambiará cuando nos diga qué piensa.",
        "fr": "La forme du monde n'est pas un globe bleu et vert, mais un mélange infini de points de vue sur le présent et l'avenir. Tu peux la voir en partie ici. Elle changera quand tu nous diras ce que tu penses.",
        "it": "Il mondo non è un globo blu e verde, bensì un mix infinito di punti di vista su presente e futuro. Qui puoi vederne una parte. Si tratta comunque di una forma destinata a modificarsi in base alle opinioni che esprimerai.",
        "ja": "世界の形は青と緑の球体ではなく、現在と未来に対する見方を無限に組み合わせることで出来上がります。その形の一部がここに表示されています。皆さんから意見が寄せられるにつれて、形は変わっていきます。",
        "ko": "지구의 형상은 단순히 파란색과 녹색의 구형이 아니라 현재와 미래에 대한 다양한 관점이 끊임 없이 섞여 있는 것입니다. 지구형 중 일부는 여기서 볼 수 있습니다. 생각을 표현하시면 지구형이 변화됩니다.",
        "pl": "Ziemia nie ma kształtu kuli w kolorach zielonym i niebieskim. Kształtuje ją nieskończenie wiele punktów widzenia na temat teraźniejszości i przyszłości. Niektóre można zobaczyć tutaj. Będą one zmieniać się wraz z wprowadzanymi przez Ciebie informacjami.",
        "pt": "A forma do mundo não é um globo azul e verde, mas uma mistura interminável de pontos de vista acerca do presente e do futuro. Alguma dessa forma pode ser vista aqui. Ela vai mudar à medida que você nos diz o que pensa.",
        "ru": "Форма мира — это не глобус в синих и зеленых цветах, а бесконечное сочетание различных точек зрения о настоящем и будущем. Часть такой формы можно увидеть здесь. Она будет меняться по мере рассказанного Вами о том, что Вы думаете.",
        "tr": "Dünyanın şekli sadece mavi ve yeşil renklerden oluşan bir yuvarlaktan değil, günümüz ve geleceğimiz ile ilgili sonsuz bakış açılarının harmanlandığı bir alandan oluşur. Bu şeklin bir bölümünü burada görebilirsiniz. Bizimle düşüncelerinizi paylaştıkça bu şekilde değişiklikler olacak.",
        "zh": "世界的形状不仅是一个呈蓝色和绿色的球体，亦是一个充斥着关于现在和未来的无尽观点的混合体。一些形状可以在这里看到。当您告诉我们您的一些想法时，它或许就会发生改变。"
    },
    INSTRUCTIONS: {
        "ar": [
            "سوف نسألك بعض الأسئلة.",
            "توجد إجابتان ومقياس بينهما.",
            "حرّك الشكل الخاص بك إلى المكان المناسب له.",
            "شاهد الشكل الخاص بك يتغير.",
            "ثم شاهد الشكل الخاص بك ينضم إلى أشكال أخرى حول العالم.",
        ].join('<br>'),
        "de": [
            "Wir werden dir einige Fragen stellen.",
            "Es gibt zwei Antworten und dazwischen eine Abstufung.",
            "Bewege deine Form an die Stelle, die dir richtig erscheint.",
            "Sieh zu, wie sich deine persönlich geschaffene Form verändert.",
            "Und beobachte dann, wie deine Kreation mit anderen aus der ganzen Welt zusammenfließt."
        ].join('<br>'),
        "el": [
            "Θα σας κάνουμε μερικές ερωτήσεις.",
            "Υπάρχουν δύο απαντήσεις και μια κλίμακα ανάμεσά τους.",
            "Μετακινήστε το σχήμα στο σημείο που πιστεύετε ότι είναι σωστό.",
            "Δείτε το, καθώς το προσωπικό σας σχήμα αλλάζει.",
            "Έπειτα, δείτε το, καθώς το σχήμα ενώνεται με άλλα από όλο τον κόσμο."
        ].join('<br>'),
        "en": [
            "We’re going to ask you some questions.",
            "There are two responses and a scale between them.",
            "Move your shape to the place that feels right.",
            "Watch as your personal shape changes.",
            "Then watch as your shape joins others from around the world."
        ].join('<br>'),
        "es": [
            "Le vamos a hacer algunas preguntas.",
            "Hay dos respuestas y una escala entre ellas.",
            "Mueva su forma al lugar que crea correcto.",
            "Mire cómo su forma personal cambia.",
            "Entonces, mire cómo su forma se une a otras formas de alrededor del mundo."
        ].join('<br>'),
        "fr": [
            "Nous allons te poser des questions.",
            "Deux réponses sont disponibles, avec une échelle au milieu.",
            "Déplace ta forme vers l'emplacement qui te semble aller le mieux.",
            "Observe l'évolution de ta forme.",
            "Ensuite, observe ta forme en rejoindre d'autres, issues du monde entier."
        ].join('<br>'),
        "it": [
            "Ti verranno poste alcune domande.",
            "Potrai scegliere tra due risposte e una scala di valutazione intermedia.",
            "Sposta la forma nella posizione che ritieni più rispondente alle tue idee.",
            "Osserva come si modifica",
            "e si fonde insieme alle altre forme provenienti da tutto il mondo."
        ].join('<br>'),
        "ja": [
            "質問をいくつか投げかけます。",
            "2つの回答があり、その間に目盛りが付いています。",
            "自分の考えと合致するところに形を移動してください。",
            "自分自身の形が変わっていく様子を観察してください。",
            "そして自分の形が世界中の人々の形に融合されていく様子を観察してください。"
        ].join('<br>'),
        "ko": [
            "몇 가지 질문을 드리도록 하겠습니다.",
            "두 가지 답변이 있으며 답변 사이에는 눈금이 있습니다.",
            "지구형을 움직여 맞다고 생각하는 위치로 지정하세요.",
            "자신만의 지구형이 변화하는 것을 감상하세요.",
            "그리고 내가 만든 지구형이 전 세계 다른 사람들과 어우러지는 모습을 감상하세요."
        ].join('<br>'),
        "pl": [
            "Zadamy Ci kilka pytań.",
            "Dostępne są dwie odpowiedzi i podziałka wskazująca odpowiedzi pośrednie.",
            "Przesuń kształt w miejsce, które wydaje Ci się najodpowiedniejsze.",
            "Sprawdź, jak będzie się zmieniał.",
            "Następnie zobacz, jak Twój kształt łączy się z kształtami z całego świata."
        ].join('<br>'),
        "pt": [
            "Vamos fazer algumas perguntas.",
            "Há duas respostas e uma escala entre elas.",
            "Mova sua forma para o lugar que você acha certo.",
            "Veja como sua forma pessoal muda.",
            "Depois observe como sua forma se junta a outras formas de todo o mundo."
        ].join('<br>'),
        "ru": [
            "Мы собираемся задать Вам несколько вопросов.",
            "Тут есть два ответа и шкала между ними.",
            "Передвиньте форму на место, которое, по Вашему мнению, является наиболее подходящим.",
            "Следите за тем, как изменяется Ваша форма.",
            "Затем смотрите, как Ваша форма присоединяется к другим по всему миру."
        ].join('<br>'),
        "tr": [
            "Size bazı sorular soracağız.",
            "Sorular için, bir ölçek üzerine konumlandırılmış iki cevap mevcuttur.",
            "Şeklinizi, doğru olduğunu düşündüğünüz yere taşıyın.",
            "Kendi şeklinizin nasıl değiştiğini izleyin.",
            "Devamında, kendi şeklinizin dünyanın diğer yerlerindeki şekiller ile nasıl birleştiğini görün."
        ].join('<br>'),
        "zh": [
            "我们会问您一些问题。",
            "有两种答案及相应分数。",
            "将您选择的形状移动到您认为正确的答案处。",
            "观察您个人形状的变化。",
            "然后观察您的形状如何融入世界各地其他人的形状之中。"
        ].join('<br>')
    },
    WARNING: {
        "ar": "كلما زادت سرعة جهاز الكمبيوتر، ستحظى بتجربة أفضل. ",
        "de": "Je leistungsstärker dein Computer, desto befriedigender die Benutzererfahrung. ",
        "el": "Όσο πιο γρήγορος ο υπολογιστής σας, τόσο καλύτερη η εμπειρία σας. ",
        "en": "The faster your computer, the better your experience.",
        "es": "Cuanto más rápido sea su ordenador, mejor será la experiencia. ",
        "fr": "Plus ton ordinateur sera rapide, plus l'expérience sera grisante. ",
        "it": "Più veloce è il computer, migliore sarà l'esperienza. ",
        "ja": "コンピューターの処理速度が速いほど、体験の質が向上します。 ",
        "ko": "컴퓨터가 빠를수록 더 나은 환경에서 이용할 수 있습니다. ",
        "pl": "Im szybszy komputer, tym lepsze wrażenia. ",
        "pt": "Quanto mais rápido seu computador, melhor sua experiência. ",
        "ru": "Чем быстрее Ваш компьютер, тем лучший у Вас опыт.",
        "tr": "Bilgisayarınız ne kadar hızlıysa, deneyiminiz de o kadar iyi olacaktır. ",
        "zh": "您的计算机运行速度越快，您的体验就会越好。"
    },
    NEXT: {
        "ar": "التالي",
        "de": "Weiter",
        "el": "Επόμενο",
        "en": "Next",
        "es": "Siguiente",
        "fr": "Suivant",
        "it": "Avanti",
        "ja": "次へ",
        "ko": "다음",
        "pl": "Następny",
        "pt": "Seguinte",
        "ru": "Дальше",
        "tr": "İleri",
        "zh": "下一项"
    },
    START: {
        "ar": "ابدأ",
        "de": "Start",
        "el": "Έναρξη",
        "en": "Start",
        "es": "Empezar",
        "fr": "Démarrer",
        "it": "Avvio",
        "ja": "スタート",
        "ko": "시작",
        "pl": "Start",
        "pt": "Início",
        "ru": "Старт",
        "tr": "Başlat",
        "zh": "开始"
    },
    BEFORE_SUBMIT: {
        "ar": "أضف الشكل الخاص بك الآن إلى بقية العالم.",
        "de": "Teile nun deine Kreation mit dem Rest der Welt.",
        "el": "Τώρα προσθέστε το σχήμα σας στον υπόλοιπο κόσμο.",
        "en": 'Now add your shape to the rest of the world.',
        "es": "Añada ahora su forma al resto del mundo.",
        "fr": "Ajoute maintenant ta forme au reste du monde.",
        "it": "Aggiungi condividi la tua forma al resto del mondo.",
        "ja": "さあ自分の形を世界中の他の形に追加しましょう。",
        "ko": "이제 내 지구형을 전 세계에 공유하세요.",
        "pl": "Teraz połącz swój kształt z resztą świata.",
        "pt": "Agora adicione sua criação ao resto do mundo.",
        "ru": "Теперь добавьте свою форму к прочему миру.",
        "tr": "Şimdi kendi şeklinizi tüm dünya ile paylaşın.",
        "zh": "现在将您的形状添加至世界的其余位置。"
    },
    DISCLAIMER: {
        "ar": " نسألكم عن سنكم و بلدكم حتى يمكنا فهم كيف يجيب أناس مختلفون في العالم على الأسئلة. سيتم استخدام هذه المعلومات لإظهار النتائج والإحصاءات كجزء من مشروع جمع أوروبا. نقوم باستخدام ملفات تعريف الإرتباط  (الكوكيز).",
        "de": "Wir fragen nach deinem Alter und Wohnsitzland, damit wir nachvollziehen können, wie die Menschen aus aller Welt auf die Fragen antworten. Diese Informationen werden zur Anzeige der Ergebnisse und Statistiken im Rahmen des Projekts Collecting Europe genutzt. Wir verwenden Cookies.",
        "el": "Τώρα προσθέστε το σχήμα σας στον υπόλοιπο κόσμο.",
        "en": 'We ask for your age and country so we can understand how different people across the world answer the questions. This information will be used to show results and statistics as part of the Collecting Europe project. We are using cookies.',
        "es": "Le pedimos su edad y su país de residencia para poder entender cómo las diferentes personas de alrededor del mundo contestan a las preguntas. Esta información se utilizará para mostrar resultados y estadísticas como parte del proyecto Collecting Europe. Utilizamos cookies.",
        "fr": "Nous te demandons ton âge et ton pays pour comprendre comment les personnes du monder entier répondent aux questions. Ces informations seront utilisées pour la présentation des résultats et des statistiques du projet Collecting Europe. Nous utilisons des cookies.",
        "it": "Richiediamo l’età e il paese di provenienza per capire come variano le risposte in base alle diverse persone in tutto il mondo. Queste informazioni verranno inserite nei risultati e nelle statistiche che fanno parte del progetto Collecting Europe. Il nostro sito fa uso di cookie",
        "ja": "世界各国の人々の回答の違いを把握するために、年齢と出身国を伺います。この情報は、Collecting Europeプロジェクトの一部として結果および統計を表示するために使用されます。クッキーを使用しています。",
        "ko": "질문에 답변한 전 세계 사람들의 차이점을 분석하기 위해 나이와 국가를 조사합니다. 수집된 정보는 유럽 설문조사 수집 프로젝트의 일환으로 결과 및 통계를 표시하는 데 사용됩니다. 당사는 쿠키를 사용합니다.",
        "pl": "Pytamy o Twój wiek i kraj pochodzenia, aby dowiedzieć się, jak odpowiadają na pytania ludzie w różnych częściach świata. Informacje te zostaną wykorzystane do wyświetlania wyników i statystyk w ramach projektu Collecting Europe. Używamy ciasteczek (plików cookies).",
        "pt": "Perguntamos sua idade e seu país para poder compreender como diferentes pessoas em todo o mundo respondem às perguntas. Esta informação será utilizada para mostrar resultados e estatísticas como parte do projeto Collecting Europe. Estamos usando cookies.",
        "ru": "Ρωτάμε για την ηλικία και τη χώρα σας, για να καταλάβουμε πώς απαντούν στις ερωτήσεις διαφορετικά άτομα από εντελώς διαφορετικά μέρη του κόσμου. Αυτές οι πληροφορίες θα χρησιμοποιηθούν για την εμφάνιση αποτελεσμάτων και στατιστικών ως μέρος του έργου Collecting Europe. Χρησιμοποιούμε cookies.",
        "tr": "Dünyanın değişik yerlerindeki insanların sorulara ne kadar farklı cevaplar verdiklerini anlayabilmek için sizlere yaşınızı ve yaşadığınız ülkeyi soruyoruz. Bu bilgiler ile elde edilecek sonuçlar ve istatistikler, Collecting Europe projesinin bir parçası olarak kullanılacaktır. Çerezler kullanıyoruz.",
        "zh": "我们询问你的年龄、来自哪个国家，是为了解回答问题的人群之多元性。这些信息将作为 Collecting Europe 项目的组成部分用于展示调查结果及统计数据。我们使用 cookie。"
    },
    META_DESCRIPTION: "Where do your boundaries lie?",
    SHARE: "This shape represents my boundaries for #collectingeurope. Where do your boundaries lie? Play ",
    ERROR: "Your browser can't understand this website. Hold someone. Tell them you love them. <a href='http://browser-update.org/update-browser.html'>Update your browser.</a>",
    EXHIBITION_URL: "collectingeurope.net/exhibition"
};