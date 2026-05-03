import './StatReseau.css';

function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  
  const totalArrets = lignes.reduce((acc, ligne) => acc + ligne.arrets, 0);
  
  const ligneMax = lignes.reduce((max, ligne) => 
    ligne.arrets > max.arrets ? ligne : max, lignes[0]);

  return (
    <div className="stat-reseau">
      <div className="stat-carte">
        <h3 className="stat-chiffre">{totalLignes}</h3>
        <p className="stat-label">Lignes au total</p>
      </div>
      <div className="stat-carte">
        <h3 className="stat-chiffre">{totalArrets}</h3>
        <p className="stat-label">Arrêts au total</p>
      </div>
      <div className="stat-carte">
        <h3 className="stat-chiffre">Ligne {ligneMax.numero}</h3>
        <p className="stat-label">Plus d'arrêts ({ligneMax.arrets})</p>
      </div>
    </div>
  );
}

export default StatReseau;