import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  TextareaHTMLAttributes,
  HtmlHTMLAttributes
} from "react";
import TextAreaFieldGroup from "../TextAreaFieldGroup";
import { connect } from "react-redux";
import { resetErrors } from "../../redux/actions/authActions";
import { addPost } from "../../redux/actions/postActions";
import styles from './styles.module.scss'

interface Props {
  resetErrors: Function;
  errors: any;
  auth: any;
  addPost: Function;
}

function PostForm(props: Props) {
  useEffect(() => {
    props.resetErrors();
  }, []);
  const [text, setText] = useState("");
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const newPost = {
      text,
      username: props.auth.user.username,
      avatar: props.auth.user.avatar
    };
    props.addPost(newPost);
    setText("");
  }
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  return (
    <div className={styles.PostForm}>
      <div className={styles.header}>随便说点啥..</div>
      <form onSubmit={onSubmit}>
        <TextAreaFieldGroup
          placeholder="留言说点.."
          name="text"
          value={text}
          onChange={onChange}
          error={props.errors.text}
          style={{marginBottom:'5px'}}
        />
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {
  resetErrors,
  addPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
