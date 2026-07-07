import React from 'react';

export interface SelectOption { value: string; label: string; }

/** Styled native dropdown matching Input — used for Service / Gender selection. */
export interface SelectProps {
  label?: string;
  required?: boolean;
  options?: (string | SelectOption)[];
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  dir?: 'ltr' | 'rtl';
  id?: string;
}

export function Select(props: SelectProps): JSX.Element;
