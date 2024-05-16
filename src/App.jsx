import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dataMedium, setDataMedium] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@DIGOARTHUR');
        const data = await res.json();
        const items = data.items;
        setDataMedium(items);

      } catch {
        console.log(true);
      }
    }

    fetchData();

  }, []);

  console.log(dataMedium)

  return (
    <>
      <div className='title-container'>
        <div className='title'>
          <a href='https://github.com/DIGOARTHUR/MediumAPI'>
            <img src='https://github.com/DIGOARTHUR/how-to-build-NPM-package/assets/59892368/8bac27dd-92af-45ee-b9b6-e163f9739244' className="logo medium" alt="React logo" />
            <h1 style={{ fontSize: '100px', color: 'white' }}>Medium API</h1>
          </a>
        </div>
        <div>
          <h3 style={{ fontStyle: 'italic' }}>Showcase your tech articles in your portfolio using the Medium API </h3>
        </div>

      </div>

      <div className='body-container'>
        {
          dataMedium.map((item, index) => {
            return (
              <div key={index} className='card-container'>
                <div className='data-container'>
                  <span>
                    {item.pubDate}
                  </span>
                </div>

                <h2 style={{ fontSize: '21px' }}>
                  {item.title}
                </h2>
                <a className='link-container' href={item.guid}> <img style={{ height: '30px' }} src='https://github.com/DIGOARTHUR/how-to-build-NPM-package/assets/59892368/aa148793-2ccb-4932-a548-7062e548941a' />Read</a>
                <div className='categories-container'>
                  {
                    item.categories.map((item,index) => {
                      return (
                        <span key={index} className='categories'>{item}</span>
                      )
                    })
                  }
                </div>


              </div>
            )

          })
        }

      </div>



      <div className="rodapé">

        <p>
          Edit <code>src/App.jsx</code>, put (MEDIUM @Username) in API and save to test MEDIUM API
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
