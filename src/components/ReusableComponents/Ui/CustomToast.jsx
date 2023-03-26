import { toast } from 'react-toastify';
/** 
 * 0. Не читайте это и просто используйте react-toastify как написано в доках. 
 *   https://fkhadra.github.io/react-toastify/introduction
 * 1. Пропускаем этот пункт.
 * 2. Добавляем функцию для вызова тостов в которой можно выбрать тип тостика, типы в ToastType:
    const showToast = () => {
    CustomToast(ToastType.SUCCESS, 'Pet added successfully! 🥳');
  };
 * 3. Видим что приложение  не видит где брать CustomToast и ToastType.
 * 4. Удивляемся
 * 5. Ставим курсов в конец слова  CustomToast и ToastType и нажимаем ctrl(cmd)+пробел. 
 *    должно импортироваться. если нет, пишите путь в ручную. 
 * 6. где хочется, можете вызвать свою функцию, например showToast().
 * 7. Усё.
 * 8. Могу перевести на английский, но думаю никто инструкции не читает.
 * examples
CustomToast(ToastType.ERROR, 'An error occurred! 😞');
CustomToast(ToastType.WARNING, 'This is a warning! ⚠️');
CustomToast(ToastType.INFO, 'This is some information ℹ️');
 */

export const ToastType = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

export const CustomToast = (type, message, options = {}) => {
  switch (type) {
    case ToastType.SUCCESS:
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        ...options,
      });
      break;
    case ToastType.ERROR:
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        ...options,
      });
      break;
    case ToastType.WARNING:
      toast.warn(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        ...options,
      });
      break;
    case ToastType.INFO:
      toast.info(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        ...options,
      });
      break;
    default:
      throw new Error('Call exorcist! 😲');
  }
};
