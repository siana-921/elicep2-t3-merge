import axios from "axios";

const sToken = localStorage.getItem("token");
const sUser = localStorage.getItem("user");

const registUser = async (currentUser) => {
  console.log(currentUser);
  try {
    const response = await axios.post("/register", currentUser);
    console.log(response.data);
    const { user, token } = response.data;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    //
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (currentUser) => {
  console.log("Auth > loginUser");
};

export default { registUser, loginUser };
