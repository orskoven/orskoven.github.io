import React from 'react';

const Lecture = () => {
  return (
    <section className="section">
      <h2>📓 Applied AI Notes & Reflections</h2>

      {/* Session Details */}
      <div className="session-details">
        <h3>Date:</h3>
        <p>Enter date here</p>
        <h3>Instructor/Source:</h3>
        <p>Enter instructor/source here</p>
        <h3>Session Objective:</h3>
        <p>Summarize the session's goals or what you intend to gain from it.</p>
      </div>

      {/* Topic Overview */}
      <div className="topic-overview">
        <h3>📝 Topic Overview</h3>
        <ul>
          <li><strong>Topic:</strong> Enter main topic here</li>
          <li><strong>Subtopics Covered:</strong> List subtopics here</li>
          <li><strong>Context in Course:</strong> How does this topic relate to previous or future topics?</li>
        </ul>
      </div>

      {/* Key Concepts */}
      <div className="key-concepts">
        <h3>📚 Key Concepts</h3>
        <table>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Description/Definition</th>
              <th>Example/Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Concept 1</td>
              <td>Brief definition or description</td>
              <td>Example or context to illustrate</td>
            </tr>
            <tr>
              <td>Concept 2</td>
              <td>Brief definition or description</td>
              <td>Example or context to illustrate</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Techniques & Algorithms */}
      <div className="techniques-algorithms">
        <h3>🧠 Techniques, Algorithms & Models</h3>
        <table>
          <thead>
            <tr>
              <th>Technique/Algorithm/Model</th>
              <th>Purpose</th>
              <th>Key Details</th>
              <th>Questions & Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Technique 1</td>
              <td>What it achieves or solves</td>
              <td>Important parameters, steps, or equations</td>
              <td>Any lingering questions, confusions, or considerations</td>
            </tr>
            <tr>
              <td>Algorithm 2</td>
              <td>What it achieves or solves</td>
              <td>Important parameters, steps, or equations</td>
              <td>Any lingering questions, confusions, or considerations</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Practical Applications */}
      <div className="practical-applications">
        <h3>⚙️ Practical Applications</h3>
        <ul>
          <li><strong>Use Case 1:</strong> Brief description of real-world application or industry use</li>
          <li><strong>Use Case 2:</strong> Brief description of real-world application or industry use</li>
          <li><strong>Additional Notes:</strong> Any additional thoughts on applications discussed</li>
          <li><strong>Current Industry Relevance:</strong> How is this concept evolving today?</li>
        </ul>
      </div>

      {/* Connections to Prior Knowledge */}
      <div className="connections-prior-knowledge">
        <h3>🔄 Connections to Prior Knowledge</h3>
        <ul>
          <li><strong>Concepts from Previous Sessions:</strong> Relate to past topics</li>
          <li><strong>Related Personal/Professional Experiences:</strong> Enter related experiences</li>
          <li><strong>Areas of Improvement or Clarification:</strong> Topics to revisit</li>
        </ul>
      </div>

      {/* Key Takeaways & Insights */}
      <div className="key-takeaways">
        <h3>💡 Key Takeaways & Insights</h3>
        <ul>
          <li>Main insights from the session</li>
          <li>Challenges & limitations discussed</li>
          <li>Personal observations or reflections</li>
        </ul>
      </div>

      {/* Action Steps for Reinforcement */}
      <div className="action-steps">
        <h3>🎯 Action Steps for Reinforcement</h3>
        <ul>
          <li><strong>Practice Goals:</strong> Exercises, model building, etc.</li>
          <li><strong>Reading/Research:</strong> Additional reading or research topics</li>
          <li><strong>Implementation Ideas:</strong> Real or hypothetical project ideas</li>
          <li><strong>Reflection on Learning:</strong> Strategies for improvement</li>
        </ul>
      </div>

      {/* Resources & Further Reading */}
      <div className="resources-reading">
        <h3>🧩 Resources & Further Reading</h3>
        <ul>
          <li><a href="URL">Title 1</a> - Brief description</li>
          <li><a href="URL">Title 2</a> - Brief description</li>
          <li>Instructor’s recommended readings or resources</li>
        </ul>
      </div>

      {/* Questions & Reflections */}
      <div className="questions-reflections">
        <h3>❓ Questions, Reflections & Next Steps</h3>
        <ul>
          <li>Unanswered questions or topics to explore</li>
          <li>Personal reflections or shifts in understanding</li>
          <li>Topics for deeper dive or self-study</li>
        </ul>
      </div>

      {/* Tracking Progress */}
      <div className="tracking-progress">
        <h3>📈 Tracking Progress (Optional)</h3>
        <ul>
          <li><strong>Self-Assessment:</strong> Rate your understanding (1-5)</li>
          <li><strong>Progress Notes:</strong> Track any progress since last session</li>
          <li><strong>Challenges Faced:</strong> Describe specific challenges</li>
        </ul>
      </div>
    </section>
  );
};

export default Lecture;
