"use client"

import Input from '@components/Input'
import React from 'react'

const InputGroup = (props: any) => {

    return (
        <div>
            {
                props.inputArr.map((item: any, index: number) => <Input placeholder={item.placeholder} name={item.name} value={item.value} handleChange={props.handleChange} index={index} />)
            }
        </div>
    )
}

export default InputGroup