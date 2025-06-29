import { useState } from "react";
import Projectsidebars from "./components/projectsidebars.jsx";
import NoProjectFound from "./components/NoProjectSelected.jsx";
import NewProject from "./components/newProject.jsx";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: []
  });

  function handleStartNewProjects() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    })
  };

  function handleAddProjects(newProj) {
    setProjectState(prevState => {
      const newprojObj = {
        ...newProj,
        id: Math.random()
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProj]
      }
    })
  };

  console.log(projectState);

  let content;
  if (projectState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProjects} />
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectFound onStartNewProject={handleStartNewProjects} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebars onStartNewProject={handleStartNewProjects} />
      {content}
    </main>
  );
}

export default App;
