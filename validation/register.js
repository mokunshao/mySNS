const Validator = require('validator');
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if(!Validator.isLength(data.username,{min:2,max:30})){
    errors.username = "名字的长度不能小于2位并且不能大于30位!";
  }

  if(Validator.isEmpty(data.username)){
    errors.username = "名字不能为空!";
  }

  if(Validator.isEmpty(data.email)){
    errors.registerEmail = "邮箱不能为空!";
  }

  if(!Validator.isEmail(data.email)){
    errors.registerEmail = "邮箱不合法!";
  }

  if(Validator.isEmpty(data.password)){
    errors.registerPassword = "密码不能为空!";
  }

  if(!Validator.isLength(data.password,{min:6,max:30})){
    errors.registerPassword = "密码的长度不能小于6位并且不能大于30位!";
  }

  if(Validator.isEmpty(data.password2)){
    errors.password2 = "确认密码不能为空!";
  }

  if(!Validator.equals(data.password,data.password2)){
    errors.password2 = "两次不一致!";
  }



  return {
    errors,
    isValid:isEmpty(errors)
  };
}