import './styles.input.scss';
import { ChangeEventHandler, InputHTMLAttributes, useEffect, useId, useRef, useState } from 'react';

type InputProps = { label?: string; postfix?: string } & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
    id: passedId,
    onChange,
    value: passedValue,
    label,
    postfix,
    ...restInputProps
}: InputProps) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [baseValue, setBaseValue] = useState<string>('');
    const [inputWidth, setInputWidth] = useState(40);

    const value = passedValue ?? baseValue;

    const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (onChange) {
            onChange(e);

            return;
        }
        setBaseValue(e.target.value);
    };

    useEffect(() => {
        if (spanRef.current) {
            setInputWidth(spanRef.current.offsetWidth + 5);
        }
    }, [value]);

    const handleFocus = () => {
        inputRef.current?.focus();
    }

    const generatedId = useId();
    const id = passedId || generatedId;
    return (
        <div className="input-wrapper" onClick={handleFocus}>
            {label && <label htmlFor={id}>{label}</label>}
            <span ref={spanRef} className="hidden-span">
                {value}
            </span>
            <input
                ref={inputRef}
                id={id}
                name="currency-input"
                className="input"
                value={value}
                style={{ width: `${inputWidth + 2}px` }}
                onChange={handleChangeInput}
                onFocus={(e) => {
                    restInputProps.onFocus?.(e);
                }}
                {...restInputProps}
            />
            {postfix && value.toString().length > 0 && (
                <span
                    className="currency-name"
                >
                    {postfix}
                </span>
            )}
        </div>
    );
};
