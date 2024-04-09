// src/pages/Home.jsx
import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Home() {
  return (
    <div className="home">
      <h2>Home</h2>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default Home;
