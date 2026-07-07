import React from 'react';

/** Labeled form field (text, tel, number, date) with calm teal focus ring. RTL-aware. */
export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  icon?: React.ReactNode;
  dir?: 'ltr' | 'rtl';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

export function Input(props: InputProps): JSX.Element;
