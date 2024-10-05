import { ChangeEvent, useEffect, useRef } from "react";

type Props = {
  index: number;
  getValue: (value: string, index: number) => void;
};

export function Input({ index, getValue }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Focus on the first input
    if (index === 0 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [index]);

  function checkValue(event: ChangeEvent<HTMLInputElement>) {
    const currentValue = event.target.value.slice(-1); // Get only the last character
    if (/^[0-9]*$/.test(currentValue)) {
      // Check if it's a digit
      getValue(currentValue, index); // Call parent to update code
    }

    // Move to next input
    if (currentValue && inputRef.current) {
      const nextElement = inputRef.current.nextElementSibling;
      if (nextElement instanceof HTMLInputElement) {
        nextElement.focus();
      }
    }
  }

  return (
    <input
      ref={inputRef}
      onChange={checkValue}
      className="transition ease-in-out duration-300 flex flex-1 items-center border-2 outline-none focus:outline-none focus:shadow-[0_0_0_4px_rgba(209,213,218,0.45)] focus:border-2 h-[44px] md:h-[52px] w-full px-4 rounded-xl"
      type="text"
      maxLength={1} // Only allow one character
    />
  );
}
