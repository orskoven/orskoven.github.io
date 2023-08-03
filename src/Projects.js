const Projects = () => {
  return (
    <section className="section">
      <h2>Projects</h2>
      {renderProject('Spilled Beans (YouTube Kanal)', 'nov. 2021 - nu', 'Content creator')}
      {renderProject('GitHub', 'aug. 2021 - nu', 'Content creator')}
      {renderProject('Morfar - afgangsfilm', 'jun. 2018', `The movie is a window into the world of the director's 85-year-old grandfather...`)}
      {renderProject('Betzavta - Learning the Language of Democracy', 'nov. 2013', 'Betzavta, which took place for a week in Wroclaw (Poland), is an internationally recognized education...')}
      {renderProject('Social Media & Youth - Learning for Employment', 'okt. 2013', 'I attended a seminar in Bucharest, Romania, to debate and explore how digital skills...')}
      {renderProject('Free2Choose Create - Nordic', 'jul. 2013', 'The Free2choose-Create course took place in Uppsala, Sweden, with the aim of combining human rights education...')}
    </section>
  );
};

const renderProject = (title, date, description) => {
  return (
    <div className="project-tile">
      <h3>{title}</h3>
      <span className="date">{date}</span>
      <p className="description">{description}</p>
      <button className="view-project-button">Vis projekt</button>
    </div>
  );
};

export default Projects;
