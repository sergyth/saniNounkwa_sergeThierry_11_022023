//import { useRouteError } from "react-router-dom";
import {Link} from 'react-router-dom'
import './ErrorPage.css'

export default function ErrorPage() {
  //const error = useRouteError();

  return (
    <div className='errorPage'>
      <p className="errorPage_code">404</p>
      <p className="errorPage_message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/' className='errorPage_link'>Retourner sur la page d'accueil</Link>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  )
}
