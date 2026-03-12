import { useState } from "react";


function InputForm({type, visibility, placeholder, required}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = visibility && showPassword ? 'text' : type

  return (
		<label
			htmlFor=''
			className='relative flex w-full rounded-xl text-slate-500 focus:ring-primary/20 border-slate-200  bg-slate-200 h-14 transition-all'
		>
			<input
				className=' h-full w-full invalid:border-red-500 pl-2 pr-11 outline-0  focus:text-slate-900 placeholder:text-slate-500 valid:border valid:border-green-500 border-2 rounded-xl'
				name={inputType}
				type={inputType}
				placeholder={placeholder}
				required={required}
				minLength={type === 'password' ? 8 : 3}
			/>
			{visibility && (
				<button
					type='button'
					onClick={() => setShowPassword(!showPassword)}
					className=' fill-gray-500 absolute right-3 top-1/2 -translate-y-1/2'
				>
					<img
						src={
							showPassword
								? '/src/assets/eye.svg'
								: '/src/assets/eye-closed.svg'
						}
						alt=''
					/>
				</button>
			)}
		</label>
	)
}

export default InputForm;