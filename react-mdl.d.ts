declare module 'react-mdl' {
  import * as React from 'react'

  interface Properties {
    className?: string
    key?
    style?: Object
    border?: boolean
  }

  interface CardProperties extends Properties {
    shadow?: number
    onClick?: (event: MouseEvent) => void
  }

  interface DrawerProperties extends Properties {
    title?: string
  }

  interface ButtonProperties extends Properties {
    colored?: boolean
    ripple?: boolean
    onClick?: (event: MouseEvent) => void
  }

  interface IconButtonProperties extends ButtonProperties {
    name: string
  }

  interface LayoutProperties extends Properties {
    fixedDrawer?: boolean
    fixedHeader?: boolean
  }

  interface HeaderProperties extends DrawerProperties {
    hideSpacer?: boolean
    hideTop?: boolean
  }

  export class Button extends React.Component<ButtonProperties, {}> {}
  export class Card extends React.Component<CardProperties, {}> {}
  export class CardTitle extends React.Component<Properties, {}> {}
  export class CardText extends React.Component<Properties, {}> {}
  export class CardActions extends React.Component<Properties, {}> {}
  export class CardMenu extends React.Component<Properties, {}> {}
  export class Content extends React.Component<Properties, {}> {}
  export class Drawer extends React.Component<DrawerProperties, {}> {}
  export class FABButton extends React.Component<ButtonProperties, {}> {}
  export class Header extends React.Component<HeaderProperties, {}> {}
  export class HeaderRow extends React.Component<HeaderProperties, {}> {}
  export class IconButton extends React.Component<IconButtonProperties, {}> {}
  export class Icon extends React.Component<IconButtonProperties, {}> {}
  export class Navigation extends React.Component<Properties, {}> {}
  export class Layout extends React.Component<LayoutProperties, {}> {}

}
