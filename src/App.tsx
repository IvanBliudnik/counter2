
import './App.css';

import {Counter} from "./components/Counter";
import CounterSet from "./components/CounterSet";
import {useEffect, useState} from "react";

 export const initialValue = 0;
export const App = () => {

    const [value, setValue] = useState(initialValue);
    const [maxValue, setMaxValue] = useState<number>(initialValue);
    const [startValue, setStartValue] = useState<number>(initialValue);
    let [disable, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(value === maxValue);
    }, [value]);

    const onCLickUp = () => {
        setValue((value) => value + 1);
    }
    const onCLickHandlerStart = () => {
        if (value > 0) {
            const storedValue = localStorage.getItem(`counterValue`);
            if (storedValue) {
                setValue(JSON.parse(storedValue))
            }
        } else {
            setValue(initialValue);
        }
    }

    const inkUpMaxHandler = () => {
        setMaxValue(maxValue + 1);
    }
    const inkDownMaxHandler = () => {
        if (maxValue > 0) {
            setMaxValue(maxValue - 1);
        }
        setDisabled(true)
    }
    const inkUpStartHandler = () => {
        setStartValue(startValue + 1);
    }
    const inkDownStartHandler = () => {
        if (startValue > 0) {
            setStartValue(startValue - 1);
        }
        setDisabled(true)
    }
    const setLocalStorageHandler = () => {
        localStorage.setItem(`counterValue`, JSON.stringify(startValue));
    }

    return (
        <div className="App">
            <div className="counterStyle">
            <Counter
                value={value}
                maxValue={maxValue}
                onCLickUp = {onCLickUp}
                onCLickHandlerStart = {onCLickHandlerStart}
                disable = {disable}
            />
            </div>
            <div className="counterSetStyle">
            <CounterSet
                value={value}
                startValue = {startValue}
                maxValue={maxValue}
                inkUpMaxHandler = {inkUpMaxHandler}
                inkDownMaxHandler = {inkDownMaxHandler}
                inkUpStartHandler = {inkUpStartHandler}
                inkDownStartHandler = {inkDownStartHandler}
                setLocalStorageHandler = {setLocalStorageHandler}
                disable={disable}
            />
            </div>
        </div>
    );
};
