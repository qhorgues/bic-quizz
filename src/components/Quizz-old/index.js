import { useState } from "react";

let rep = [];

function CheckBox ({answer}) {
    function handleClick() {
        rep.push({id: answer.id, res: answer.res});
        /*console.log(rep);*/
    }
    return (
        <article onClick={handleClick}>
            {answer.text}
        </article>
    );
}


export default function Quizz ({quizz}) { 
    {/*let [rep, setRep] = useState([]);*/}

    return (
        <article>
            { quizz.map((props, idx) =>
                <CheckBox key={idx} answer={{...props, id: idx, rep: rep}}></CheckBox>
            )}
            {console.log(rep)}
        </article>
    );
}