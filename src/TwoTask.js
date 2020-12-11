import React from 'react';




//Объясни, почему следующий компонент всегда выводит “первый текст” при любых пропсах?


// function BadComponent(props) {
//     return(
//         <div>
//             {props ? "первый текст" : "второй текст"}
//         </div>
//     );
// }

//Так как у компонента есть пропс выводит всегда 1 текст

function TwoTask(props) {
    return (
        <div></div>
    );
}

export default TwoTask;