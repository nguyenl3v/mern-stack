import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ToastifySuccess = (data) =>{
  toast.success(data)
}
export const ToastifyField = (error) =>{
  toast.error(error)
}