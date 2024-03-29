import { useEffect, useRef, useState } from 'react';

export default function TestInput() {
  const [fixedValue, setFixedValue] = useState<string>('0');
  const [caretPosistion, setCaretPosistion] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const parseToLocaleString = (value: string) =>
    BigInt(value.replace(/[^0-9]/g, '')).toLocaleString(['en-us']);

  const removeCharAt = (value: string, index: number, range: number) =>
    value.slice(0, index - range) + value.slice(index, value.length);

  useEffect(() => {
    if (!inputRef?.current) {
      return;
    }
    if (fixedValue.length > 3) {
      inputRef.current.setSelectionRange(caretPosistion, caretPosistion);
    }
  }, [fixedValue, caretPosistion]);

  return (
    <input
      ref={inputRef}
      value={fixedValue}
      className="text-black text-right"
      onKeyDown={(e) => {
        setCaretPosistion(e.currentTarget.selectionStart || 0);
      }}
      onChange={(e) => {
        const value = e.currentTarget.value;

        let inputValueToLocale = parseToLocaleString(value);
        let tempCaretPosition = caretPosistion;

        if (inputValueToLocale.length < 3) {
          setFixedValue(inputValueToLocale);
          return;
        }

        if (inputValueToLocale.length === fixedValue.length) {
          inputValueToLocale = parseToLocaleString(
            removeCharAt(inputValueToLocale, caretPosistion, -2)
          );
          tempCaretPosition -= 2;
        } else {
          if (inputValueToLocale.length > fixedValue.length) {
            tempCaretPosition += inputValueToLocale.length - fixedValue.length;
          } else {
            if (inputValueToLocale.length + 2 == fixedValue.length) {
              tempCaretPosition -= 2;
            } else {
              tempCaretPosition -= 1;
            }
          }
        }
        setFixedValue(inputValueToLocale);
        setCaretPosistion(tempCaretPosition);
      }}
    />
  );
}
