import BottomDashboard from "../BottomDashboard/BottomDashboard";
import TicketCardSection from "../TicketCardSection/TicketCardSection";
import LineGraphDefault from "../LineGraphDefault/LineGraphDefault";
import KpiChart from "../KpiChart/KpiChart";
import { Background } from "playbook-ui";
import   Header from "../Header/Header";

function App() {


  return (
    <div className="App">
    <Header></Header>
      <Background backgroundColor="light" padding="xl">

        <KpiChart />
        <LineGraphDefault />
        <TicketCardSection/>
        <BottomDashboard />
      </Background>

    </div>
  );
}


export default App;
