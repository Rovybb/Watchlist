import { BannerStyled, Circle1, Circle2, Circle3 } from "./styles/Banner.styled"

function Banner() {
  return (
    <BannerStyled>
        <h1>Welcome</h1>
        <p>
          Welcome to our movie watchlist site, where you can easily keep track of the movies you want to watch. Simply search for the movies you're interested in, add them to your personal watchlist. Stay up-to-date with the latest releases, save your favorite films for later, and never forget a movie you've been meaning to watch. Start building your watchlist today and make your movie-watching experience more organized and enjoyable.
        </p>
        <Circle1 />
        <Circle2 />
        <Circle3 />
    </BannerStyled>
  )
}

export default Banner