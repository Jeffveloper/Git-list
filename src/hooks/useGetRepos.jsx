import { useEffect, useState } from "react";
const baseUrl = import.meta.env.VITE_GITHUB_TOKEN;

const useConnection = (customUrl) => {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		fetch(`${baseUrl}${customUrl}`)
			.then((res) => res.json())
			.then((data) => setRepos(data));
	}, []);

	return repos;
};
export default useConnection;
