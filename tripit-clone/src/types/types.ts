import { ReactNode } from "react";

export interface CommonSectionProps {
    fontFamily?: string;
    title: string;
    description: string;
    buttonText: string;
}

export interface InputFieldProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    error?: string;
  }

  export interface SelectFieldProps {
    label?: string;
    options: { label: string; value: string }[];
    value: string;
    onChange: (value: { label: string; value: string }) => void;
    className?: string;
    error?: string;
  }

  export interface ErrorBoundaryProps {
    children: ReactNode;
  }
  
  export interface ErrorBoundaryState {
    hasError: boolean;
  }

  export interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
    disabled?: boolean;
  }

  export interface AuthProps {
    isLogin: boolean;
  }