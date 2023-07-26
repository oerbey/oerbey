const officialHolidays = [
    { date: '2022-01-01', name: 'New Year' },
    { date: '2022-07-04', name: 'Independence Day' },
    // Add more holidays as needed
  ];
  
  function getBusinessDays(year, month) {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    let businessDays = 0;
  
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const formattedDate = date.toISOString().split('T')[0];
  
      if (!isWeekend && !officialHolidays.find(holiday => holiday.date === formattedDate)) {
        businessDays++;
      }
    }
  
    return businessDays;
  }
  
  const workingHoursPerDay = 8; // Assuming 8 working hours per day
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const businessDays = getBusinessDays(currentYear, currentMonth);
  const totalWorkingHours = businessDays * workingHoursPerDay;
  
  document.addEventListener('DOMContentLoaded', function () {
    const workingHoursElement = document.getElementById('working-hours');
    workingHoursElement.textContent = `Working hours for this month: ${totalWorkingHours}`;
  });
  