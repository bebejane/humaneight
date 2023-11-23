import { FieldError, Label, Radio, RadioGroup, Text } from 'react-aria-components';

export default function VariantSelector(props: any) {

  let ref = React.useRef(null);
  let { radioGroupProps } = useRadioGroup(props, ref);

  return (
    <RadioGroup>
      <Label />
      <Radio />
      <Text slot="description" />
      <FieldError />
    </RadioGroup>
  )

}
