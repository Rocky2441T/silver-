import React from 'react';
import { HabitProvider } from './context/HabitContext';
import Layout from './components/Layout';
import HabitList from './components/HabitList';

function App() {
  return (
    <HabitProvider>
      <Layout>
        <HabitList />
      </Layout>
    </HabitProvider>
  );
}

export default App;