import type {VFC} from "react";
import {Layout, AddItem} from "wix-style-react";

const UploadMedia:VFC = () => (
  <Layout gap={10} cols={1}>
    <AddItem
      size="large"
      subtitle="You can upload jpeg, png and gif files up to 5 mb size"
    >
      Drag here to upload
    </AddItem>
  </Layout>
);

export default UploadMedia