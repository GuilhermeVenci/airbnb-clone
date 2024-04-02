import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import {
  format,
  isSameMonth,
  isBefore,
  isSameDay,
  endOfDay,
  isWithinInterval,
} from 'date-fns';

interface CalendarProps {
  nextButton?: boolean;
  handlePrevMonth: () => void;
  currentMonth: Date;
  handleNextMonth: () => void;
  weeks: Date[][];
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  selectDate: (date: Date) => void;
  today: Date;
}

const Calendar = ({
  nextButton,
  handlePrevMonth,
  currentMonth,
  handleNextMonth,
  weeks,
  checkIn,
  checkOut,
  selectDate,
  today,
}: CalendarProps) => {
  return (
    <div className=" px-7">
      <div className="relative z-10 max-w-[21rem]">
        {/* Aqui você vai renderizar o header do datepicker */}
        <div className="flex items-center justify-between py-4">
          <div className="h-8 w-8">
            <button
              onClick={handlePrevMonth}
              className={`
                h-8 w-8 
                flex
                justify-center
                items-center
                hover:bg-airbnb-light-gray 
                rounded-full 
                text-airbnb-dark 
                ${nextButton && 'hidden'}`}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="text-base font-semibold text-airbnb-dark">
            {format(currentMonth, 'MMMM yyyy')}
          </div>
          <div className="h-8 w-8">
            <button
              onClick={handleNextMonth}
              className={`            
            h-8 w-8 
            flex
            justify-center
            items-center
            hover:bg-airbnb-light-gray 
            rounded-full 
            text-airbnb-dark 
            ${!nextButton && 'hidden'}`}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Aqui você vai renderizar os dias da semana */}
        <div className="grid grid-cols-7 gap-y-1">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
            <span key={day} className="text-center font-medium text-xs">
              {day}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 mt-4">
          {weeks.map((week, weekIdx) => (
            <React.Fragment key={weekIdx}>
              {week.map((day, dayIdx) => {
                const inCurrentMonth = isSameMonth(day, currentMonth);
                const isPast = isBefore(day, today);
                return (
                  <div
                    key={dayIdx}
                    className={`my-[1px]
                    ${checkIn && isSameDay(day, checkIn) && 'rounded-l-full'}
                    ${checkOut && isSameDay(day, checkOut) && 'rounded-r-full'}
                    ${
                      checkIn &&
                      checkOut &&
                      isWithinInterval(day, {
                        start: checkIn,
                        end: checkOut,
                      }) &&
                      inCurrentMonth &&
                      'bg-airbnb-light-gray'
                    }`}
                  >
                    <button
                      onClick={() =>
                        inCurrentMonth && !isPast && selectDate(day)
                      }
                      disabled={!inCurrentMonth || isPast}
                      className={`h-11 w-11 rounded-full font-semibold ${
                        !inCurrentMonth || isPast
                          ? `cursor-default ${
                              !inCurrentMonth
                                ? 'disabled:text-white'
                                : 'disabled:text-gray-300'
                            }`
                          : 'hover:border hover:border-airbnb-dark text-airbnb-dark'
                      } ${
                        ((checkIn && isSameDay(day, checkIn)) ||
                          (checkOut && isSameDay(day, checkOut))) &&
                        inCurrentMonth &&
                        'bg-airbnb-dark text-white'
                      } 
                      `}
                    >
                      {format(day, 'd')}
                    </button>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
