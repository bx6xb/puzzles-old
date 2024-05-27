import s from "./PlayButton.module.css"

type PlayButtonPropsType = {
  callback: () => void
}

export const PlayButton = (props: PlayButtonPropsType) => {
  return (
    <div onClick={props.callback} className={s.playButton}>
      Play
    </div>
  )
}
