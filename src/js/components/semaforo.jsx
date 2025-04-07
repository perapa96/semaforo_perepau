import React, {useState} from "react";

const semaforo = () => {
    const  [selected, setSelected] = useState ("")
    const handleClick = (val) => {
        setSelected(val)
    }
    return (
        <div className={"semaforo"} id="semaforo">
            <div className= {`${selected === 'luz-roja' ? 'luz-roja active' : 'luz-roja inactive'}`} onClick={() => handleClick('luz-roja')}></div>
            <div className={`${selected === 'luz-amarilla' ? 'luz-amarilla active' : 'luz-amarilla inactive'}`} onClick={() => handleClick('luz-amarilla')}></div>
            <div className={`${selected === 'luz-verde' ? 'luz-verde active' : 'luz-verde inactive'}`} onClick={() => handleClick('luz-verde')}></div>
        </div>

    );
};

export default semaforo;