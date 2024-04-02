import React, { useState } from 'react';
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addDays,
  isSameMonth,
  endOfDay,
  isBefore,
} from 'date-fns';
import Calendar from './Calendar';

interface DatePickerProps {
  checkIn?: Date;
  checkOut?: Date;
  setCheckIn: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setCheckOut: React.Dispatch<React.SetStateAction<Date | undefined>>;
  activeButton: string;
  setActiveButton: React.Dispatch<
    React.SetStateAction<'checkIn' | 'checkOut' | ''>
  >;
}

const DatePicker: React.FC<DatePickerProps> = ({
  checkIn,
  checkOut,
  setCheckIn,
  setCheckOut,
  activeButton,
  setActiveButton,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = endOfDay(new Date());
  const nextMonth = addMonths(currentMonth, 1); // Calcula o próximo mês

  // Função para navegar entre os meses
  const handlePrevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Gera as semanas para um dado mês
  const generateWeeksForMonth = (month: Date): Date[][] => {
    const startDay = startOfWeek(startOfMonth(month));
    const endDay = endOfWeek(endOfMonth(month));
    const days = eachDayOfInterval({ start: startDay, end: endDay });

    let weeks: Date[][] = [];
    let week: Date[] = [];
    days.forEach((day, index) => {
      week.push(day);
      if (week.length === 7 || index === days.length - 1) {
        weeks.push(week);
        week = [];
      }
    });
    return weeks;
  };

  const weeksCurrentMonth = generateWeeksForMonth(currentMonth);
  const weeksNextMonth = generateWeeksForMonth(nextMonth);

  // Função para selecionar uma data
  const selectDate = (date: Date) => {
    if (activeButton === 'checkIn') {
      setCheckIn(date);
      setActiveButton('checkOut');
      if (checkOut) setCheckOut(undefined);
    } else if (activeButton === 'checkOut') {
      if (checkIn && isBefore(date, checkIn)) {
        setCheckIn(date);
        setCheckOut(undefined);
        setActiveButton('checkOut');
      } else if (!checkIn) {
        console.log('3');
        setCheckIn(date);
        setActiveButton('checkOut');
      } else {
        setCheckOut(date);
      }
    } else {
      setCheckIn(date);
      setActiveButton('checkOut');
    }
  };

  return (
    <div className="grid grid-cols-2 w-auto">
      <Calendar
        handlePrevMonth={handlePrevMonth}
        currentMonth={currentMonth}
        handleNextMonth={handleNextMonth}
        weeks={weeksCurrentMonth}
        checkIn={checkIn}
        checkOut={checkOut}
        selectDate={selectDate}
        today={today}
      />

      <Calendar
        nextButton
        handlePrevMonth={handlePrevMonth}
        currentMonth={nextMonth}
        handleNextMonth={handleNextMonth}
        weeks={weeksNextMonth}
        checkIn={checkIn}
        checkOut={checkOut}
        selectDate={selectDate}
        today={today}
      />
    </div>
  );
};

export default DatePicker;
