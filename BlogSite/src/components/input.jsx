import React,{useId} from 'react'

export const Input = React.forwardRef(({
    label,
    type = "text",
    className = 'dark:text-black',
    ...props
},ref)=>{
     const id = useId()


    return (
         <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1 text-gray-800 dark:text-gray-200' 
            htmlFor={id}>
                {label}
            </label>
            }
            <Input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                            outline-none focus:bg-gray-50 dark:focus:bg-gray-700 
                            duration-200 border border-gray-200 dark:border-gray-700 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>

    )
})
