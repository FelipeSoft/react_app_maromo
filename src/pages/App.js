import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Master } from "../components/Master/index";
import "./index.css";

function App() {
    return (
        <main>
            <Header />
                <Master.Root>
                    <Master.Card/>
                    <Master.Card/>
                    <Master.Card/>
                    <Master.Card/>
                    <Master.Card/>
                    <Master.Card/>
                </Master.Root>
            <Footer/>
        </main>
    );
}

export default App;
