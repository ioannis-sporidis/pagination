import { useState, useEffect } from 'react';
import { useFetch } from './helpers/useFetch';
import Follower from './components/Follower';

function App() {
  const { loading, data } = useFetch();

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {data.map(follower => {
            return <Follower key={follower.id} {...data} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
