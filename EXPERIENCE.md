# Vibe Coding Experience Report

## Tool Selection Justification
For this project, I chose **Windsurf** as my primary vibe coding tool. Windsurf stood out because it provides an agentic development experience directly inside the IDE, allowing the AI to understand the entire project structure rather than working only at the file or line level.

This capability made Windsurf especially suitable for building a Pomodoro Timer application, where multiple components (timer logic, UI, settings, and persistence) needed to work together consistently. The balance between AI assistance and developer control was a key factor in this selection.

## Development Process
Throughout the development process, Windsurf was used as an interactive coding assistant. Instead of manually writing all components from scratch, I used natural language prompts to generate initial structures, refactor existing code, and improve UI behavior.

The most effective prompts were those that clearly described constraints and intent, such as enforcing the Pomodoro Technique rules or limiting user customization to specific values. The project required multiple iterations, particularly when refining the settings logic and resolving TypeScript-related issues. Each iteration improved both code quality and usability.

## Challenges and Solutions
One of the main challenges was managing state consistency and validation, especially for the long break duration settings. While the AI provided functional solutions, some generated code required manual adjustments to handle edge cases and strict constraints (such as clamping values between 15 and 30 minutes).

Another challenge was ensuring that the AI-generated UI matched the intended user experience. In several cases, manual intervention was necessary to simplify components and remove unnecessary features. Windsurf was helpful for rapid iteration, but human oversight remained essential to ensure correctness and design intent.

## Reflection
This project provided hands-on experience with the concept of **antigravity development**, also referred to as **vibe coding**. In this context, antigravity does not represent a specific library or framework, but rather a development mindset where the developer focuses on intent, constraints, and high-level decisions while the AI assists with implementation details.

Working with Windsurf demonstrated how antigravity-style development can accelerate iteration and reduce cognitive load, especially during UI creation and refactoring. However, the experience also highlighted that AI tools still require clear guidance and human oversight. Core product rules, such as enforcing the Pomodoro Technique and limiting customization, were consciously controlled by the developer rather than delegated to the AI.

I would use Windsurf again for future projects, particularly during early-stage prototyping and exploratory development. As antigravity and vibe coding tools continue to evolve, they are likely to reshape software development by shifting the developer’s role toward design thinking, system-level decisions, and creative problem-solving rather than low-level code writing.

