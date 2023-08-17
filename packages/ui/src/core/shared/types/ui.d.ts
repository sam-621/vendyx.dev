export type Menu =
  | {
      isDivision?: undefined
      text: string
      href: string
      solidIcon: ReactElement
      outlineIcon: ReactElement
    }
  | {
      isDivision?: true
      text?: undefined
      href?: undefined
      solidIcon?: undefined
      outlineIcon?: undefined
    }
