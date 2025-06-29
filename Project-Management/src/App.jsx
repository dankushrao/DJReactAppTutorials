import Projectsidebars from "./components/projectsidebars.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectFound from "./components/NoProjectSelected.jsx";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebars />
      <NoProjectFound></NoProjectFound>
    </main>
  );
}

export default App;
