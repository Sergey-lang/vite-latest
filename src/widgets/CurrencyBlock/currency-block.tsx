import { Input } from '../../ui/input';
import { Divider, Tag } from '../../ui';
import './styles.currency-block.scss';
import { ChangeEvent } from 'react';

type CurrencyBlockProps = {
    tags: number[];
    value: string;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    currency?: string;
};

export const CurrencyBlock = ({ tags, value, onChange, currency }: CurrencyBlockProps) => {
    return (
        <div className="block">
            <Input value={value} onChange={onChange} postfix={currency} />
            <Divider />
            <div className="tag-container">
                {tags.map((val: number, idx) => (
                    <Tag key={idx} value={val} selected={idx === 0} />
                ))}
            </div>
        </div>
    );
};
