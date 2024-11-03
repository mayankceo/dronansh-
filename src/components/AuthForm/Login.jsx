import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [inputs, setInputs] = useState({
		
	});
	const { loading, error, login } = useLogin();
	return (
		<>
			
			
		
			
		</>
	);
};

export default Login;
