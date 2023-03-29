import { toast } from 'react-toastify';

export const ToastType = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

const customId = 'custom-id-yes';

export const CustomToast = (type, message, options = {}) => {
  switch (type) {
    case ToastType.SUCCESS:
      toast.success(message, {
        toastId: customId,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        ...options,
      });
      break;
    case ToastType.ERROR:
      toast.error(message, {
        toastId: customId,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        ...options,
      });
      break;
    case ToastType.WARNING:
      toast.warn(message, {
        toastId: customId,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        ...options,
      });
      break;
    case ToastType.INFO:
      toast.info(message, {
        toastId: customId,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        ...options,
      });
      break;
    default:
      throw new Error('Call exorcist! 😲');
  }
};
