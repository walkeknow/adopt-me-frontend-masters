import { createContext } from 'react';

// The empty function will be replaced by the value passed in
const ThemeContext = createContext(['green', () => {}]);

export default ThemeContext;
