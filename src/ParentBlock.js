import React from 'react';
import Small from "./Small";
import Large from "./Large";


//Напиши компонент с названием `ParentBlock`,
//который содержит переменную с любоым числовым значением от 0 до 100.
//
//Если значение переменной меньше 50,
//то компонент должен вывести дочерный компонент с названием `Small`,
//иначе компонент с названием `Large`.

const peremennaya = 99;
const peremennaya2 =  peremennaya < 50;
function ParentBlock(props) {
    return (
        <div>
            {peremennaya2 ? <Small /> : <Large />}
        </div>
    );
}

export default ParentBlock;