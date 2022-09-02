// components
import Layout from "./components/organisms/sections/Layout";
import Profile from "./components/organisms/sections/Profile";
import Filters from "./components/organisms/sections/Filters";
import RepoList from "./components/organisms/sections/RepoList";
import Search from "./components/atoms/Search";

function App() {
	return (
		<Layout>
			{/* sections */}
			<Profile />
			<Filters />
			<RepoList />
			<Search />
		</Layout>
	);
}

export default App;
