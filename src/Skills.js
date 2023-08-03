const Skills = () => {
    return (
      <section className="section">
        <h2>Skills</h2>
        {renderSkillCategory("Frontend Development", ["🔮 React", "✨ JavaScript", "🎨 CSS", "👢 Bootstrap"])}
        {renderSkillCategory("Backend Development", ["🗃️ MySQL", "☕ JAVA", "🌱 Spring Boot", "📱 Swift"])}
        {renderSkillCategory("Machine Learning", ["🤖 Tensorflow", "🧠 Keras"])}
        {renderSkillCategory("Low-Level Programming", ["🔌 Machine Code", "📚 C"])}
      </section>
    );
  };
  
  const renderSkillCategory = (title, skills) => {
    return (
      <div className="skills-category">
        <h3>{title}</h3>
        <div className="skills-slider">
          {skills.map((skill, index) => (
            <div className="skill-tile" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  