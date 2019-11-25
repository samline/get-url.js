/**
 * // Custom
 * import msg from 'path/to/console'
 *
 * // Types
 * import * as msg from 'path/to/console'
 *
 * // Custom and types
 * import msg, * as msgType from 'path/to/console'
 *
 * // Variables *
 * text-1 | required
 * text-2 | optional
 * color  | optional | hex or rgb
 *
 * // Usage
 *
 * // Custom
 * msg('text-1', 'text-2', color)
 *
 * // Types
 * msg.success('text-1', 'text-2')
 * msg.warning('text-1', 'text-2')
 * msg.error('text-1', 'text-2')
 *
 * // Custom and types
 * msg('text-1', 'text-2', color)
 * msgType.success('text-1', 'text-2')
 * msgType.warning('text-1', 'text-2')
 * msgType.error('text-1', 'text-2')
 */

const msg = (
  msg1  = '',
  msg2  = '',
  bg    = '#607d8b',
  color = '#fff',
) => {
  const msg  = '%c' + msg1 + '%c' + msg2
  const sty1 = 'background: ' + bg + '; color: ' + color + '; font-weight: bold; padding: 5px;'
  const sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;'

  console.log(
    msg,
    sty1,
    sty2
  );
}

const _error = (
  msg1 = '',
  msg2 = '',
) => {
  const msg  = '%c' + msg1 + '%c' + msg2
  const sty1 = 'background: #ef5350; color: #fff; font-weight: bold; padding: 5px;'
  const sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;'

  console.log(
    msg,
    sty1,
    sty2
  );
}

const _success = (
  msg1 = '',
  msg2 = '',
) => {
  const msg  = '%c' + msg1 + '%c' + msg2
  const sty1 = 'background: #4caf50; color: #fff; font-weight: bold; padding: 5px;'
  const sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;'

  console.log(
    msg,
    sty1,
    sty2
  );
}

const _sarning = (
  msg1 = '',
  msg2 = '',
) => {
  const msg  = '%c' + msg1 + '%c' + msg2
  const sty1 = 'background: #ffc400; color: #fff; font-weight: bold; padding: 5px;'
  const sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;'

  console.log(
    msg,
    sty1,
    sty2
  );
}

export default msg
export const   success  = _success
export const   error    = _error
export const   warning  = _sarning
