import React, {ChangeEvent, useState} from 'react';

export type FullInputPropsType = {
    addNewMessage: (title: string) => void,
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState("")
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addNewMessage(title)
        setTitle("") // для обнуления строки
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
