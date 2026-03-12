import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/huren.css';
import useCursorAnimation from '../hooks/useCursorAnimation';
import useMenuAnimation from '../hooks/useMenuAnimation';

const Huren = () => {
  useCursorAnimation();
  useMenuAnimation();

  const [selectedCategories, setSelectedCategories] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [outputs, setOutputs] = useState({});
  const [resetVisibility, setResetVisibility] = useState({});

  useEffect(() => {
    setResetVisibility({ 1: 'hidden', 2: 'hidden', 3: 'hidden' });
  }, []);

  const handleCategoryClick = (row, category) => {
    setSelectedCategories(prev => ({
      ...prev,
      [row]: category,
    }));
  };

  const handleSizeClick = (row, size) => {
    if (!selectedCategories[row]) return;
  
    setSelectedSizes(prev => ({ ...prev, [row]: size }));
  
    const pricePerM2 = 50;
    const totalCost = size * pricePerM2;
    localStorage.setItem('totalCost', totalCost.toString());
  
    setOutputs(prev => ({
      ...prev,
      [row]: size === 150 ? 'available' : 'unavailable',
    }));
  
    setResetVisibility(prev => ({ ...prev, [row]: 'visible' }));
  };
  

  const handleReset = row => {
    const updatedCategories = { ...selectedCategories };
    const updatedSizes = { ...selectedSizes };
    const updatedOutputs = { ...outputs };

    delete updatedCategories[row];
    delete updatedSizes[row];
    delete updatedOutputs[row];

    setSelectedCategories(updatedCategories);
    setSelectedSizes(updatedSizes);
    setOutputs(updatedOutputs);
    setResetVisibility(prev => ({ ...prev, [row]: 'hidden' }));
  };

  return (
    <>
      <div className="dotHuren" id="dot1"></div>
      <div className="dotHuren" id="dot2"></div>

      <main className="huren-page">
        <div className="wrapperHurenKlein">
          <h1 className="tekstHuren">
            Wilt u zich ook met uw eigen bedrijf in Het Industriegebouw vestigen?
          </h1>
          <h1 className="tekstHuren">
            Kijk dan of er iets voor u bij zit.
          </h1>

          <div className="containerHuren1">
            {[1, 2, 3].map(row => (
              <React.Fragment key={row}>
                <button
                  className="circleHuren1"
                  onClick={() =>
                    handleCategoryClick(
                      row,
                      row === 1 ? 'RETAIL' : row === 2 ? 'HORECA' : 'KANTOOR'
                    )
                  }
                  style={{
                    backgroundColor: selectedCategories[row] ? '#ca2e2e' : '',
                    color: selectedCategories[row] ? '#f0e9b8' : '',
                    borderColor: selectedCategories[row] ? '#f0e9b8' : '',
                  }}
                >
                  {row === 1 ? 'RETAIL' : row === 2 ? 'HORECA' : 'KANTOOR'}
                </button>

                {[50, 150, 200].map(size => (
                  <button
                    key={size}
                    className="circleHuren1"
                    onClick={() => handleSizeClick(row, size)}
                    style={{
                      backgroundColor: selectedSizes[row] === size ? '#ca2e2e' : '',
                      color: selectedSizes[row] === size ? '#f0e9b8' : '',
                      borderColor: selectedSizes[row] === size ? '#f0e9b8' : '',
                    }}
                  >
                    {size}m2
                  </button>
                ))}

                <div
                  className="circleHuren2"
                  style={{ visibility: outputs[row] ? 'visible' : 'hidden' }}
                >
                  {outputs[row] === 'available' && (
                    <>
                      Beschikbaar<br />
                      <Link
                        to="/formulier"
                        style={{ color: '#f0e9b8', textDecoration: 'underline' }}
                      >
                        Klik hier
                      </Link>
                    </>
                  )}

                  {outputs[row] === 'unavailable' && 'Niet beschikbaar'}
                </div>

                <button
                  className="circleHuren1 reset"
                  onClick={() => handleReset(row)}
                  style={{ visibility: resetVisibility[row] || 'hidden' }}
                >
                  Reset
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>

      <footer className="footerHuren">
        <p>© 2026 Het Industriegebouw</p>
      </footer>
    </>
  );
};

export default Huren;


