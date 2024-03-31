import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "../../components/container/Container"
import { HomePage } from "./homePage/HomePage"
import { GamesPage } from "./gamesPage/GamesPage"
import { ProfilePage } from "./profilePage/ProfilePage"
import { AboutPage } from "./aboutPage/AboutPage"
import { Error404Page } from "./error404Page/Error404Page"

export const Main = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </Container>
  )
}
