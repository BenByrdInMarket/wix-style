import type {VFC} from "react";
import {Card, Layout, Cell, FormField, ImageViewer, Input, InputArea, Box, Checkbox} from "wix-style-react"

export const FormCardExample:VFC = () => (
  <Card>
    <Card.Header title="New Dish" />
    <Card.Divider />
    <Card.Content>
      <Layout>
        <Cell span={4}>
          <FormField label="Image">
            <ImageViewer width="100%" height="176px" />
          </FormField>
        </Cell>
        <Cell span={8}>
          <Layout gap="24px">
            <Cell span={8}>
              <FormField label="Name">
                <Input value="My New Dish" />
              </FormField>
            </Cell>
            <Cell span={4}>
              <FormField label="Price">
                <Input value="0" prefix={<Input.Affix>$</Input.Affix>} />
              </FormField>
            </Cell>
            <Cell>
              <FormField label="Description">
                <InputArea
                  placeholder="Enter your dish details"
                  resizable
                  rows={3}
                />
              </FormField>
            </Cell>
          </Layout>
        </Cell>
        <Cell span={6}>
          <FormField label="Labels" infoContent="Choose your preferences">
            <Layout>
              <Cell span={6}>
                <Box direction="vertical" gap="12px">
                  <Checkbox>Special</Checkbox>
                  <Checkbox>Vegan</Checkbox>
                  <Checkbox>Vegeterian</Checkbox>
                </Box>
              </Cell>
              <Cell span={6}>
                <Box direction="vertical" gap="12px">
                  <Checkbox>Gluten Free</Checkbox>
                  <Checkbox>Organic</Checkbox>
                  <Checkbox>Spicy</Checkbox>
                </Box>
              </Cell>
            </Layout>
          </FormField>
        </Cell>
        <Cell span={3}>
          <FormField label="Visibility">
            <Checkbox checked>Visible</Checkbox>
          </FormField>
        </Cell>
        <Cell span={3}>
          <FormField label="Inventory">
            <Checkbox checked>In Stock</Checkbox>
          </FormField>
        </Cell>
      </Layout>
    </Card.Content>
  </Card>
)