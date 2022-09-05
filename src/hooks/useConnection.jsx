import { useEffect, useState } from "react";
const baseUrl = import.meta.env.VITE_GITHUB_TOKEN;

const useConnection = (customUrl) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		fetch(`${baseUrl}${customUrl}`)
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, []);

	return user;
};
export default useConnection;
