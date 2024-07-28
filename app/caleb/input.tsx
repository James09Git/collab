import React from "react";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <input type="email" placeholder="Email or mobile number" />
      <button type="submit">Get Started</button>
    </div>
  );
}
export default InputWithButton;
