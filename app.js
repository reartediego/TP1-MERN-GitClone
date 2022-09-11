const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    //Complete with your code
    let varisocode=isoCode;
    for (var i = 0; i < countries.length; i++)
    {
        if (countries[i].iso3==varisocode)
        {
            // Armar objeto y llenarlo, para devolverlo como resultado. Lo dejo dentro del for y del if, porque el codigo ISO3 es único, por lo que solo una vez se producirá.
            // Este es un objeto que se llena en el mismo momento en que se construye.
            // Otra forma posible, me parece que sería de construirlo vacío, y llenarlo luego (aquí se podría usar un for principal que llene todo menos 
            // "timezones", y dentro de este for tener otro for que llene el subarray "timezones" ? Esto pensando en que el subarray timezones podría en algún momento 
            // crecer y tener más de una fila ? Como "timezones" tiene una sola fila, le he colocado fijo el valor [0]).
            const pais = {
                "id": countries[i].id,
                "name": countries[i].name,
                "iso3": countries[i].iso3,
                "iso2": countries[i].iso2,
                "numeric_code": countries[i].numeric_code,
                "phone_code": countries[i].phone_code,
                "capital": countries[i].capital,
                "currency": countries[i].currency,
                "currency_symbol": countries[i].currency_symbol,
                "tld": countries[i].tld,
                "native": countries[i].native,
                "region": countries[i].region,
                "subregion": countries[i].subregion,
                "timezones": [
                    {
                        "zoneName": countries[i].timezones[0].zoneName,
                        "gmtOffset": countries[i].timezones[0].gmtOffset,
                        "gmtOffsetName": countries[i].timezones[0].gmtOffsetName,
                        "abbreviation": countries[i].timezones[0].abbreviation,
                        "tzName": countries[i].timezones[0].tzName
                    }
                ],
                "translations": {
                    "kr": countries[i].translations.kr,
                    "br": countries[i].translations.br,
                    "pt": countries[i].translations.pt,
                    "nl": countries[i].translations.nl,
                    "hr": countries[i].translations.hr,
                    "fa": countries[i].translations.fa,
                    "de": countries[i].translations.de,
                    "es": countries[i].translations.es,
                    "fr": countries[i].translations.fr,
                    "ja": countries[i].translations.ja,
                    "it": countries[i].translations.it,
                    "cn": countries[i].translations.cn
                },
                "latitude": countries[i].latitude,
                "longitude": countries[i].longitude,
                "emoji": countries[i].emoji,
                "emojiU": countries[i].emojiU
            }
            return pais;
        }
    }
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    //Complete with your code
    let varisocode=isoCode;
    let varlanguage=language;
    for (var i = 0; i < countries.length; i++)
    {
        if (countries[i].iso3==varisocode)
        {
            let c;
            c=countries[i].translations[varlanguage];
            return c;
        }
    }
}

/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    //Complete with your code
    let varsubregion=subregion;
    let array2=new Array();
    const arraysubregion=new Array();
    for (var i = 0; i < countries.length; i++)
    {
        if (countries[i].subregion==varsubregion)
        {
           array2 = 
           {
            "id": countries[i].id,
            "name": countries[i].name,
            "iso3": countries[i].iso3,
            "iso2": countries[i].iso2,
            "numeric_code": countries[i].numeric_code,
            "phone_code": countries[i].phone_code,
            "capital": countries[i].capital,
            "currency": countries[i].currency,
            "currency_symbol": countries[i].currency_symbol,
            "tld": countries[i].tld,
            "native": countries[i].native,
            "region": countries[i].region,
            "subregion": countries[i].subregion,
            "timezones": 
                {
                    "zoneName": countries[i].timezones[0].zoneName,
                    "gmtOffset": countries[i].timezones[0].gmtOffset,
                    "gmtOffsetName": countries[i].timezones[0].gmtOffsetName,
                    "abbreviation": countries[i].timezones[0].abbreviation,
                    "tzName": countries[i].timezones[0].tzName
                }
            ,
            "translations": {
                "kr": countries[i].translations.kr,
                "br": countries[i].translations.br,
                "pt": countries[i].translations.pt,
                "nl": countries[i].translations.nl,
                "hr": countries[i].translations.hr,
                "fa": countries[i].translations.fa,
                "de": countries[i].translations.de,
                "es": countries[i].translations.es,
                "fr": countries[i].translations.fr,
                "ja": countries[i].translations.ja,
                "it": countries[i].translations.it,
                "cn": countries[i].translations.cn
            },
            "latitude": countries[i].latitude,
            "longitude": countries[i].longitude,
            "emoji": countries[i].emoji,
            "emojiU": countries[i].emojiU
            }
           arraysubregion.push(array2);
        }
    }
    return arraysubregion;
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();