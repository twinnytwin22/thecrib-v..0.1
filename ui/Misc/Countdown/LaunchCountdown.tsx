"use client";
import { useState, useEffect } from "react";
import moment from "moment";

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const LaunchCountdown = ({ targetDate }: { targetDate: Date }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const difference = moment(targetDate).diff(now);

      const duration = moment.duration(difference);

      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="mx-auto w-full">
    <div className="grid grid-cols-4 items-end text-white text-center justify-items-center content-center justify-center mx-auto">
      <div className="flex flex-col justify-items-center content-center justify-center">
        <div className="text-3xl font-bold">{timeRemaining.days}</div>
        <div className="text-xs font-semibold p-1">days</div>
      </div>
      <div className="flex flex-col justify-items-center content-center justify-center">
        <div className="text-3xl font-bold">{timeRemaining.hours}</div>
        <div className="text-xs font-semibold p-1">hours</div>
      </div>
      <div className="flex flex-col justify-items-center content-center justify-center">
        <div className="text-3xl font-bold">{timeRemaining.minutes}</div>
        <div className="text-xs font-semibold p-1">minutes</div>
      </div>
      <div className="flex flex-col justify-items-center content-center justify-center">
        <div className="text-3xl font-bold">{timeRemaining.seconds}</div>
        <div className="text-xs font-semibold p-1">seconds</div>
      </div>
    </div></div>
  );
};

export default LaunchCountdown;
