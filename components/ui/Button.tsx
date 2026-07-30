import { ButtonHTMLAttributes } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700",
        secondary: "bg-gray-600 hover:bg-gray-700",
        danger: "bg-red-600 hover:bg-red-700",
    };

    return (
        <button
            className={`${inter.className} rounded-md px-4 py-2 ${variants[variant]} text-white`}
            {...props}
        >
            {children}
        </button>
    );
}