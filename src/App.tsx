// src/App.tsx
import { useMemo, useState, useEffect } from 'react';
import { useTimer } from './hooks/useTimer';
import './App.css';

const MODE_COLORS = {
  pomodoro: '#ef4444',
  shortBreak: '#22c55e',
  longBreak: '#3b82f6'
};

const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default function App() {
  const {
    mode,
    timeLeft,
    isRunning,
    completedSessions,
    start,
    pause,
    reset: resetTimer,
    changeMode,
    longBreakMinutes,
    updateLongBreakMinutes,
  } = useTimer();

  const [showSettings, setShowSettings] = useState(false);
  const [tempLongBreak, setTempLongBreak] = useState(String(longBreakMinutes));

  useEffect(() => {
    if (showSettings) {
      setTempLongBreak(String(longBreakMinutes));
    }
  }, [showSettings, longBreakMinutes]);

  const timeText = useMemo(() => formatTime(timeLeft), [timeLeft]);
  const primaryColor = MODE_COLORS[mode];

  const handleSaveSettings = () => {
    const minutes = parseInt(tempLongBreak) || 15;
    updateLongBreakMinutes(minutes);
    setShowSettings(false);
  };

  const handleLongBreakChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempLongBreak(e.target.value);
  };

  const handleLongBreakBlur = () => {
    const minutes = parseInt(tempLongBreak) || 15;
    const clamped = Math.min(30, Math.max(15, minutes));
    setTempLongBreak(String(clamped));
  };

  const longBreakOptions = Array.from({ length: 16 }, (_, i) => 15 + i);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
      padding: '1rem',
      position: 'relative'
    }}>
      <button
        onClick={() => setShowSettings(!showSettings)}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'none',
          border: 'none',
          color: '#64748b',
          cursor: 'pointer',
          fontSize: '1.5rem'
        }}
      >
        ⚙️
      </button>

      <h1 style={{
        color: '#1e293b',
        marginBottom: '2rem',
        fontSize: '2rem',
        fontWeight: '600'
      }}>
        pomofocus
      </h1>

      {showSettings ? (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
          width: '100%',
          maxWidth: '480px',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#1e293b', marginBottom: '1.5rem', textAlign: 'center' }}>
            Timer Settings
          </h2>
          
          <div style={{ 
            marginBottom: '1.5rem',
            textAlign: 'left'
          }}>
            <p style={{ 
              color: '#64748b', 
              fontSize: '0.875rem',
              marginBottom: '1.5rem',
              lineHeight: '1.5'
            }}>
              Long Break can be set between 15–30 minutes. Pomodoro (25) and Short Break (5) are fixed by the Pomodoro Technique.
            </p>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <label 
                htmlFor="longBreakInput"
                style={{ 
                  color: '#1e293b', 
                  fontWeight: '500',
                  fontSize: '0.875rem'
                }}
              >
                Long Break (minutes)
              </label>
              <div style={{ 
                display: 'flex', 
                gap: '0.5rem',
                alignItems: 'center'
              }}>
                <input
                  id="longBreakInput"
                  type="number"
                  min="15"
                  max="30"
                  list="longBreakOptions"
                  value={tempLongBreak}
                  onChange={handleLongBreakChange}
                  onBlur={handleLongBreakBlur}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    textAlign: 'center'
                  }}
                />
                <datalist id="longBreakOptions">
                  {longBreakOptions.map(minutes => (
                    <option key={minutes} value={minutes} />
                  ))}
                </datalist>
              </div>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center' 
          }}>
            <button
              onClick={() => setShowSettings(false)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                backgroundColor: '#f1f5f9',
                color: '#64748b',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSaveSettings}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                backgroundColor: primaryColor,
                color: 'white',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            padding: '2rem',
            width: '100%',
            maxWidth: '480px',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {(['pomodoro', 'shortBreak', 'longBreak'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => changeMode(m)}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '9999px',
                    border: `2px solid ${m === mode ? 'transparent' : '#e2e8f0'}`,
                    backgroundColor: m === mode ? primaryColor : 'transparent',
                    color: m === mode ? 'white' : '#64748b',
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'all 0.2s',
                    textTransform: 'capitalize',
                    fontSize: '0.9375rem'
                  }}
                >
                  {m === 'shortBreak' ? 'Short Break' : m === 'longBreak' ? 'Long Break' : 'Pomodoro'}
                </button>
              ))}
            </div>

            <div style={{
              fontSize: '5rem',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '2rem',
              fontVariantNumeric: 'tabular-nums'
            }}>
              {timeText}
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center' 
            }}>
              <button
                onClick={isRunning ? pause : start}
                style={{
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  backgroundColor: primaryColor,
                  color: 'white',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
              >
                {isRunning ? 'PAUSE' : 'START'}
              </button>
              <button
                onClick={() => resetTimer()}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  backgroundColor: 'transparent',
                  color: '#64748b',
                  border: '2px solid #e2e8f0',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                RESET
              </button>
            </div>
          </div>

          {completedSessions > 0 && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '9999px',
              padding: '0.5rem 1.25rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#64748b' }}>Completed Pomodoros:</span>
              <span style={{
                backgroundColor: primaryColor,
                color: 'white',
                borderRadius: '9999px',
                padding: '0.25rem 0.75rem',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                {completedSessions}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}