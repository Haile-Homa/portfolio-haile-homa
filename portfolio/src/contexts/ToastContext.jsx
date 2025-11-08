import React, { createContext, useState, useContext } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = "info", duration = 3000) => {
        const id = Math.random().toString(36).substr(2, 9);

        // show toast
        setToasts([{ id, message, type, isClosing: false }]); // only 1 toast

        // trigger fade out just before removal
        setTimeout(() => {
            // mark toast as closing (adds fade-out animation)
            setToasts((prev) =>
                prev.map((t) =>
                    t.id === id ? { ...t, isClosing: true } : t
                )
            );

            // remove after fade-out finishes (match animation duration = 300ms)
            setTimeout(() => {
                setToasts([]);
            }, 300);
        }, duration);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed bottom-35 right-5 flex flex-col gap-3 z-50">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`px-4 py-2 rounded-lg text-white font-semibold shadow-lg
    ${toast.type === "info" ? "bg-blue-500" : ""}
    ${toast.type === "success" ? "bg-green-500" : ""}
    ${toast.type === "error" ? "bg-red-500" : ""}
    ${toast.isClosing ? "animate-fade-out" : "animate-fade-in"}
  `}
                    >
                        {toast.message}
                    </div>

                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
