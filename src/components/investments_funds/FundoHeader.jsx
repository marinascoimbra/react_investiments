import { useEffect, useState } from 'react';

export default function FundoHeader({ children: reports, name }) {
  const [totalYield, setTotalYield] = useState(0);
  const [variationYield, setVariationYield] = useState(0);

  useEffect(() => {
    calculaTotalYield();
  });

  const calculaTotalYield = () => {
    const last_month_report = reports.find(report => report.month === 12);
    const first_month_report = reports.find(report => report.month === 1);

    let total_yield = last_month_report.value - first_month_report.value;

    setTotalYield(total_yield);
    setVariationYield(total_yield / 10);
  };

  return (
    <>
      <div className="text-center font-medium text-xl m-4">{name}</div>
      <div className="text-center font-medium text-lg m-4 flex justify-center">
        <span>Rendimento Total: </span>
        <div
          className={`${
            totalYield > 0 ? 'text-green-600' : 'text-red-600'
          } ml-1`}
        >
          <span>{`R$ ${totalYield.toFixed(2)} `}</span>
          <span>{`(+${variationYield.toFixed(2)}%)`}</span>
        </div>
      </div>
    </>
  );
}
