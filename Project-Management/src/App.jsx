import { useState } from "react";
import Projectsidebars from "./components/projectsidebars.jsx";
import NoProjectFound from "./components/NoProjectSelected.jsx";
import NewProject from "./components/newProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
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

  function handleSelectedProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: id,
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

  function handleOnDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: projectState.projects.filter((project) => project.id !== prevState.selectedProjectID)
      };
    })
  };


  let selectedProj = projectState.projects.find(project => project.id === projectState.selectedProjectID);
  let content = <SelectedProject project={selectedProj} onDelete={handleOnDeleteProject}></SelectedProject>;
  if (projectState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProjects} onCancel={handleOnCancel} />
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectFound onStartNewProject={handleStartNewProjects} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebars onStartNewProject={handleStartNewProjects}
        projectObj={projectState.projects}
        onSelectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
