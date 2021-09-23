import type {VFC} from "react";
import {Layout, AddItem} from "wix-style-react";

const ThemedAddItem:VFC = () => (
  <Layout gap={10} cols={1}>
    <div style={{ height: '55px' }}>
      <AddItem theme="dashes">Add Item</AddItem>
    </div>
    <div style={{ height: '55px' }}>
      <AddItem theme="plain">Add Item</AddItem>
    </div>
    <div style={{ height: '55px' }}>
      <AddItem theme="filled">Add Item</AddItem>
    </div>
    <div>
      <AddItem theme="image" tooltipContent="Add Item">
        Add Item
      </AddItem>
    </div>
  </Layout>
);

export default ThemedAddItem