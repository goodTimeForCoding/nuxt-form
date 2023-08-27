const countries = [
  {
    name: 'Россия',
    code: 'RU',
  },
  {
    name: 'Казахстан',
    code: 'KZ',
  },
  {
    name: 'Беларусь',
    code: 'BY',
  },
  {
    name: 'Афганистан ',
    code: 'AF',
  },
  {
    name: 'Аландские о-ва',
    code: 'AX',
  },
  {
    name: 'Албания',
    code: 'AL',
  },
  {
    name: 'Алжир',
    code: 'DZ',
  },
  {
    name: 'Американское Самоа',
    code: 'AS',
  },
  {
    name: 'Андорра',
    code: 'AD',
  },
  {
    name: 'Ангола',
    code: 'AO',
  },
  {
    name: 'Ангилья',
    code: 'AI',
  },
  {
    name: 'Антарктида',
    code: 'AQ',
  },
  {
    name: 'Антигуа и Барбуда',
    code: 'AG',
  },
  {
    name: 'Аргентина',
    code: 'AR',
  },
  {
    name: 'Армения',
    code: 'AM',
  },
  {
    name: 'Аруба',
    code: 'AW',
  },
  {
    name: 'Австралия',
    code: 'AU',
  },
  {
    name: 'Австрия',
    code: 'AT',
  },
  {
    name: 'Азербайджан',
    code: 'AZ',
  },
  {
    name: 'Багамы',
    code: 'BS',
  },
  {
    name: 'Бахрейн',
    code: 'BH',
  },
  {
    name: 'Бангладеш',
    code: 'BD',
  },
  {
    name: 'Барбадос',
    code: 'BB',
  },
  {
    name: 'Бельгия',
    code: 'BE',
  },
  {
    name: 'Белиз',
    code: 'BZ',
  },
  {
    name: 'Бенин',
    code: 'BJ',
  },
  {
    name: 'Бермудские о-ва',
    code: 'BM',
  },
  {
    name: 'Бутан',
    code: 'BT',
  },
  {
    name: 'Боливия',
    code: 'BO',
  },
  {
    name: 'Босния и Герцеговина',
    code: 'BA',
  },
  {
    name: 'Ботсвана',
    code: 'BW',
  },
  {
    name: 'Остров Буве',
    code: 'BV',
  },
  {
    name: 'Бразилия',
    code: 'BR',
  },
  {
    name: 'Британская территория в Индийском океане',
    code: 'IO',
  },
  {
    name: 'Бруней-Даруссалам',
    code: 'BN',
  },
  {
    name: 'Болгария',
    code: 'BG',
  },
  {
    name: 'Буркина-Фасо',
    code: 'BF',
  },
  {
    name: 'Бурунди',
    code: 'BI',
  },
  {
    name: 'Камбоджа',
    code: 'KH',
  },
  {
    name: 'Камерун',
    code: 'CM',
  },
  {
    name: 'Канада',
    code: 'CA',
  },
  {
    name: 'Кабо-Верде',
    code: 'CV',
  },
  {
    name: 'Острова Кайман',
    code: 'KY',
  },
  {
    name: 'Центрально-Африканская Республика',
    code: 'CF',
  },
  {
    name: 'Чад',
    code: 'TD',
  },
  {
    name: 'Чили',
    code: 'CL',
  },
  {
    name: 'Китай',
    code: 'CN',
  },
  {
    name: 'о-в Рождества',
    code: 'CX',
  },
  {
    name: 'Кокосовые о-ва',
    code: 'CC',
  },
  {
    name: 'Колумбия',
    code: 'CO',
  },
  {
    name: 'Коморы',
    code: 'KM',
  },
  {
    name: 'Конго - Браззавиль',
    code: 'CG',
  },
  {
    name: 'Конго - Киншаса',
    code: 'CD',
  },
  {
    name: 'Острова Кука',
    code: 'CK',
  },
  {
    name: 'Коста-Рика',
    code: 'CR',
  },
  {
    name: 'Кот-д’Ивуар',
    code: 'CI',
  },
  {
    name: 'Хорватия',
    code: 'HR',
  },
  {
    name: 'Куба',
    code: 'CU',
  },
  {
    name: 'Кипр',
    code: 'CY',
  },
  {
    name: 'Чехия',
    code: 'CZ',
  },
  {
    name: 'Дания',
    code: 'DK',
  },
  {
    name: 'Джибути',
    code: 'DJ',
  },
  {
    name: 'Доминика',
    code: 'DM',
  },
  {
    name: 'Доминиканская Республика',
    code: 'DO',
  },
  {
    name: 'Эквадор',
    code: 'EC',
  },
  {
    name: 'Египет',
    code: 'EG',
  },
  {
    name: 'Сальвадор',
    code: 'SV',
  },
  {
    name: 'Экваториальная Гвинея',
    code: 'GQ',
  },
  {
    name: 'Эритрея',
    code: 'ER',
  },
  {
    name: 'Эстония',
    code: 'EE',
  },
  {
    name: 'Эфиопия',
    code: 'ET',
  },
  {
    name: 'Фолклендские о-ва',
    code: 'FK',
  },
  {
    name: 'Фарерские о-ва',
    code: 'FO',
  },
  {
    name: 'Фиджи',
    code: 'FJ',
  },
  {
    name: 'Финляндия',
    code: 'FI',
  },
  {
    name: 'Франция',
    code: 'FR',
  },
  {
    name: 'Французская Гвиана',
    code: 'GF',
  },
  {
    name: 'Французская Полинезия',
    code: 'PF',
  },
  {
    name: 'Французские Южные территории',
    code: 'TF',
  },
  {
    name: 'Габон',
    code: 'GA',
  },
  {
    name: 'Гамбия',
    code: 'GM',
  },
  {
    name: 'Грузия',
    code: 'GE',
  },
  {
    name: 'Германия',
    code: 'DE',
  },
  {
    name: 'Гана',
    code: 'GH',
  },
  {
    name: 'Гибралтар',
    code: 'GI',
  },
  {
    name: 'Греция',
    code: 'GR',
  },
  {
    name: 'Гренландия',
    code: 'GL',
  },
  {
    name: 'Гренада',
    code: 'GD',
  },
  {
    name: 'Гваделупа',
    code: 'GP',
  },
  {
    name: 'Гуам',
    code: 'GU',
  },
  {
    name: 'Гватемала',
    code: 'GT',
  },
  {
    name: 'Гернси',
    code: 'GG',
  },
  {
    name: 'Гвинея',
    code: 'GN',
  },
  {
    name: 'Гвинея-Бисау',
    code: 'GW',
  },
  {
    name: 'Гайана',
    code: 'GY',
  },
  {
    name: 'Гаити',
    code: 'HT',
  },
  {
    name: 'Острова Херд и Макдональд',
    code: 'HM',
  },
  {
    name: 'Ватикан',
    code: 'VA',
  },
  {
    name: 'Гондурас',
    code: 'HN',
  },
  {
    name: 'Гонконг',
    code: 'HK',
  },
  {
    name: 'Венгрия',
    code: 'HU',
  },
  {
    name: 'Исландия',
    code: 'IS',
  },
  {
    name: 'Индия',
    code: 'IN',
  },
  {
    name: 'Индонезия',
    code: 'ID',
  },
  {
    name: 'Иран',
    code: 'IR',
  },
  {
    name: 'Ирак',
    code: 'IQ',
  },
  {
    name: 'Ирландия',
    code: 'IE',
  },
  {
    name: 'о-в Мэн',
    code: 'IM',
  },
  {
    name: 'Израиль',
    code: 'IL',
  },
  {
    name: 'Италия',
    code: 'IT',
  },
  {
    name: 'Ямайка',
    code: 'JM',
  },
  {
    name: 'Япония',
    code: 'JP',
  },
  {
    name: 'Джерси',
    code: 'JE',
  },
  {
    name: 'Иордания',
    code: 'JO',
  },
  {
    name: 'Кения',
    code: 'KE',
  },
  {
    name: 'Кирибати',
    code: 'KI',
  },
  {
    name: 'КНДР',
    code: 'KP',
  },
  {
    name: 'Республика Корея',
    code: 'KR',
  },
  {
    name: 'Кувейт',
    code: 'KW',
  },
  {
    name: 'Киргизия',
    code: 'KG',
  },
  {
    name: 'Лаос',
    code: 'LA',
  },
  {
    name: 'Латвия',
    code: 'LV',
  },
  {
    name: 'Ливан',
    code: 'LB',
  },
  {
    name: 'Лесото',
    code: 'LS',
  },
  {
    name: 'Либерия',
    code: 'LR',
  },
  {
    name: 'Ливия',
    code: 'LY',
  },
  {
    name: 'Лихтенштейн',
    code: 'LI',
  },
  {
    name: 'Литва',
    code: 'LT',
  },
  {
    name: 'Люксембург',
    code: 'LU',
  },
  {
    name: 'Макао',
    code: 'MO',
  },
  {
    name: 'Северная Македония',
    code: 'MK',
  },
  {
    name: 'Мадагаскар',
    code: 'MG',
  },
  {
    name: 'Малави',
    code: 'MW',
  },
  {
    name: 'Малайзия',
    code: 'MY',
  },
  {
    name: 'Мальдивы',
    code: 'MV',
  },
  {
    name: 'Мали',
    code: 'ML',
  },
  {
    name: 'Мальта',
    code: 'MT',
  },
  {
    name: 'Маршалловы Острова',
    code: 'MH',
  },
  {
    name: 'Мартиника',
    code: 'MQ',
  },
  {
    name: 'Мавритания',
    code: 'MR',
  },
  {
    name: 'Маврикий',
    code: 'MU',
  },
  {
    name: 'Майотта',
    code: 'YT',
  },
  {
    name: 'Мексика',
    code: 'MX',
  },
  {
    name: 'Федеративные Штаты Микронезии',
    code: 'FM',
  },
  {
    name: 'Молдова',
    code: 'MD',
  },
  {
    name: 'Монако',
    code: 'MC',
  },
  {
    name: 'Монголия',
    code: 'MN',
  },
  {
    name: 'Монтсеррат',
    code: 'MS',
  },
  {
    name: 'Марокко',
    code: 'MA',
  },
  {
    name: 'Мозамбик',
    code: 'MZ',
  },
  {
    name: 'Мьянма (Бирма)',
    code: 'MM',
  },
  {
    name: 'Намибия',
    code: 'NA',
  },
  {
    name: 'Науру',
    code: 'NR',
  },
  {
    name: 'Непал',
    code: 'NP',
  },
  {
    name: 'Нидерланды',
    code: 'NL',
  },
  {
    name: 'Нидерландские Антильские о-ва',
    code: 'AN',
  },
  {
    name: 'Новая Каледония',
    code: 'NC',
  },
  {
    name: 'Новая Зеландия',
    code: 'NZ',
  },
  {
    name: 'Никарагуа',
    code: 'NI',
  },
  {
    name: 'Нигер',
    code: 'NE',
  },
  {
    name: 'Нигерия',
    code: 'NG',
  },
  {
    name: 'Ниуэ',
    code: 'NU',
  },
  {
    name: 'о-в Норфолк',
    code: 'NF',
  },
  {
    name: 'Северные Марианские о-ва',
    code: 'MP',
  },
  {
    name: 'Норвегия',
    code: 'NO',
  },
  {
    name: 'Оман',
    code: 'OM',
  },
  {
    name: 'Пакистан',
    code: 'PK',
  },
  {
    name: 'Палау',
    code: 'PW',
  },
  {
    name: 'Палестинские территории',
    code: 'PS',
  },
  {
    name: 'Панама',
    code: 'PA',
  },
  {
    name: 'Папуа — Новая Гвинея',
    code: 'PG',
  },
  {
    name: 'Парагвай',
    code: 'PY',
  },
  {
    name: 'Перу',
    code: 'PE',
  },
  {
    name: 'Филиппины',
    code: 'PH',
  },
  {
    name: 'о-ва Питкэрн',
    code: 'PN',
  },
  {
    name: 'Польша',
    code: 'PL',
  },
  {
    name: 'Португалия',
    code: 'PT',
  },
  {
    name: 'Пуэрто-Рико',
    code: 'PR',
  },
  {
    name: 'Катар',
    code: 'QA',
  },
  {
    name: 'Реюньон',
    code: 'RE',
  },
  {
    name: 'Румыния',
    code: 'RO',
  },
  {
    name: 'Руанда',
    code: 'RW',
  },
  {
    name: 'о-в Св. Елены',
    code: 'SH',
  },
  {
    name: 'Сент-Китс и Невис',
    code: 'KN',
  },
  {
    name: 'Сент-Люсия',
    code: 'LC',
  },
  {
    name: 'Сен-Пьер и Микелон',
    code: 'PM',
  },
  {
    name: 'Сент-Винсент и Гренадины',
    code: 'VC',
  },
  {
    name: 'Самоа',
    code: 'WS',
  },
  {
    name: 'Сан-Марино',
    code: 'SM',
  },
  {
    name: 'Сан-Томе и Принсипи',
    code: 'ST',
  },
  {
    name: 'Саудовская Аравия',
    code: 'SA',
  },
  {
    name: 'Сенегал',
    code: 'SN',
  },
  {
    name: 'Сербия и Черногория',
    code: 'CS',
  },
  {
    name: 'Сейшельские Острова',
    code: 'SC',
  },
  {
    name: 'Сьерра-Леоне',
    code: 'SL',
  },
  {
    name: 'Сингапур',
    code: 'SG',
  },
  {
    name: 'Словакия',
    code: 'SK',
  },
  {
    name: 'Словения',
    code: 'SI',
  },
  {
    name: 'Соломоновы Острова',
    code: 'SB',
  },
  {
    name: 'Сомали',
    code: 'SO',
  },
  {
    name: 'Южно-Африканская Республика',
    code: 'ZA',
  },
  {
    name: 'Южная Георгия и Южные Сандвичевы о-ва',
    code: 'GS',
  },
  {
    name: 'Испания',
    code: 'ES',
  },
  {
    name: 'Шри-Ланка',
    code: 'LK',
  },
  {
    name: 'Судан',
    code: 'SD',
  },
  {
    name: 'Суринам',
    code: 'SR',
  },
  {
    name: 'Шпицберген и Ян-Майен',
    code: 'SJ',
  },
  {
    name: 'Эсватини',
    code: 'SZ',
  },
  {
    name: 'Швеция',
    code: 'SE',
  },
  {
    name: 'Швейцария',
    code: 'CH',
  },
  {
    name: 'Сирия',
    code: 'SY',
  },
  {
    name: 'Тайвань',
    code: 'TW',
  },
  {
    name: 'Таджикистан',
    code: 'TJ',
  },
  {
    name: 'Танзания',
    code: 'TZ',
  },
  {
    name: 'Таиланд',
    code: 'TH',
  },
  {
    name: 'Восточный Тимор',
    code: 'TL',
  },
  {
    name: 'Того',
    code: 'TG',
  },
  {
    name: 'Токелау',
    code: 'TK',
  },
  {
    name: 'Тонга',
    code: 'TO',
  },
  {
    name: 'Тринидад и Тобаго',
    code: 'TT',
  },
  {
    name: 'Тунис',
    code: 'TN',
  },
  {
    name: 'Турция',
    code: 'TR',
  },
  {
    name: 'Туркменистан',
    code: 'TM',
  },
  {
    name: 'о-ва Тёркс и Кайкос',
    code: 'TC',
  },
  {
    name: 'Тувалу',
    code: 'TV',
  },
  {
    name: 'Уганда',
    code: 'UG',
  },
  {
    name: 'Украина',
    code: 'UA',
  },
  {
    name: 'ОАЭ',
    code: 'AE',
  },
  {
    name: 'Великобритания',
    code: 'GB',
  },
  {
    name: 'Соединенные Штаты',
    code: 'US',
  },
  {
    name: 'Внешние малые о-ва (США)',
    code: 'UM',
  },
  {
    name: 'Уругвай',
    code: 'UY',
  },
  {
    name: 'Узбекистан',
    code: 'UZ',
  },
  {
    name: 'Вануату',
    code: 'VU',
  },
  {
    name: 'Венесуэла',
    code: 'VE',
  },
  {
    name: 'Вьетнам',
    code: 'VN',
  },
  {
    name: 'Виргинские о-ва (Великобритания)',
    code: 'VG',
  },
  {
    name: 'Виргинские о-ва (США)',
    code: 'VI',
  },
  {
    name: 'Уоллис и Футуна',
    code: 'WF',
  },
  {
    name: 'Западная Сахара',
    code: 'EH',
  },
  {
    name: 'Йемен',
    code: 'YE',
  },
  {
    name: 'Замбия',
    code: 'ZM',
  },
  {
    name: 'Зимбабве',
    code: 'ZW',
  },
];

export default countries;