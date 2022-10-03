import './Gif.css'

import { Link } from 'wouter'

export default function Gif({ id, title, url }) {
  return (
    <Link to={`/gif/${id}`} className="Gif-link">
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </Link>
  )
}
