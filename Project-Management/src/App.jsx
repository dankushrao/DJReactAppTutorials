import { useState } from "react";
import Projectsidebars from "./components/projectsidebars.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectFound from "./components/NoProjectSelected.jsx";
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

  let content;
  if (projectState.selectedProjectID === null) {
    content = <NewProject />
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
 