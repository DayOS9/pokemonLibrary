import './App.css';
import Header from "./components/Header"
import Logo from "./components/Logo"
import SearchBar from './components/SearchBar';

function App() {
    // this is a test comment
    return (
        <div className='App'>
            <div className="SearchBoxContainer">
                <div className='Header'>
                    <Logo />
                    <Header />
                </div>
                <SearchBar />
            </div>
        </div>
    );
}

export default App;
