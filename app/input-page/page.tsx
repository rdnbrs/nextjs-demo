"use client"

import InputGroup from "@containers/InputGroup";
import { useEffect, useState } from "react";

const InputPage = () => {
    const [inputArr, setInputArr] = useState([
        {
            name: "input1",
            value: "",
            placeholder: "Input 1"
        },
        {
            name: "input2",
            value: "",
            placeholder: "Input 2"
        },
        {
            name: "input3",
            value: "",
            placeholder: "Input 3"
        }
    ])

    const [singleInput, setSingleInput] = useState("")

    useEffect(() => {
        console.log(inputArr)
    }, [inputArr])

    useEffect(() => {
        console.log(singleInput)
    }, [singleInput])

    const handleChange = (e: any, index: any) => {
        let item: any = inputArr
        item[index].value = e.target.value
        setInputArr([...item])
    }

    return (
        <div className='content'>
            <div className="card">
                <InputGroup inputArr={inputArr} handleChange={handleChange} />
            </div>

            <div className="card">
                <input className="custom-input" onChange={(e) => { setSingleInput(e.target.value) }} value={singleInput} placeholder={"Single Input Sample"} />
            </div>
        </div>
    )
};

export default InputPage;