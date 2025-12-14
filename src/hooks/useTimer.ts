// src/hooks/useTimer.ts
import { useState, useEffect, useCallback } from 'react';

type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

interface TimerState {
  mode: TimerMode;
  timeLeft: number;
  isRunning: boolean;
  completedSessions: number;
  longBreakMinutes: number;
}

const POMODORO_DURATION = 25 * 60;
const SHORT_BREAK_DURATION = 5 * 60;
const DEFAULT_LONG_BREAK_MINUTES = 15;

const loadSettings = () => {
  const saved = localStorage.getItem('pomodoroSettings');
  return saved ? JSON.parse(saved) : { longBreakMinutes: DEFAULT_LONG_BREAK_MINUTES };
};

export const useTimer = () => {
  const [state, setState] = useState<TimerState>(() => {
    const settings = loadSettings();
    return {
      mode: 'pomodoro',
      timeLeft: POMODORO_DURATION,
      isRunning: false,
      completedSessions: 0,
      longBreakMinutes: settings.longBreakMinutes || DEFAULT_LONG_BREAK_MINUTES,
    };
  });

  const { mode, timeLeft, isRunning, completedSessions, longBreakMinutes } = state;

  const getDuration = useCallback((mode: TimerMode) => {
    switch (mode) {
      case 'pomodoro': return POMODORO_DURATION;
      case 'shortBreak': return SHORT_BREAK_DURATION;
      case 'longBreak': return longBreakMinutes * 60;
    }
  }, [longBreakMinutes]);

  const resetTimer = useCallback((newMode: TimerMode = mode) => {
    setState(prev => ({
      ...prev,
      mode: newMode,
      timeLeft: getDuration(newMode),
      isRunning: false,
    }));
  }, [mode, getDuration]);

  const updateLongBreakMinutes = useCallback((minutes: number) => {
    const clampedMinutes = Math.min(30, Math.max(15, minutes));
    setState(prev => {
      const newState = {
        ...prev,
        longBreakMinutes: clampedMinutes,
      };
      if (prev.mode === 'longBreak') {
        newState.timeLeft = clampedMinutes * 60;
      }
      localStorage.setItem('pomodoroSettings', JSON.stringify({ longBreakMinutes: clampedMinutes }));
      return newState;
    });
  }, []);

  const start = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: true }));
  }, []);

  const pause = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: false }));
  }, []);

  const changeMode = useCallback((newMode: TimerMode) => {
    resetTimer(newMode);
  }, [resetTimer]);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setState(prev => {
        if (prev.timeLeft <= 1) {
          clearInterval(timer);
          
          const wasPomodoro = prev.mode === 'pomodoro';
          const nextMode = wasPomodoro 
            ? (prev.completedSessions + 1) % 4 === 0 ? 'longBreak' : 'shortBreak'
            : 'pomodoro';
          
          return {
            ...prev,
            mode: nextMode,
            timeLeft: getDuration(nextMode),
            isRunning: false,
            completedSessions: wasPomodoro 
              ? prev.completedSessions + 1 
              : prev.completedSessions,
          };
        }

        return {
          ...prev,
          timeLeft: prev.timeLeft - 1,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, mode, getDuration]);

  return {
    ...state,
    start,
    pause,
    reset: resetTimer,
    changeMode,
    updateLongBreakMinutes,
  };
};