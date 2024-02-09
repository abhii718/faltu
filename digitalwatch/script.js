function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  function setAlarm() {
    const alarmTime = prompt('Enter alarm time (HH:MM:SS)');
    const alarm = new Date();
    const [hours, minutes, seconds] = alarmTime.split(':').map(Number);
    alarm.setHours(hours);
    alarm.setMinutes(minutes);
    alarm.setSeconds(seconds);
  
    setInterval(() => {
      const now = new Date();
      if (now.getHours() === alarm.getHours() &&
          now.getMinutes() === alarm.getMinutes() &&
          now.getSeconds() === alarm.getSeconds()) {
        document.getElementById('alarm').innerText = 'Alarm!';
      } else {
        document.getElementById('alarm').innerText = '';
      }
    }, 1000);
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  