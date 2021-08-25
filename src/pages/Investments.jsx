import Header from '../components/Header';
import Fundo from '../components/investments_funds/Fundo';
import { investments } from '../data/data_investiments';

export default function Investments() {
  return (
    <div>
      <Header>react-investiments v1.0.1</Header>

      <main>
        {investments.map(investment => (
          <Fundo key={investment.id}>{investment}</Fundo>
        ))}
      </main>
    </div>
  );
}
