import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'

export default function SearchResults({ params }) {
  const { keyword } = params // obtenemos del params pasado por la url la keyword
  const { loading, gifs } = useGifs({ keyword })

  if (loading) return <Spinner />

  // TODO: export to ListOfGifs component
  return <ListOfGifs gifs={gifs} />
}
