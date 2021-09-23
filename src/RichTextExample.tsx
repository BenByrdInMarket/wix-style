import type {VFC} from "react";
import {Card, FormField, RichTextInputArea} from "wix-style-react";

export const RichTextExample:VFC = () => (
  <Card>
    <Card.Header title="About Your Event (Optional)" />
    <Card.Divider />
    <Card.Content>
      <FormField label="What is this event about?">
        <RichTextInputArea
          minHeight="120px"
          placeholder="Use this space to tell guests more about this event, e.g., event schedule, speakers, important info & more."
        />
      </FormField>
    </Card.Content>
  </Card>
)