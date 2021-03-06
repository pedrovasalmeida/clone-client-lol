import { createContext, useContext, useState } from 'react';

interface AuthContext {
  user: string | null;
  userDataFromInput: string;
  signIn: (user: string) => void;
  signOut: () => void;
  setUserData: (value: string) => void;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [userLogin, setUserLogin] = useState<string | null>(() => {
    const user = localStorage.getItem('@CloneLol:user');

    if (user) return user;

    return null;
  });

  const [userDataFromInput, setUserDataFromInput] = useState('');

  const setUserData = (value: string) => {
    setUserDataFromInput(value);
  };

  const signIn = (user: string) => {
    localStorage.setItem('@CloneLol:user', user);
    setUserLogin(user);
    setUserDataFromInput('');
  };

  const signOut = () => {
    localStorage.removeItem('@CloneLol:user');
    setUserDataFromInput('');
    setUserLogin(null);
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider
      value={{
        user: userLogin,
        signIn,
        signOut,
        setUserData,
        userDataFromInput,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContext {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');

  return context;
}
