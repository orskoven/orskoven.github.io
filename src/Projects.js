const Projects = () => {
  const techProjects = [
    { title: 'Spilled Beans -YouTube Channel', date: 'nov. 2021 - nu', competence: '📺 Content Creation', description: 'Content creator' },
    { title: 'GitHub', date: 'aug. 2021 - nu', competence: '💻 Coding', description: 'Content creator' },
  ];

  const societyProjects = [
    { title: 'Betzavta - Learning the Language of Democracy', date: 'nov. 2013', competence: '🗽 Democracy Education', description: 'Betzavta, which took place for a week in Wroclaw (Poland)...' },
    { title: 'Social Media & Youth - Learning for Employment', date: 'okt. 2013', competence: '🤝 Youth Employment', description: 'I attended a seminar in Bucharest, Romania...' },
    { title: 'Free2Choose Create - Nordic', date: 'jul. 2013', competence: '🎓 Human Rights Education', description: 'The Free2choose-Create course took place in Uppsala, Sweden, with the aim of combining human rights education with the creation of one\'s own films about a human rights dilemma...' },
  ];

  const movieProjects = [
    { title: 'Morfar', date: 'jun. 2018', competence: '🎥 Film Making', description: 'The movie is a window into the world of the director...' },
  ];

  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="category">
        <h3>Tech</h3>
        <div className="project-container">{techProjects.map(renderProject)}</div>
      </div>
      <div className="category">
        <h3>Society</h3>
        <div className="project-container">{societyProjects.map(renderProject)}</div>
      </div>
      <div className="category">
        <h3>Movies</h3>
        <div className="project-container">{movieProjects.map(renderProject)}</div>
      </div>
    </section>
  );
};

const renderProject = (project) => {
  return (
    <div className="project-tile" key={project.title}>
      <h3>{project.title}</h3>
      <ul>
        <li>{project.competence}</li>
      </ul>
      <span className="date">{project.date}</span>
      <p className="description">{project.description}</p>
    </div>
  );
};

export default Projects;
