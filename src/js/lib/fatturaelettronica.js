/*
 * Xeader Studios
 *
 * NOTICE OF LICENCE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt
 * It is also available through th world-wide-web at this URL:
 * https://xeader.com/LICENCE-CE.txt
 *
 * @category telethon-landings
 * @package telethon-landings
 *
 * @author Antonio Gatta <a.gatta@xeader.com>
 * @url http://xeader.com
 * @copyright Copyright (c) 2019 Xeader Studios
 * @license All right reserved
 */

/**
 * Verifica validità del codice di controllo del codice fiscale.
 * Il valore vuoto è "valido" per semplificare la logica di verifica
 * dell'input, assumendo che l'eventuale l'obbligatorietà del campo
 * sia oggetto di un controllo e retroazione distinti.
 * @version 2016-12-05
 * @return string Stringa vuota se il codice di controllo è
 * corretto oppure il valore è vuoto, altrimenti un messaggio
 * che descrive perché il valore non può essere valido.
 * @param cf string
 */
export function checkCF(cf) {
    cf = cf.toUpperCase().replace(/\s/g, '');

    if (!/^[0-9A-Z]{16}$/.test(cf))
        return false;
    if (!/^(?:(?:[B-DF-HJ-NP-TV-Z]|[AEIOU])[AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[1256LMRS][\dLMNP-V])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i.test(cf)) {
        return false;
    }
    const map = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 1, 0, 5, 7, 9, 13, 15, 17,
        19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23];
    let s = 0;
    for (var i = 0; i < 15; i++) {
        var c = cf.charCodeAt(i);
        if (c < 65)
            c = c - 48;
        else
            c = c - 55;
        if (i % 2 === 0)
            s += map[c];
        else
            s += c < 10 ? c : c - 10;
    }
    const atteso = String.fromCharCode(65 + s % 26);
    return atteso === cf.charAt(15);

}

/**
 * Verifica validità del codice di controllo della partita IVA.
 * Il valore vuoto è "valido" per semplificare la logica di verifica
 * dell'input, assumendo che l'eventuale l'obbligatorietà del campo
 * sia oggetto di un controllo e retroazione distinti.
 * @version 2016-12-05
 * @return boolean Stringa vuota se il codice di controllo è
 * corretto oppure il valore è vuoto, altrimenti un messaggio
 * che descrive perché il valore non può essere valido.
 * @param pi string
 */
export function checkPIVA(pi) {
    pi = pi.toUpperCase().replace('IT', '').replace(/\s/g, '');

    if (!/^[0-9]{11}$/.test(pi))
        return false;
    var s = 0;
    for (i = 0; i <= 9; i += 2)
        s += pi.charCodeAt(i) - '0'.charCodeAt(0);
    for (var i = 1; i <= 9; i += 2) {
        var c = 2 * (pi.charCodeAt(i) - '0'.charCodeAt(0));
        if (c > 9) c = c - 9;
        s += c;
    }
    var atteso = (10 - s % 10) % 10;
    if (atteso !== pi.charCodeAt(10) - '0'.charCodeAt(0))
        return false;
    return true;
}
