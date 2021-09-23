import {Layout, Cell, LinearProgressBar} from "wix-style-react";
import type {VFC} from "react";

const ProgressBars:VFC = () => (
  <Layout>
    <Cell>
      <LinearProgressBar showProgressIndication value={0} />
    </Cell>
    <Cell>
      <LinearProgressBar showProgressIndication value={50} />
    </Cell>
    <Cell>
      <LinearProgressBar showProgressIndication value={100} />
    </Cell>
  </Layout>
)

export default ProgressBars