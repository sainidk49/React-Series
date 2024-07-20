import React, { useId } from 'react'

const Select = ({
    options,
    label,
    className = "",
    ...props
}, ref) => {
    const uniqueId = useId()
    return (
        <div>
            {label && <label htmlFor={uniqueId}></label>}
            <select className={`${className}`} id={uniqueId} ref={ref} {...props}>
                {options?.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
                
            </select>
        </div>
    )
}

export default React.forwardRef(Select)