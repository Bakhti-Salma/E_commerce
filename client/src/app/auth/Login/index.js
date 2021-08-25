import React,{useState} from 'react'
import { connect } from "react-redux";
import { login } from "../../../actions/auth.actions";
import PropTypes from "prop-types";
const Login = ({login}) => {
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const onChangeData = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value });
    console.log(setLoginData);
  };
  const onSubmitData = async (e) => {
    e.preventDefault();
    await login(LoginData);
    
  };
  
    return (
        <div class="w-full h-screen flex">
    <img src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="background" class="object-cover object-center h-screen w-7/12"/>
    <div class="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg">
     <form
          onSubmit={(e) => onSubmitData(e)}
          class="bg-secondary-tint shadow-lg rounded px-12 pt-6 pb-8 mb-4">
      <h1 class="text-3xl font-bold text-yellow-600 mb-2">LOGIN</h1>
      <div class="w-1/2 text-center">
      <div class="mb-4">
            <label
              class="block text-dark text-sm font-normal mb-2"
              for="email">
              Email
            </label>
        <input
         type="email"
         name="email"
          placeholder="email"
           required
            class="shadow-md border w-full h-10 px-3 py-2 text-yellow-600 focus:outline-none focus:border-yellow-600 mb-3 rounded"
            value={LoginData.email}
              onChange={(e) => onChangeData(e)}
            />
            </div>
            <div class="mb-6">
            <label
              class="block text-dark text-sm font-normal mb-2"
              for="password">
              Password
            </label>
        <input type="password"
        name="password"
         placeholder="password" 
            class="shadow-md border w-full h-10 px-3 py-2 text-yellow-600 focus:outline-none focus:border-yellow-600 mb-3 rounded"
            value={LoginData.password}
              onChange={(e) => onChangeData(e)}/>
              </div>
        <button class="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-lg focus:outline-none shadow">Sign In</button>
      </div>
      </form>
    </div>
  </div>
    );
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  
};
const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


