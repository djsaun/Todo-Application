import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const TodoForm = props => {
  const [text, setText] = useState('');
  const [categoryList, setCategoryList] = useState([])
  const [category, setCategory] = useState('no_date');

  useEffect(() => {
    setCategoryList(props.categories)
  }, [props.categories])

  return (
    <FormContainer>
      <FormInput value={text} onChange={e => setText(e.target.value)} placeholder="What do you need to get done?" />
    </FormContainer>
  )
};

const FormContainer = styled.div`
  /* background: red; */
`;

const FormInput = styled.input`
  /* background: green; */
`;

export default TodoForm;
