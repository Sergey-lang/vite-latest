import './App.scss';
import { CurrencyBlock } from './widgets';
import { useState } from 'react';

const tags = [25, 50, 75, 100];

function App() {
    const [valueOne, setCurrencyOne] = useState<string>('10000');
    const [valueTwo, setCurrencyTwo] = useState<string>('100');

    return (
        <div className="container">
            <CurrencyBlock
                currency={"RUB"}
                tags={tags}
                value={valueOne}
                onChange={(e) => setCurrencyOne(e.target.value)}
            />
            <CurrencyBlock
                currency={"USDT"}
                tags={tags}
                value={valueTwo}
                onChange={(e) => setCurrencyTwo(e.target.value)}
            />
        </div>
    );
}

export default App;
