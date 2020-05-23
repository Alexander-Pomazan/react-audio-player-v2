export const loadImage = (src: string): Promise<Event> => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = src

    image.onload = resolve

    image.onerror = reject
  })
}
