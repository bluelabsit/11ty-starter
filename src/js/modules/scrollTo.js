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

document.addEventListener('click', function (event) {
    let button;
    if ((event.target.matches('.scroll-to') && (button = event.target))
        || (event.target.parentNode.matches('.scroll-to') && (button = event.target.parentNode))) {
        const target = document.querySelector(button.getAttribute('href') || button.getAttribute('data-target'));

        if (target) {
            let y = target.offsetTop;

            window.scrollTo({ behavior: 'smooth', top: y });

            event.preventDefault();
        }
    }
}, false);
