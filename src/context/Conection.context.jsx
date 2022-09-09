import { createContext, useContext, useState } from "react";
import useConnection from "../hooks/useConnection";
import useGetRepos from "../hooks/useGetRepos";

const ConnectionContext = createContext({});

const ConnectionProvider = ({ children }) => {
	const userData = useConnection("/Jeffveloper");
	const reposData = useGetRepos("/Jeffveloper/repos");

	return (
		<ConnectionContext.Provider value={{ userData, reposData }}>
			{children}
		</ConnectionContext.Provider>
	);
};

export const useConnectionContext = () => useContext(ConnectionContext);
export default ConnectionProvider;
