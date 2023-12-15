import { toast } from "react-toastify";

export const Toastify = (mode, msg) => {
  console.log(mode, msg);
  if (mode === "success") {
    toast.success(`${msg}`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (mode === "fail") {
    toast.error(`${msg}`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
