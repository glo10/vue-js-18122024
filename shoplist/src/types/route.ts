import type { DefineComponent } from "vue"

interface P {
  path: string,
  params: { isin?: string }
}
interface R {
  path: string
  name: string
  component?: DefineComponent
  props?: object | boolean
  meta?: object
  alias?: string,
  beforeRouteLeave? (to: P, from: P, next: CallableFunction) : void,
  beforeEnter? (to: P, from: P, next: CallableFunction) : void
}

export interface RouteType extends R {
  children?: R[]
}