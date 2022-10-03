import { useContext, useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  /*
    Renderiza el componente. Recibe 2 parametros:
    1. la funcion, 2. un array de dependencias.
    Si el array está vacio se ejecuta una sola vez
  */
  useEffect(
    function () {
      setLoading(true)
      // recuperamos la keyword del localStorage
      const keywordToUse =
        keyword || localStorage.getItem('lastKeyword') || 'pandas'

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword, setGifs]
  )

  return { loading, gifs }
}
