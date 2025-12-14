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
This project demonstrated that vibe coding can significantly accelerate development by reducing repetitive tasks and providing immediate feedback. However, it also highlighted the importance of clearly defining boundaries and constraints when working with AI tools.

I would use Windsurf again for future projects, especially during early-stage prototyping and UI-heavy development. As AI-assisted tools continue to evolve, they are likely to shift the developer’s role toward higher-level decision-making, problem-solving, and design thinking rather than low-level implementation details.

