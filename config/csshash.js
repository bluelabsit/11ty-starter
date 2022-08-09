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
 * @category eleventy
 * @package eleventy
 *
 * @author Antonio Gatta <a.gatta@xeader.com>
 * @url http://xeader.com
 * @copyright Copyright (c) 2022 Xeader Studios
 * @license All right reserved
 */

const fs = require('fs');
const { nanoid } = require('nanoid');

const hash = nanoid();

const DATAFILE = 'src/data/csshash.json';
const MINIFIED_CSSFILE = `app.${hash}.min.css`;

const jsonValue = `{
  "indexCSS": "${MINIFIED_CSSFILE}"
}`;
fs.writeFileSync(DATAFILE, jsonValue);
