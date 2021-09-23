import type {ReactElement, VFC} from "react";

const InnerWrapper:VFC<{ children: ReactElement }> = ({ children }) => (
  <div style={{margin: '75px auto', width: '80%', maxWidth: '800px'}}>
    {children}
  </div>
)

export default InnerWrapper