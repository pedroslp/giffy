import Gif from '../../components/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function Details({ params }) {
  const gifs = useGlobalGifs()
  console.log('🚀 - gifs', { gifs })

  const gif = gifs.find((singleGif) => singleGif.id === params.id)
  console.log(gif)

  //console.log(params.id)
  return <Gif {...gif} />
}
