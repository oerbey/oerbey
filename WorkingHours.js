const officialHolidays = [
    { date: '2022-01-01', name: 'New Year' },
    { date: '2022-05-01', name: 'Labour Day' },
    { date: '2022-05-04', name: 'Declaration of Independence Day' },
    { date: '2022-06-24', name: 'Ligo' },
    { date: '2022-06-25', name: 'Jani' },
    { date: '2022-07-10', name: 'Dancing Festival' },
    { date: '2022-12-24', name: 'Christmas Eve' },
    { date: '2022-12-25', name: 'Christmas Christmas' },
    { date: '2022-12-26', name: 'Second day of Christmas' },
    { date: '2022-12-24', name: 'New Years Eve' },
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
  