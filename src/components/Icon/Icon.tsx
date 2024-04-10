import iconsSprite from "../../assets/img/iconsSprite.svg"

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "50"}
      height={props.height || "50"}
      viewBox={props.width && props.height ? `0 0 ${props.width} ${props.height}` : "0 0 50 50"}
      //   fill={Theme.colors.accent}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}
