import type {VFC} from "react";

const Heading:VFC<{value: string}> = ({ value }) => (
  <div style={{width: '100%', textAlign: 'center'}}>
    <h1>{value}</h1>
  </div>
)

export default Heading