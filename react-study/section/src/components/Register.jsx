import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input ref={inputRef} name="name" type="text" onChange={onChange} />
      </div>
      <div>
        <input name="birth" type="date" onChange={onChange} />
      </div>
      <div>
        <select name="country" onChange={onChange}>
          <option value=""></option>
          <option value="kr">서울</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea onChange={onChange} name="bio" id="bio" />
      </div>
      <button onClick={onSubmit}>제출</button>
    </>
  );
};

export default Register;
