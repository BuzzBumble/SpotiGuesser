# SpotiGuesser
![logo gif](./img/Slide3_2.gif)
## geoguesser for spotify
Ever wonder what music around the world sounds like? Let's explore the world with our ears!

Try it out here: https://spotiguesser.tech/

## Inspiration
Our team of GeoGuesser enthusiasts came into this hackathon hoping to work with the Spotify API. Spotiguesser came to mind after stumbling across a Roadtrip app in Spotify's community showcase. With the lack of a beef jerky api to create roadtrip snack app, we decided to make a spin on our favorite game!!! uwu

SpotiGuesser brings players around the world to challenges their perceptions of what music in different cultures and regions sound like. In doing so, SpotiGuesser bridges cultural gaps and introduces listeners to music they wouldn't listen to normally.


## What it does
![logo gif](./img/demo.gif)

SpotiGuesser is web based game where 30 seconds of a randomly selected song is played and users gain points for correctly guessing the correct nationality of the song's artist.

## How we built it
Spotiguesser pulls tracks from a playlist through Spotify's developer API. Information about the artist and the track are pulled from happi-dev's api, providing us information such as the artist's nationality.

The front-end is built with React using functional components and hooks. Our map is rendered with leaflet and MapBox.

## Challenges we ran into
- Structuring component composition
- Managing API access in a secure manner
- Rendering leaflet's map according to user's actions

## Accomplishments that we're proud of
- A surprisingly smooth journey

## What we learned 
- React and React Hooks
- Managing APIs and API keys
- The importance of structuring component data flows
- Music origins can really surprise you

## What's next?
- Scoreboards to compete with others
- More nuanced scoring taking in to account guess distance, time taken etc.
- More things to guess such as year of the song or song name
- Battle Royal mode to compete with friends live


## Made with care by:
<!-- 
![Group photo]() -->


```json5
// our team: 
    'group_member_0': [estevan sinarta](https://github.com/esinarta),
    'group_member_1': [trung bui](https://github.com/imqt),
    'group_member_2': [vivian wu](https://github.com/vvnwu),
    'group_member_3': [steven kang](https://github.com/BuzzBumble)
```



