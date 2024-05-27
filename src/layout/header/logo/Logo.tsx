import { Icon } from "../../../components/Icon/Icon"
import s from "./Logo.module.css"

export const Logo = () => {
  return (
    <div className={s.logoWrapper}>
      <Icon iconId="logo" width="40" height="31" />
      <span className={s.logoName}>Puzzles.com</span>
    </div>
  )
}
