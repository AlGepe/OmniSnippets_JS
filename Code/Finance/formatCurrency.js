/* 
 * AUTHOR: Tibor Pal
 *
 * Creates a string of perfectly formatted monetary value including 
 * currency symbol and separator.
 *
 * INPUTS: "number" Monetary value as a number
 * 	       "currencySymbol" Symbol of user's currency 
 * 	      								 (you can use ctx.getCurrencySymbol inside onResult)
 * 	      "country" 2 letter country code for user's country
 * 	      								 (hint: ctx.getCountryCode inside onInit)
 * 	OUTPUT: (string) number formated as dictated by user's location and currency
 *
 * 	REQUIRES: numberWithCommas  (in folder "Miscelaneous")
 * 	WARNING: Don't forget to copy the data arrays/objects bellow the function
*/
function formatCurrency (number, currencySymbol, country) {
	if (!country || !currencySymbol) {
		return '$' + numberWithCommas(Math.round(number, 2));
	}
	// exclusion from function due to ambiguous currency symbol or not English numeric
	if (manualFormatBefore.includes(country)) {
		// currency symbol before the value
		return currencySymbol + ' ' + numberWithCommas(Math.round(number, 2));
	} else if (manualFormatAfter.includes(country)) {
		// currency symbol after the value
		return numberWithCommas(Math.round(number, 2)) + ' ' + currencySymbol;
	} else {
		currencyCode = autoFormatCountries[country] ? autoFormatCountries[country][1] : 'USD';
		userLang = autoFormatCountries[country] ? autoFormatCountries[country][0] : 'en-US';		
		return number.toLocaleString(userLang, {
			style: 'currency',
			currency: currencyCode
		});
	}
}

var manualFormatBefore = [
	'BH',
	'BJ',
	'BT',
	'CN',
	'EG',
	'ET',
	'GH',
	'GN',
	'IS',
	'IQ',
	'IL',
	'JO',
	'KW',
	'LB',
	'MV',
	'MN',
	'MZ',
	'MM',
	'NA',
	'NP',
	'OM',
	'PH',
	'QA',
	'SA',
	'SD',
	'CH',
	'SY',
	'TG',
	'TM',
	'UG',
	'UY',
	'UZ',
	'YE',
	'ZW',
	'IN'
];

var manualFormatAfter = [
	'AF',
	'BD',
	'BY',
	'BF',
	'TD',
	'KM',
	'DJ',
	'ER',
	'GW',
	'IR',
	'ML',
	'MR',
	'NE',
	'RO',
	'ST',
	'SN',
	'RS',
	'SO',
	'UA',
	'AE'
];

var autoFormatCountries = {
	AL: ['sq-AL', 'ALL'], //Albania
	DZ: ['ar-DZ', 'DZD'], //Algeria
	AS: ['en-AS', 'USD'], //American Samoa
	AD: ['ca-AD', 'EUR'], //Andorra
	AO: ['ln-AO', 'AOA'], //Angola
	AI: ['en-AI', 'XCD'], //Anguilla
	AG: ['en-AG', 'XCD'], //Antigua AndBarbuda
	AR: ['es-AR', 'ARS'], //Argentina
	AM: ['hy-AM', 'AMD'], //Armenia
	AW: ['nl-AW', 'AWG'], //Aruba
	AU: ['en-AU', 'AUD'], //Australia
	AT: ['de-AT', 'EUR'], //Austria
	AZ: ['az-AZ', 'AZN'], //Azerbaijan
	BS: ['en-BS', 'BSD'], //Bahamas
	BB: ['en-BB', 'BBD'], //Barbados
	BE: ['de-BE', 'EUR'], //Belgium
	BZ: ['en-BZ', 'BZD'], //Belize
	BM: ['en-BM', 'BMD'], //Bermuda
	BA: ['bs-BA', 'BAM'], //Bosnia And Herzegovina
	BW: ['en-BW', 'BWP'], //Botswana
	BV: ['no-BV', 'NOK'], //Bouvet Island
	BR: ['pt-BR', 'BRL'], //Brazil
	IO: ['en-IO', 'USD'], //British Indian Ocean Territory
	BN: ['ms-BN', 'BND'], //Brunei Darussalam
	BG: ['bg-BG', 'BGN'], //Bulgaria
	BI: ['en-BI', 'BIF'], //Burundi
	KH: ['km-KH', 'KHR'], //Cambodia
	CM: ['agq-CM', 'XAF'], //Cameroon
	CA: ['en-CA', 'CAD'], //Canada
	KY: ['en-KY', 'KYD'], //Cayman Islands
	CF: ['fr-CF', 'XAF'], //Central African Republic
	CL: ['es-CL', 'CLF'], //Chile
	CX: ['en-CX', 'AUD'], //Christmas Island
	CC: ['en-CC', 'AUD'], //Cocos (Keeling) Islands
	CO: ['es-CO', 'COP'], //Colombia
	CG: ['fr-CG', 'XAF'], //Congo
	CK: ['en-CK', 'NZD'], //Cook Islands
	CR: ['es-CR', 'CRC'], //Costa Rica
	HR: ['hr-HR', 'HRK'], //Croatia
	CU: ['es-CU', 'CUC'], //Cuba
	CY: ['el-CY', 'EUR'], //Cyprus
	CZ: ['cs-CZ', 'CZK'], //Czech Republic
	DK: ['da-DK', 'DKK'], //Denmark
	DM: ['en-DM', 'XCD'], //Dominica
	DO: ['es-DO', 'DOP'], //Dominican Republic
	EC: ['es-EC', 'USD'], //Ecuador
	SV: ['es-SV', 'SVC'], //El Salvador
	GQ: ['es-GQ', 'XAF'], //Equatorial Guinea
	EE: ['et-EE', 'EUR'], //Estonia
	FO: ['fo-FO', 'DKK'], //Faroe Islands
	FJ: ['en-FJ', 'FJD'], //Fiji
	FI: ['fi-FI', 'EUR'], //Finland
	FR: ['fr-FR', 'EUR'], //France
	GF: ['fr-GF', 'EUR'], //French Guiana
	PF: ['fr-PF', 'XPF'], //French Polynesia
	TF: ['fr-TF', 'EUR'], //French Southern Territories
	GA: ['fr-GA', 'XAF'], //Gabon
	GM: ['en-GM', 'GMD'], //Gambia
	GE: ['ka-GE', 'GEL'], //Georgia
	DE: ['de-DE', 'EUR'], //Germany
	GI: ['en-GI', 'GIP'], //Gibraltar
	GR: ['el-GR', 'EUR'], //Greece
	GL: ['da-GL', 'DKK'], //Greenland
	GD: ['en-GD', 'XCD'], //Grenada
	GP: ['fr-GP', 'EUR'], //Guadeloupe
	GU: ['en-GU', 'USD'], //Guam
	GT: ['es-GT', 'GTQ'], //Guatemala
	GG: ['en-GG', 'GBP'], //Guernsey
	GY: ['en-GY', 'GYD'], //Guyana
	HT: ['fr-HT', 'HTG'], //Haiti
	VA: ['it-VA', 'EUR'], //Holy See (Vatican City State)
	HN: ['es-HN', 'HNL'], //Honduras
	HK: ['en-HK', 'HKD'], //Hong Kong
	HU: ['hu-HU', 'HUF'], //Hungary
	ID: ['id-ID', 'IDR'], //Indonesia
	IE: ['en-IE', 'EUR'], //Ireland
	IM: ['en-IM', 'GBP'], //Isle Of Man
	IT: ['it-IT', 'EUR'], //Italy
	JM: ['en-JM', 'JMD'], //Jamaica
	JP: ['ja-JP', 'JPY'], //Japan
	JE: ['en-JE', 'GBP'], //Jersey
	KZ: ['kk-KZ', 'KZT'], //Kazakhstan
	KE: ['dav-KE', 'KES'], //Kenya
	KI: ['en-KI', 'AUD'], //Kiribati
	KR: ['ko-KR', 'KRW'], //South Korea
	KG: ['ky-KG', 'KGS'], //Kyrgyzstan
	LV: ['lv-LV', 'EUR'], //Latvia
	LS: ['en-LS', 'LSL'], //Lesotho
	LR: ['en-LR', 'LRD'], //Liberia
	LI: ['de-LI', 'CHF'], //Liechtenstein
	LT: ['lt-LT', 'EUR'], //Lithuania
	LU: ['de-LU', 'EUR'], //Luxembourg
	MO: ['en-MO', 'MOP'], //Macao
	MG: ['en-MG', 'MGA'], //Madagascar
	MW: ['en-MW', 'MWK'], //Malawi
	MY: ['en-MY', 'MYR'], //Malaysia
	MT: ['en-MT', 'EUR'], //Malta
	MH: ['en-MH', 'USD'], //Marshall Islands
	MQ: ['fr-MQ', 'EUR'], //Martinique
	MU: ['en-MU', 'MUR'], //Mauritius
	YT: ['fr-YT', 'EUR'], //Mayotte
	MX: ['es-MX', 'MXN'], //Mexico
	FM: ['en-FM', 'USD'], //Micronesia
	MC: ['fr-MC', 'EUR'], //Monaco
	ME: ['sr-ME', 'EUR'], //Montenegro
	MS: ['en-MS', 'XCD'], //Montserrat
	MA: ['en-MA', 'MAD'], //Morocco
	NR: ['en-NR', 'AUD'], //Nauru
	NL: ['en-NL', 'EUR'], //Netherlands
	NC: ['fr-NC', 'XPF'], //New Caledonia
	NZ: ['en-NZ', 'NZD'], //New Zealand
	NI: ['es-NI', 'NIO'], //Nicaragua
	NG: ['en-NG', 'NGN'], //Nigeria
	NU: ['en-NU', 'NZD'], //Niue
	NF: ['en-NF', 'AUD'], //Norfolk Island
	MP: ['en-MP', 'USD'], //Northern Mariana Islands
	NO: ['nb-NO', 'NOK'], //Norway
	PK: ['en-PK', 'PKR'], //Pakistan
	PW: ['en-PW', 'USD'], //Palau
	PA: ['es-PA', 'PAB'], //Panama
	PG: ['en-PG', 'PGK'], //Papua New Guinea
	PY: ['es-PY', 'PYG'], //Paraguay
	PE: ['es-PE', 'PEN'], //Peru
	PN: ['en-PN', 'NZD'], //Pitcairn
	PL: ['pl-PL', 'PLN'], //Poland
	PT: ['pt-PT', 'EUR'], //Portugal
	PR: ['en-PR', 'USD'], //Puerto Rico
	RU: ['ru-RU', 'RUB'], //Russian Federation
	RW: ['en-RW', 'RWF'], //Rwanda
	KN: ['en-KN', 'XCD'], //Saint Kitts And Nevis
	LC: ['en-LC', 'XCD'], //Saint Lucia
	PM: ['fr-PM', 'EUR'], //Saint Pierre And Miquelon
	WS: ['en-WS', 'WST'], //Samoa
	SM: ['it-SM', 'EUR'], //San Marino
	SC: ['en-SC', 'SCR'], //Seychelles
	SL: ['en-SL', 'SLL'], //Sierra Leone
	SG: ['en-SG', 'SGD'], //Singapore
	SK: ['sk-SK', 'EUR'], //Slovakia
	SI: ['sl-SI', 'EUR'], //Slovenia
	SB: ['en-SB', 'SBD'], //Solomon Islands
	ZA: ['af-ZA', 'ZAR'], //South Africa
	ES: ['es-ES', 'EUR'], //Spain
	LK: ['si-LK', 'LKR'], //Sri Lanka
	SR: ['nl-SR', 'SRD'], //Suriname
	SJ: ['nb-SJ', 'NOK'], //Svalbard And Jan Mayen
	SZ: ['en-SZ', 'SZL'], //Swaziland
	SE: ['en-SE', 'SEK'], //Sweden
	TJ: ['tg-TJ', 'TJS'], //Tajikistan
	TH: ['th-TH', 'THB'], //Thailand
	TL: ['pt-TL', 'USD'], //Timor-Leste
	TK: ['en-TK', 'NZD'], //Tokelau
	TO: ['en-TO', 'TOP'], //Tonga
	TT: ['en-TT', 'TTD'], //Trinidad And Tobago
	TN: ['ar-TN', 'TND'], //Tunisia
	TR: ['tr-TR', 'TRY'], //Turkey
	TC: ['en-TC', 'USD'], //Turks And Caicos Islands
	TV: ['en-TV', 'AUD'], //Tuvalu
	GB: ['en-GB', 'GBP'], //United Kingdom
	US: ['en-US', 'USD'], //United States
	VU: ['en-VU', 'VUV'], //Vanuatu
	VN: ['vi-VN', 'VND'], //Vietnam
	WF: ['fr-WF', 'XPF'], //Wallis And Futuna
	EH: ['ar-EH', 'MAD'], //Western Sahara
	ZM: ['bem-ZM', 'ZMW'] //Zambia
};
