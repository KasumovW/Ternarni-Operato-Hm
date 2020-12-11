import React, {useState} from 'react';

function Onetask(props) {
    return (

        <div>

        </div>
    );
}

// Задача 1
//
// Есть такой компонент:
//
//     function App(props) {
//         const isDay = props.hours < 18;
//
//         return(isDay ? "сейчас день": "сейчас вечер")
//     }
//
// Как его нужно вызвать, чтобы он вывел текст “сейчас вечер”?


App({hours: 20});
function App(props) {
    const isDay = props.hours < 18;

    return(isDay ? "сейчас день": "сейчас вечер")
}

//Нужно создать props.hours больше 18.

export default Onetask;