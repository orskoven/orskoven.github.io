const Skills = () => {
  return (
    <section className="section">
      <h2>Skills</h2>
      {renderSkillCategory("Frontend Development", [
        "🔮 React", "✨ JavaScript", "🎨 CSS", "👢 Bootstrap", "📱 iOS-udvikling",
      ])}
      {renderSkillCategory("Backend Development", [
        "🗃️ MySQL", "☕ JAVA", "🌱 Spring Boot", "👢 Bootstrap", "🌿 Django", "🐘 SQL", "🔮 NoSQL",
      ])}
      {renderSkillCategory("Machine Learning", [
        "🤖 Tensorflow", "🧠 Keras", "🔥 PyTorch", "🔬 Machine Learning", "🐍 Pandas (Software)",
      ])}
      {renderSkillCategory("Agile & Methodologies", [
        "🏃‍♂️ Agile Methodologies", "🌊 Waterfall Methodologies", "🏁 Scrum", "⚡ Extreme Programming",
      ])}
      {renderSkillCategory("Testing & Frameworks", [
        "🧪 Unit Testing", "🌸 Spring Framework",
      ])}
      {renderSkillCategory("Programming Languages", [
        "🐍 Python", "☕ Java", "🚀 GoF Patterns", "🧩 Object-Oriented Programming (OOP)", "🐦 Swift (Programming Language)",
      ])}
      {renderSkillCategory("Data & Security", [
        "📊 Data Analysis", "🔒 Cybersikkerhed", "🔐 Seaborn",
      ])}
      {renderSkillCategory("Web Technologies", [
        "🕸️ HTML5", "👢 Bootstrap", "🔥 Firebase", "🌱 Spring Boot",
      ])}
      {renderSkillCategory("Others", [
        "🎤 Public Speaking", "📊 UML", "🧠 RUP", "🧮 Lambda Expressions", "🎨 CSS", "📈 Presentations", "📚 Database Development", "🧠 Gestalt", "🍼 Flask",
      ])}
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
