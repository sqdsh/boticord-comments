// Comment place holder changer
let commentplaceholders = [
    "\"Введите сюда свой замечательный, взвешенный и неподкупный комментарий к боту!\" ©️ VARE",
    "\"Введите сюда свой отвратительный, ненужный и подкупный комментарий к боту!\" ©️ VARE",
    "\"Тыкайте по буковкам, чтобы написать слова\" ©️ egor_m",
    "\":troled: :thumbsup:\" ©️ KosEnO4eK",
    "\"до связи\" ©️ elemelkya",
    "\"super-botsuper-botsuper-botsuper-botsuper-\" ©️ elemelkya",
    "\"Чё каво? Куда? Откуда как? А чё круто.\" ©️ KosEnO4eK",
    "\"эхх..\" ©️ sadlycipherka",
    "\"ну пиши уже сюда.\" ©️ sadlycipherka",
    "\"Москва проснулась\" ©️ D1nos4urr",
    "\":kavo:\" ©️ Redichka (perssBest)",
    "\"Ало че ищешь?\" ©️ Redichka (perssBest)",
    "\"Чё смотришь, пиши уже\" ©️ Redichka (perssBest)",
    "\"Ну.. Напиши уже что-нибудь...\" ©️ Redichka (perssBest)",
    "\"Ну так ты писать будешь или мне самим написать?\" ©️ Redichka (perssBest)",
    "\"ААААААААААААА\" ©️ Redichka (perssBest)",
    "\":yeah:\" ©️ MrLivixx",
    "\"Ну что, по коням!\" ©️ Harume",
    "\"Вау, это комментарии?\" ©️ Harume",
    "\"Напиши негативный отзыв, и жди прихода создателя бота с его милой овчаркой...\" ©️ Angrymouse",
    "\"Напишите ваш необычный и подробный комментарий!\" ©️ Пэйз",
    "\"Напечатайте ваши слова, чтобы их видели другие!\" ©️ Пэйз",
    "\"КАК ЭТА ШТУКА РАБОТАЕТ!??!?!\" ©️ neppedboy",
    "\"Напишите своё заклинание, что бы получить эффект магии!\" ©️ neppedboy",
    "\"Введите свой комментарий и получите плюшевую и мягкую Непку в подарок\" ©️ neppedboy",
    "\"Пожалуйста, сделайте такой комментарий, который не тронет ничьё сердечко, это важно!\" @ neppedboy",
    "\"Ребятки, пожалуйста не делайте никому больно своими словечками! >__<\" ©️ neppedboy",
    "\":chereshnya:\" ©️ SunRise",
    "\"klas :thumbsup:\" ©️ SunRise",
    "\"ПИШИ СЮДА СВОИ СЛОВА\" ©️ kotikD3V",
    "\"А Я ЗАБЫЛ ЧТО ТАКОЕ СЛОВА :vadimEatPopcorn:\" ©️ kotikD3V",
    "\"Напиши свой крутой комментарий и получи Discord Nitro!\" ©️ kotfix.",
    "\"ЕЩЁ И ПОДРОБНЫЙ КОММЕНТАРИЙ!\" ©️ GenAi (boticord.top/bot/genai)",
    "\"мы растем\" ©️ GenAi (boticord.top/bot/genai)",
    "\"Введите комментарий...\" ©️ SMOKY PLAY",
    "\":kavo:\" ©️ Mrsasha45op",
    "\"Позвоните мне для справки о поиске: 8-800-555-35-35\" ©️ Okayu-chan",
    "\"Где я? Кто я? Что я?\" ©️ TheDariol",
    "\":achevsmysle:\"",
    "\"чел ты... комментарий пиши давай :sliva:\" ©️ TheFerryn",
    "\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" ©️ sadnessmilkshake",
    "\"Люблю Егора ❤\" ©️ sadnessmilkshake",
    "\"Вайфу Влада ❤\" ©️ sadnessmilkshake",
    "\"Чумба, ты совсем ***? Сходи к мозгоправу, попей колёсики.\" ©️ MrLivixx",
    "\"С новым майсом\" ©️ egor_m",
    "\"В Firefox нужно нажать клавишу Tab минимум 17 раз, чтобы начать писать комментарий.\" ©️ Tegnio",
    "\"Главное работает, а как, не имеет значения.\" © Mellow",
    "\"Восстание машин наступит совсем скоро!\" © Mellow",
    "\"Они жаловались что бот лагает, но я двигал рычаги, пока не услышал щелчок. Все вроде удачно.\" ©️ Naomi",
    "\"Чтобы написать коментарий, нужно забить гвоздь в кнопку Enter\" ©️ MrLivixx",
    "\"حسنًا ، لماذا قررت ترجمتها ...😂😂😂\" ©️ arslee",
    "\"Напиши здесь свой няшный комментарий, милашка.\" © Масерка",
    "Вставьте и ВЫ свой комментарий! https://github.com/sqdsh/boticord-comments",
    "\"Ох уж эти питонисты...\" ©️ Harume", // Осуждаю
    "\"ReferenceError: BotiCord is not function\" ©️ Harume",
    "\"Чёрт... и это как вариант!\" ©️ Harume",
    "\"CTRL+F5\" ©️ elemelkya",
    "\"ЕЩЕ РАЗ ПОВТОРЯЮ: CTRL+F5\" ©️ elemelkya",
    "\"Вот ты ему ручкой машешь, а он тебя ^_^ хочет!\" ©️ evgen1y",
    "\"やめてください\" ©️ evgen1y",
    "\"ПОЧЕМУ??? ПОЧЕМУ??? ПОЧЕМУ ЭТОТ БОТ ТАКОЙ ИДЕАЛЬНЫЙ???\" ©️ san4ouZ",
    "\"ДАВАЙ! СДЕЛАЙ ЭТО! ТЫ-ЖЕ ТАК ЭТОГО ХОЧЕШЬ!\" ©️ san4ouZ",
    "\"А как тут что переключать\" ©️ MillerD3V",
    "\"КУДА ТЫКОТЬ?????\" ©️ MillerD3V",
    "\"Смотри сюда :persevere:\" ©️ MillerD3V",
    "\":zhmihClown:\" ©️ MillerD3V",
    "\"C КАКОЙ КСТАТИ ААAAAAA?!\" ©️ helldoodle",
    "\"Uncaught TypeError: Cannot read property comment of undefined\" ©️ Tegnio",
    "\"хочу сыр косичку!\" ©️ TheMisterSenpai"
];

let randomizedcomment = commentplaceholders[Math.floor(Math.random() * commentplaceholders.length)];
let commentplaceholder = document.getElementById("commentBody");
if(commentplaceholder) commentplaceholder.placeholder = randomizedcomment;

let searchplaceholders = [
    "Циферка, что ты сделал?",
    "Nep-nep? Nep-nep!",
    "Поиск...",
    "Сделайте свой запросик и получите новенького ботика к себе в домик!~",
    "Если вы сделаете запросик то получите плюшевую Неп-Неп"
];

let randomizedsearch = searchplaceholders[Math.floor(Math.random() * searchplaceholders.length)];
let searchplaceholder = document.getElementById("searchBot");
if(searchplaceholder) searchplaceholder.placeholder = randomizedsearch;
