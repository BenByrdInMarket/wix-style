import type {ReactElement, VFC} from "react";

const ComponentWrapper:VFC<{children: ReactElement, title: string}> = ({children, title}) => (
  <div style={{margin: '75px auto', width: '80%'}}>
    <h2>{title}</h2>
    {children}
  </div>
)

export default ComponentWrapper