import Projectsidebars from "./components/projectsidebars.jsx";
import NewProject from "./components/NewProject.jsx";
function App() {
  return (
    <main className=" h-screen my-8 flex-8">
      <Projectsidebars />
      <NewProject></NewProject>
    </main>
  );
}

export default App;
