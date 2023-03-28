import {
  CustomToast,
  ToastType,
} from 'components/ReusableComponents/Ui/CustomToast';

export const showToastInfo = text => {
  CustomToast(ToastType.INFO, text);
};
