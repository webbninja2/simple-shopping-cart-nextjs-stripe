import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successMsg = (msg) => {
  toast.success(msg, { position: "top-right" });
};

export const errorMsg = (msg) => {
  toast.error(msg, { position: "top-right" });
};
