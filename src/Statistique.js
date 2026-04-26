import './Statistique.css';

function Statistique() {
  return (
    <div className="statistiques-container">

      <div className="statistique">
        <h2 className="statistique-chiffre">10</h2>
        <p className="statistique-label">Lignes</p>
      </div>

      <div className="statistique">
        <h2 className="statistique-chiffre">150</h2>
        <p className="statistique-label">Arrêts</p>
      </div>

      <div className="statistique">
        <h2 className="statistique-chiffre">25</h2>
        <p className="statistique-label">Bus</p>
      </div>

    </div>
  );
}

export default Statistique;