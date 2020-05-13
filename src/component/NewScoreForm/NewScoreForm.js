import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import ErrorMessage from "./ErrroMessage";
import CurdApi from '../../Utils/CurdApi'
import './NewScoreForm.css'

function NewScoreForm(props) {
    const form = useForm();
    const {
      register,
      handleSubmit,
      errors
    } = form;
    const history = useHistory();
    
    const [score, setScore] = useState({
      id:0,
      team: '',
      point: 0
    });
  
    const onSubmit = (data, e) => {
      e.target.reset();
      e.preventDefault();
      CurdApi.postScore(data, history);
    }
  
    const disallowMarkupText = input => {
      const regex = /^[a-zA-Z0-9,\\. ä å ö A Å Ö ]*$/;
      if (regex.test(input.target.value)) {
        setScore({ ...score, [input.target.name]: input.target.value });
      } else {
        let lastChar = input.target.value.substr(input.target.value.length - 1);
        alert("Markup text is not allowed, please remove: " + lastChar);
      }
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} data-test="NewScoreForm" >
        <br/>
        <h2><b>Add New Score</b></h2>
        <br/>
        <label style={{display: 'inline'}}>Team name: </label>

        <input value={score.team}
          name="team" type="text"
          placeholder="Team Name"
          onChange={(input) => { disallowMarkupText(input) }}
          ref={register({ required: true })} />
        <ErrorMessage error={errors.team} />
        <br />
        <label style={{display: 'inline'}}>Point: </label>
        <input value={score.point}
          name="point" type="number"
          placeholder="0"
          onChange={(input) => { disallowMarkupText(input) }}
          ref={register({ required: true })} />
        <ErrorMessage error={errors.point} />
  
        <input type="submit" value="add score" />

      </form>
    );
  }

export default NewScoreForm;
