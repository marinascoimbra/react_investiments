import { useEffect } from 'react';
import { reports } from '../../data/data_investiments';
import FundoContent from './FundoContent';
import FundoHeader from './FundoHeader';

export default function Fundo({ children: investment }) {
  useEffect(() => {
    calculateMonthVariation();
  });

  const investment_reports = reports.filter(
    report => report.investmentId === investment.id
  );

  const calculateMonthVariation = () => {
    investment_reports.forEach(ir => {
      let newVariation = 0;

      if (ir.month > 1) {
        let previous_report = investment_reports.find(
          i => i.month === ir.month - 1
        );

        let diffValue = ir.value - previous_report.value;
        newVariation = diffValue / previous_report.value;
      }

      ir.variation = newVariation * 100;
    });
    console.log(investment_reports);
  };

  const orderReports = (r1, r2) => {
    if (r1.month > r2.month) return 1;
    else if (r1.month < r2.month) return -1;
    else return 0;
  };

  return (
    <div className="border-2 border-gray-200 m-8">
      <FundoHeader name={investment.description}>
        {investment_reports}
      </FundoHeader>
      {investment_reports.sort(orderReports).map(report => (
        <FundoContent key={report.id}>{report}</FundoContent>
      ))}
    </div>
  );
}
