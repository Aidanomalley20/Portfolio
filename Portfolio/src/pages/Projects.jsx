function Projects() {
  return (
    <div id="projects" className="min-h-screen flex items-center justify-center bg-background text-secondary">
    <div className="max-w-4xl">
      <h2 className="text-4xl font-bold text-primary text-center mb-6">My Projects</h2>
      <ul className="space-y-6">
        <li>
          <h3 className="text-2xl font-semibold">Project 1</h3>
          <p>A brief description of Project 1 goes here.</p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold">Project 2</h3>
          <p>A brief description of Project 2 goes here.</p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold">Project 3</h3>
          <p>A brief description of Project 3 goes here.</p>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Projects;
