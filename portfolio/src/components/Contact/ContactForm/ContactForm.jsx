import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "../../../contexts/ToastContext";
import FormHeader from "./FormHeader";
import FormFields from "./FormFields";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {

    const form = useRef();
    const [status, setStatus] = useState("");
    const { addToast } = useToast();

    useEffect(() => {
        if (status === "success") {
            addToast(" Message sent successfully!", "success");
            const timer = setTimeout(() => setStatus(null), 2000);
            return () => clearTimeout(timer);
        }
        if (status === "error") {
            addToast("❌ Something went wrong. Try again.", "error");
            const timer = setTimeout(() => setStatus(null), 2000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus("success");
                    form.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    setStatus("error");
                }
            );
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full md:w-1/2 p-6 mt-8 md:mt-0  md:p-8  space-y-6">
            <FormHeader />
            <FormFields />
            <SubmitButton status={status} />
        </form>
    );
};

export default ContactForm;
