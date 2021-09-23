import type {VFC} from "react";
import {Layout, Cell, FormField, Box, Input, Checkbox, Dropdown, MultiSelect, TextButton} from "wix-style-react";

export const FormsExample:VFC = () => {
  return (
    <Layout gap="24px">
      <Cell span={2}>
        <FormField label="Name" />
      </Cell>
      <Cell span={10}>
        <Box direction="vertical" gap="12px">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </Box>
      </Cell>
      <Cell span={2}>
        <FormField label="Email" />
      </Cell>
      <Cell span={10}>
        <Box direction="vertical" gap="6px">
          <Input placeholder="Email Address" />
          <Checkbox checked> Send welcome email</Checkbox>
        </Box>
      </Cell>
      <Cell span={2}>
        <FormField label="Phone" />
      </Cell>
      <Cell span={10}>
        <Input placeholder="e.g. +44 XXX XXXXX" />
      </Cell>
      <Cell span={2}>
        <FormField label="Address" />
      </Cell>
      <Cell span={10}>
        <Box direction="vertical" gap="12px">
          <Input placeholder="Street" />
          <Layout cols={2} gap="12px">
            <Input placeholder="City" />
            <Input placeholder="Zip code" />
            <Dropdown placeholder="Country" />
          </Layout>
        </Box>
      </Cell>
      <Cell span={2}>
        <FormField label="Labels" />
      </Cell>
      <Cell span={10}>
        <MultiSelect
          mode="select"
          customSuffix={<TextButton>+ Add Label</TextButton>}
        />
      </Cell>
    </Layout>
  )
}