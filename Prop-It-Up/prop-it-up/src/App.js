import logo from './logo.svg';
import './App.css';
import Header from './components/PropItUp';

function App() {
  return (
    <div className="App">
        <Header firstName = {"Jane"} lastName = {"Doe"} age = {"45"} hairColor = {"Black"} />
        <Header firstName = {"John"} lastName = {"Smith"} age = {"88"} hairColor = {"Brown"} />
        <Header firstName = {"Millard"} lastName = {"Fillmore"} age = {"50"} hairColor = {"Brown"} />
        <Header firstName = {"Maria"} lastName = {"Smith"} age = {"62"} hairColor = {"Brown"} />
    </div>
  );
}

export default App;
