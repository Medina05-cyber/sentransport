import './App.css';
import Header from './Header';
import ListeLigne from './ListeLigne';
import Footer from './Footer';
import StatReseau from './StatReseau';

function App() {
  const lignes = [
    { id: 1, numero: "1", depart: "Parcelles Assainies", arrivee: "Plateau", arrets: 14, couleur: "#6c8ebf" },
    { id: 2, numero: "7", depart: "Guediawaye", arrivee: "Place Obe", arrets: 18, couleur: "#82b366" },
    { id: 3, numero: "15", depart: "Pikine", arrivee: "Medina", arrets: 12, couleur: "#e8a838" },
    { id: 4, numero: "23", depart: "Ouakam", arrivee: "Grand Dakar", arrets: 10, couleur: "#ae6bbf" },
    { id: 5, numero: "8", depart: "Almadies", arrivee: "Colobane", arrets: 16, couleur: "#e05c5c" },
    { id: 6, numero: "12", depart: "Yoff", arrivee: "Sandaga", arrets: 11, couleur: "#5b9fad" },
    { id: 7, numero: "31", depart: "Medina", arrivee: "Sacre Coeur", arrets: 8, couleur: "#e67e22" },
    { id: 8, numero: "42", depart: "Ouest Foire", arrivee: "Plateau", arrets: 13, couleur: "#27ae60" },
    { id: 9, numero: "18", depart: "Almadies", arrivee: "Medina", arrets: 15, couleur: "#8e44ad" },
    { id: 10, numero: "55", depart: "Sacre Coeur", arrivee: "Ouest Foire", arrets: 9, couleur: "#2980b9" },
  ];

  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <StatReseau lignes={lignes} />
        <ListeLigne lignes={lignes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;