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
const crypto = require('crypto')

module.exports = function (text) {
  return crypto.createHash('md5').update(text).digest('hex')
}
