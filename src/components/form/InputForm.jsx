import { useState } from "react";


function InputForm({type, icon, visibility, placeholder}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = visibility && showPassword ? 'text' : type

  return (
		<label htmlFor='' className='block text-sm font-medium text-gray-700'>
			{icon}
			<input type={inputType} placeholder={placeholder} />
			{visibility && (
				<button
					type='button'
					onClick={() => setShowPassword(!showPassword)}
					className='text-sm text-gray-500'
				>
					{showPassword ? 'Ocultar' : 'Ver'}
				</button>
			)}
		</label>
	)
}

export default InputForm;