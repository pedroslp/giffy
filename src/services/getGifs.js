const apiKey = 'AjesZvSq3GZZ4eZUcL0GzIIHo9yWl7ta'

export default function getGifs({ keyword = 'panda' } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response
      const gifs = data.map((image) => {
        const { images, id, title } = image
        const { url } = images.downsized_medium

        return { id, title, url }
      })
      return gifs
    })
}
