import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "../../components/Container/Container"
import { HomePage } from "./HomePage/HomePage"
import { GamesPage } from "./GamesPage/GamesPage"
import { ProfilePage } from "./ProfilePage/ProfilePage"
import { AboutPage } from "./AboutPage/AboutPage"
import { Error404Page } from "./Error404Page/Error404Page"
import { MemoryGameContainer } from "./games/MemoryGame/MemoryGameContainer"
import styled from "styled-components"
import { SchulteTable } from "./games/SchulteTable/SchulteTable"
import { Snake } from "./games/Snake/Snake"

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />}>
            <Route path="/games/schulte-table" element={<SchulteTable />} />
            <Route path="/games/snake" element={<Snake />} />
            <Route path="/games/memory-game" element={<MemoryGameContainer />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<Error404Page />} />
        </Routes>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.div`
  min-height: calc(100vh - 60px);
`
