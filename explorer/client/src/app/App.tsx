import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import AppRoutes from '../pages/config/AppRoutes';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.search}>
                <h2 className={styles.suititle}>The Sui Explorer</h2>
                <Search />
            </div>
            <main>
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}

export default App;
