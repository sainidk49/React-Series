import React, { useId } from 'react'

const Input = React.forwardRef(({
    label,
    type = "text",
    className = "",
    ...props
}, ref) => {
    const uniqueId = useId()
    return (
        <div>
            {label && <label htmlFor={uniqueId}></label>}
            <input
                type={type}
                className={` ${className}`}
                ref={ref}
                id={uniqueId}
                {...props}
            />
        </div>
    )
})

export default Input