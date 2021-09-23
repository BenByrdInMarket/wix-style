import {useState} from "react";
import type {VFC} from "react";
import {Slider, Layout, Cell, FormField, Box, Input} from "wix-style-react";

const EditableSlider = () => {
  const [value, setValue] = useState(50);

  return (
    <Layout>
      <Cell>
        <FormField label="Opacity">
          <Box gap="12px">
            <Box display="block" width="100%">
              <Slider
                onChange={setValue}
                min={0}
                max={100}
                value={value}
                displayMarks={false}
              />
            </Box>
            <Box width="60px">
              <Input value={value} onChange={e => setValue(e.target.value)} />
            </Box>
          </Box>
        </FormField>
      </Cell>
    </Layout>
  );
};

const Sliders: VFC = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <>
      <Slider min={1} max={20} value={sliderValue} onChange={(e) => setSliderValue(e)}/>
      <EditableSlider />
    </>
  )
}

export default Sliders