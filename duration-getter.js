const { getAudioDurationInSeconds } = require('get-audio-duration')

const fileLocations = ['krepost', 'ludi', 'shans'].map(
  (n) => `./public/tracks/dayte-tank-${n}.mp3`,
)

const getDurations = async () => {
  const result = await Promise.all(
    fileLocations.map(async (location) => [
      location,
      await getAudioDurationInSeconds(location),
    ]),
  )

  console.log(Object.fromEntries(result))
}

getDurations()
