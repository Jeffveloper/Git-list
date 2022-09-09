// components
import Layout from "./components/organisms/sections/Layout";
import Profile from "./components/organisms/sections/Profile";
import Filters from "./components/organisms/sections/Filters";
import RepoList from "./components/organisms/sections/RepoList";
import Search from "./components/atoms/Search";
import ConnectionProvider from "./context/conection.context";

function App() {
	return (
		<ConnectionProvider>
			<Layout>
				{/* sections */}
				<Profile />
				<Filters />
				<RepoList />
				<Search />
			</Layout>
		</ConnectionProvider>
	);
}

export default App;
