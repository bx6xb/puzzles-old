import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "../../components/Container/Container"
import { HomePage } from "./homePage/HomePage"
import { GamesPage } from "./gamesPage/GamesPage"
import { ProfilePage } from "./profilePage/ProfilePage"
import { AboutPage } from "./aboutPage/AboutPage"
import { Error404Page } from "./error404Page/Error404Page"
import { SchulteTableContainer } from "./games/schulteTable/SchulteTableContainer"
import { SnakeContainer } from "./games/snake/SnakeContainer"
import { MemoryGameContainer } from "./games/memoryGame/MemoryGameContainer"

export const Main = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />}>
          <Route path="/games/schulte-table" element={<SchulteTableContainer />} />
          <Route path="/games/snake" element={<SnakeContainer />} />
          <Route path="/games/memory-game" element={<MemoryGameContainer />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </Container>
  )
}
