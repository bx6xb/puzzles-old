import s from "./PlayButton.module.css"

type PlayButtonPropsType = {
  callback: () => void
}

export const PlayButton = (props: PlayButtonPropsType) => {
  return (
    <button onClick={props.callback} className={s.playButton}>
      Play
    </button>
  )
}
