import React, { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

export default function ListOfGifs({ params }) {
  const { keyword } = params // obtenemos del params pasado por la url la keyword
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  /*
    Renderiza el componente. Recibe 2 parametros:
    1. la funcion, 2. un array de dependencias.
    Si el array está vacio se ejecuta una sola vez
  */
  useEffect(function () {
    setLoading(true)
    getGifs({ keyword })
      .then((gifs) => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  if (loading) return <i>Loading 🌀</i>

  return (
    <div>
      {
        gifs.map(({ id, title, url }) => (
          <Gif
            key={id}
            title={title}
            url={url}
          />
        ))
      }
    </div>
  )
}
