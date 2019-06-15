import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) { callback(values); }
  }, [callback, errors, isSubmitting, values]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const handleImgChange = () => {
    const selectFile = document.getElementById('avatar').files;
    if (selectFile.length > 0) {
      const imageFile = selectFile[0];
      const fr = new FileReader();
      fr.addEventListener('load', (event) => {
        const imgTag = document.getElementById('imgUser');
        imgTag.src = event.target.result;
        imgTag.innerHTML = event.target.result;
        setValues(values => ({ ...values, avatar: event.target.result }));
      });
      fr.readAsDataURL(imageFile);
    }
  };

  return {
    handleChange,
    handleImgChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
