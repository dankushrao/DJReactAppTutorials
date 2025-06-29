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

  function handleOnCancel() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    })
  };

  function handleAddProjects(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  };

  let content;
  if (projectState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProjects} onCancel={handleOnCancel} />
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectFound onStartNewProject={handleStartNewProjects} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebars onStartNewProject={handleStartNewProjects} projectObj={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
