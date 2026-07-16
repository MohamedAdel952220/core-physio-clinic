import React from 'react';

// Embedded logo mark (running figure in care-ring) so the component is
// self-contained for any consumer. Color = light backgrounds, white = dark.

/**
 * Core Physio Clinic — Logo lockup.
 * Mark: an athletic running figure inside a care-ring (movement, sports
 * rehabilitation, recovery). Pairs with the Core Physio wordmark.
 * variant: 'dark' (on light bg) | 'light' (on teal/dark bg).
 * showText=false renders the mark only.
 */
export function Logo({ variant = "dark", size = 44, ...rest }) {
  const light = variant === "light";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center"
      }}
      {...rest}
    >
      <img
        src={light ? "/assets/logo-white.svg" : "/assets/logo.svg"}
        alt="Core Physio Clinic"
        style={{
          display: "block",
          height: size,
          width: "auto",
          flex: "0 0 auto"
        }}
      />
    </span>
  );
}