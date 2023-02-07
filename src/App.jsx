import './App.css';
import {QueryClientProvider, QueryClient} from 'react-query';
import FirstExample from './pages/FirstExample';
import QuickStart from './pages/QuickStart';
import TestMocking from './components/TestMocking';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <FirstExample /> */}
      {/* <QuickStart /> */}
      <TestMocking />
    </QueryClientProvider>
  );
}

export default App;
