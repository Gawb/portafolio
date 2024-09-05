import {createContext, useContext, useState, useEffect} from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ isOpen: false, message: "", type: "" });


  const onOpen = (type, message) => {
    setAlert({ isOpen: true, message, type });
  };

  const onClose = () => {
    setAlert({ isOpen: false, message: "", type: "" });
  };

  // Usamos useEffect para que el temporizador solo se ejecute cuando la alerta esté abierta
  useEffect(() => {
    let timer;
    if (alert.isOpen) {
      timer = setTimeout(() => {
        onClose();
      }, 3000); // Cerrar después de 3 segundos
    }
    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta o se vuelve a renderizar
  }, [alert.isOpen]);


  return (
    <AlertContext.Provider
    value={{ alert, onOpen, onClose }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
