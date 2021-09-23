import {Layout, Cell, Loader} from "wix-style-react";
import type {VFC} from "react";

const Loaders:VFC = () => (
  <Layout>
    <Cell span={3}>
      <Loader size="tiny" />
    </Cell>
    <Cell span={3}>
      <Loader size="small" />
    </Cell>
    <Cell span={3}>
      <Loader size="medium" />
    </Cell>
    <Cell span={3}>
      <Loader size="large" />
    </Cell>
    <Cell span={3}>
      <Loader status="loading" />
    </Cell>
    <Cell span={3}>
      <Loader status="success" />
    </Cell>
    <Cell span={3}>
      <Loader status="error" />
    </Cell>
  </Layout>
);

export default Loaders