import { FieldProps } from "formik";
import { withLabel } from "./withLabel";

interface Props extends FieldProps {
  className: string,
  children: React.ReactNode,
}

const CustomSelect: React.FC<Props> = ({ field, className, children }) => (
  <select className={className} {...field}>
    {children}
  </select>
)

export default withLabel(CustomSelect);