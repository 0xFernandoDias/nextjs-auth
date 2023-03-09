import axios from "axios"

export default function User() {
	const mainDivStyle = {
		padding: "1em",
	}

	const handleLogOut = async () => {
		const user = await axios.get("/api/auth/logout")

		console.log(user)
	}

	return (
		<div style={mainDivStyle}>
			Sensitive data <br />
			<button onClick={() => handleLogOut()}> Logout </button>
		</div>
	)
}
