import Layout from "./components/organisms/Layout";
import Profile from "./components/organisms/Profile";
import Filters from "./components/organisms/Filters";
import RepoList from "./components/organisms/RepoList";
import Search from "./components/organisms/Search";

function App() {
  return (
    <Layout>
      <Profile />
      <Filters />
      <RepoList />
      <Search />
    </Layout>
  );
}

export default App;
