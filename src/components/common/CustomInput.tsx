import { FieldProps } from "formik";
import { withLabel } from "./withLabel";

interface Props extends FieldProps {
  displayName: string,
  className: string,
}

const CustomInput: React.FC<Props> = ({ field, displayName, className }) => (
  <input
    type="text"
    className={className}
    placeholder={displayName}
    {...field}
  />
)

export default withLabel(CustomInput)