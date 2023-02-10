import { useField } from "formik";

export default function Input({ label, className, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} className={className} />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}
