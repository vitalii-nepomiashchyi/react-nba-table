import classNames from "classnames";
import { ErrorMessage } from "formik";
import styles from './withLabel.module.scss';

export function withLabel(WrappedComponent: any) {
  const WithLabel = (props: any) => {
    const { field, form, className, children } = props;

    const { label, error, labelName } = styles;
    const { name } = field;
    const { touched, errors } = form;
    const displayName = name[0].toUpperCase() + name.slice(1);
    const hasError = touched[name] && errors[name];
    
    return (
      <label className={label}>
        <div className={labelName}>{displayName}</div>

        <WrappedComponent 
          field={field} 
          displayName={displayName} 
          className={classNames(className, { 'has-error': hasError })}
        >
        {children}
      </WrappedComponent>

        <ErrorMessage name={name}>
          {(msg) => <span className={error}>{msg}</span>}
        </ErrorMessage> 
      </label>
    ) 
  }

  return WithLabel;
}

