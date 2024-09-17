import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (food) => {
    setFavorites((prevFavorites) => [...prevFavorites, food]);
  };

  const removeFavorite = (foodId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(food => food.id !== foodId));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
