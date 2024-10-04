import { ReactNode } from "react";

export interface CommonSectionProps {
    fontFamily?: string;
    title: string;
    description: string;
    buttonText: string;
}

export interface InputFieldProps {
    label: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
  }

  export interface ErrorBoundaryProps {
    children: ReactNode;
  }
  
  export interface ErrorBoundaryState {
    hasError: boolean;
  }