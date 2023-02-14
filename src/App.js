import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'

function App() {

  const fav = [];
  const favLength = fav.length;



  const heart = <FontAwesomeIcon icon={faHeart} />
  const trash = <FontAwesomeIcon icon={faTrash} />

  /*Crear tarjetas

  const fetchCharacter = (name) => {
    fetch(``)
    .then(respuesta => respuesta.json())
    .then((data) => {
      createTarget(data);
    });
  } 

  const createTarget = (character) => {


    const card = document.createElement('div');
    card.classList.add('card h-100');


    const pict = document.createElement('img');
    pict.classList.add(card-img-top)
    pict.src = '...';
    card.appendChild(pict);


    const cardBody = document.createElement('div);
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    cardBody.appendChild(title);

    const gender = document.createElement('p')
    gender.classList.add('gender');
    gender.textContent = character.gender;
    cardBody.appendChild(gender)

    const hairColor = document.createElement('p')
    hairColor.classList.add('hairColor');
    hairColor.textContent = character.hairColor;
    cardBody.appendChild(hairColor)

    const eyeColor = document.createElement('p')
    eyeColor.classList.add('eyeColor');
    eyeColor.textContent = character.eyeColor;
    cardBody.appendChild(eyeColor)

    card.appendChild(cardBody);



  }

  
    */

  const fetchStarsWars = () => {
    fetch('https://www.starwars.com/databank')
      .then(res => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  console.log(fetchStarsWars());

  return (
    <div className='container'>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <img className="img-fluid" src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254' />
          <div className="dropdown">
            <button className="btn btn-dark border-light dropdown-toggle pr-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites <span className="badge text-bg-secondary">{favLength}</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"><button className='btn btn-dark'>X</button> Fav 1</a></li>
            </ul>
          </div>
        </div>
      </nav >
      <div className='container pt-4 pb-4'>
        <div className='row'>
          <h2>Characters</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img src="https://lumiere-a.akamaihd.net/v1/images/emperor-palpatine-main_d6632d0a.jpeg?region=554%2C0%2C813%2C813" className="card-img-top" />
                <div className="card-body">
                  <h5 className="title">Card title</h5>
                  <p className="gender">Gender:</p>
                  <p className="hairColor">Hair-Color:</p>
                  <p className="eyeColor">Eye-Color:</p>
                </div>
                <div className='container pb-4'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <button type="button" className="btn btn-dark shadow">Learn More...</button>
                    </div>
                    <div className='col-md-6'>
                      <button type="button" className="btn btn-light border-warning text-warning shadow">{heart}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row pt-4'>
            <h2>Planets</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Planet name</h5>
                    <p className="card-text">Population:</p>
                    <p className="card-text">Terrain:</p>
                  </div>
                  <div className='container pb-4'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <button type="button" className="btn btn-dark shadow">Learn More...</button>
                      </div>
                      <div className='col-md-6'>
                        <button type="button" className="btn btn-light border-warning text-warning shadow">{heart}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}
export default App;
