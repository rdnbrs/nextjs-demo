"use client"

import React from 'react'

const Input = (props: any) => {

    return (
        <input className="custom-input" name={props.name} onChange={(e) => { props.handleChange(e, props.index) }} value={props.value} placeholder={props.placeholder} />
    )
}

export default Input