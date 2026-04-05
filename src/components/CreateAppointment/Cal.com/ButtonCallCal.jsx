import { useUser } from "@clerk/react"

function ButtonCallCal({service, children}) {
	const { user } = useUser()
	const email = user.primaryEmailAddress.emailAddress
	const name = user.fullName
	
  return (
		<button onClick={() => service({name, email})}>
			{children}
		</button>
  )
}

export default ButtonCallCal