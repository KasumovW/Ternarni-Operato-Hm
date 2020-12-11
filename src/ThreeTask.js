import React from 'react';
//Допиши код компонента так,
// чтобы в зависимости от значения переменной dark
// блок выводился либо темным либо светлым.

const dark = true;

function ThreeTask(props) {
    return (
        <div>{dark ? (
            <div className="dark">
                Hello, ternary operator!
            </div>
        ) : ''}</div>
    );
}
export default ThreeTask;