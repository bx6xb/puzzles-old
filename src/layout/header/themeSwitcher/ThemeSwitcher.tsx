import { Icon } from "../../../components/Icon/Icon"
import s from "./ThemeSwitcher.module.css"

export const ThemeSwitcher = () => {
  return (
    <div className={s.themeSwitcher}>
      <Icon iconId="themeSwitcher" width="25" height="25" />
    </div>
  )
}
