# Pomodoro Timer Web Application - Product Definition

## 1. What is a Pomodoro Timer?

A Pomodoro Timer is a time management tool based on the Pomodoro Technique, a method developed by Francesco Cirillo in the late 1980s. It breaks work into intervals, traditionally 25 minutes in length, separated by short breaks (typically 5 minutes). After completing four consecutive work intervals, a longer break (15-30 minutes) is taken. This technique helps maintain focus and mental freshness.

## 2. Problem It Solves

The Pomodoro Timer addresses several common productivity challenges:
- **Procrastination**: By working in short, focused bursts, it makes tasks feel more manageable
- **Burnout**: Regular breaks prevent mental fatigue and maintain consistent productivity
- **Time management**: Helps users estimate and allocate time more effectively
- **Distraction management**: Encourages single-tasking and minimizes context-switching

## 3. Target Users

- **Students**: For focused study sessions and exam preparation
- **Remote workers/Professionals**: To maintain productivity while working from home
- **Freelancers**: For tracking billable hours and maintaining work-life balance
- **Anyone seeking better focus**: People looking to improve their time management and productivity

## 4. Core Goals for MVP

A minimal but effective Pomodoro Timer web app should:

1. **Timer Functionality**:
   - 25-minute work sessions (Pomodoros)
   - 5-minute short breaks
   - 15-30 minute long breaks after 4 Pomodoros
   - Visual countdown display
   - Start, pause, and reset controls

2. **User Experience**:
   - Clean, intuitive interface
   - Visual indicators for work/break modes
   - Audible alerts for session transitions
   - Mobile-responsive design

3. **Session Tracking**:
   - Count of completed Pomodoros
   - Option to track tasks
   - Basic session history

4. **Customization** (stretch goals for future):
   - Adjustable timer durations
   - Sound customization
   - Dark/light mode
   - Task management

   ---

## Technical Details

### Technologies Used
- React
- TypeScript
- Vite
- Windsurf (AI-first code editor)

### Vibe Coding Tool
This project was developed using **Windsurf**, an AI-first code editor.  
Windsurf was used to generate, refactor, and iteratively improve both the application logic and the user interface through natural language prompts.

### Features Implemented
- Classic Pomodoro Timer (25-minute work sessions)
- 5-minute short breaks
- Automatic long break after every 4 Pomodoros
- Long break duration configurable between 15–30 minutes
- Start, Pause, and Reset controls
- Settings persistence using localStorage
- Modern, responsive UI

## Installation & Run

```bash
npm install
npm run dev




## How to Use

1. **Start a Pomodoro Session**  
   Click the **Start** button to begin a 25-minute focused work session (Pomodoro).

2. **Automatic Short Breaks**  
   After each Pomodoro session, a **5-minute short break** starts automatically.

3. **Long Break After 4 Pomodoros**  
   Once **4 Pomodoro sessions** are completed, the timer switches to a **long break**.

4. **Adjust Long Break Duration**  
   The long break duration can be customized between **15–30 minutes** from the **settings panel**.  
   Values below 15 minutes are saved as 15, and values above 30 minutes are saved as 30.

5. **Pause or Reset**  
   You can **pause** the timer at any time or click **Reset** to restart the current session.







