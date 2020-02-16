import React from 'react';
import './App.css';
import { useAppData } from './utils/useAppData';

const App = () => {
  const appData = useAppData()

  if (!appData.areUsersLoaded || !appData.arePostsLoaded || !appData.areCommentsLoaded) {
    return (
      <div>Failed to load data</div>
    )
  }

  return (
    <div></div>
  )
}

export default App;
