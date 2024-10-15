import React, { createContext } from "react";
import customerReviews from "../data/customers/customerReviews";

// Create a combined context with a default value of 'null'
export const AppContext = createContext(null);

const AppContextProvider = (props) => {
  // Combine the data into a single context value
  const contextValue = {
    customerReviews,
  };

  return (
    // Use the Provider component to pass down the combined data
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

// Export the AppContextProvider component so it can be used in other parts of the application
export default AppContextProvider;
