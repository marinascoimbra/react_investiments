import { useEffect, useState } from 'react';

export default function FundoContent({ children: report }) {
  const [monthDescription, setMonthDescription] = useState('');

  useEffect(() => {
    let description = mountDescription();
    setMonthDescription(description);
  });

  const mountDescription = () => {
    let description = '';

    if (report.month === 1) description = 'jan/';
    else if (report.month === 2) description = 'fev/';
    else if (report.month === 3) description = 'mar/';
    else if (report.month === 4) description = 'abr/';
    else if (report.month === 5) description = 'mai/';
    else if (report.month === 6) description = 'jun/';
    else if (report.month === 7) description = 'jul/';
    else if (report.month === 8) description = 'ago/';
    else if (report.month === 9) description = 'set/';
    else if (report.month === 10) description = 'out/';
    else if (report.month === 11) description = 'nov/';
    else description = 'dez/';

    return description + report.year;
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex">
          <div className="w-32 text-center mb-2">
            <span>{monthDescription}</span>
          </div>
          <div className="w-32 text-center">
            <span
              className={`${
                report.variation > 0 ? 'text-green-600' : 'text-red-600'
              } mr-4`}
            >
              {report.value.toFixed(2)}
            </span>
          </div>
        </div>
        <div
          className={`${
            report.variation > 0 ? 'text-green-600' : 'text-red-600'
          } mr-4`}
        >
          <span>{report.variation.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
}
