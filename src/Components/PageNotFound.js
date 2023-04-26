//not found page
import { useNavigate } from 'react-router-dom';
import './PageFound.css';

export default function PageNotFound() {
  const navigate = useNavigate()
  const home = () => {
    navigate('/')
  }
  return (
    <div className='error float-end' style={{ width: "85%" }} >
      <h1>404 Error</h1>
      <section className="error-container">
        <span>4</span>
        <span><span className="screen-reader-text">0</span></span>
        <span>4</span>
      </section>
      <div className="link-container">
        <a onClick={() => home()} className="more-link">Back to home</a>
      </div>
    </div>
  )
}