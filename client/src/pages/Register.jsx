import React, { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Auth from "../context/auth";

const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
  role: "user",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { registUser, loginUser } = Auth;

  const handleSubmit = (e) => {
    console.log("submit Form");
    e.preventDefault();

    const { name, email, password, address, phone, role, isMember } = values;

    if (isMember) {
      if (!email || !password) {
        alert("이메일과 비밀번호를 입력해 주세요.");
        return;
      }
    } else if (!name || !email || !password || !address || !phone) {
      alert("모두 입력해 주세요.");
      return;
    }

    const currentUser = { name, email, password, address, phone, role };
    console.log({ currentUser });

    if (isMember) {
      console.log(`isMember: ${isMember}. auth.jsx의 loginUser함수 실행`);
      loginUser(currentUser);
    } else {
      console.log(`isMember: ${isMember}. auth.jsx의 registerUser함수 실행`);
      registUser(currentUser);
    }
  };

  const toggleMember = (e) => {
    e.preventDefault();
    setValues({ ...values, isMember: !values.isMember });
    return;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    return;
  };

  //localstorage에 user가 있는 경우, 페이지가 사용자에 의해 강제로 이동되는 경우 root page로 강제이동
  /*
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        console.log(user);
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);
*/

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          value={values.email}
          name="email"
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          value={values.password}
          name="password"
          handleChange={handleChange}
        />

        {!values.isMember && (
          <FormRow
            type="text"
            value={values.address}
            name="address"
            handleChange={handleChange}
          />
        )}

        {!values.isMember && (
          <FormRow
            type="text"
            value={values.phone}
            name="phone"
            handleChange={handleChange}
          />
        )}

        {!values.isMember && (
          <FormRow
            type="text"
            value={values.role}
            name="role"
            handleChange={handleChange}
          />
        )}

        {/*왜인지 submit이 안돼서 onclick넣음*/}
        <Button
          type="submit"
          style={{ width: "100%", marginTop: "10px" }}
          onClick={handleSubmit}
        >
          확인
        </Button>

        <p>
          {!values.isMember
            ? "이미 가입하셨다면 "
            : "아직 가입하지 않으셨다면 "}
          <a href="" onClick={toggleMember}>
            {!values.isMember
              ? "여기를 클릭해서 로그인"
              : "여기를 클릭해서 가입"}
          </a>
          하세요.
        </p>
      </Form>
    </div>
  );
};

export default Register;
