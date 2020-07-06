import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const TodoForm = props => {
  const [text, setText] = useState('');
  const [categoryList, setCategoryList] = useState([])
  const [filteredCategoryList, setFilteredCategoryList] = useState([]);

  // Todo item category defaults to no date
  const [category, setCategory] = useState('no_date');

  useEffect(() => {
    // Update the category list whenever the prop updates
    setCategoryList(props.categories);

    // The filtered category list contains the items that we're going to display on the frontend
    // No Date is not a valid option, so we'll exclude it from our state here if it exists
    setFilteredCategoryList(props.categories.filter(category => category.id !== 'no_date'))
  }, [props.categories]);

  // Filter through all categories and return those that will display a button on the frontend
  const filteredCategories = categoryList && categoryList.filter(category => category.includeBtn);

  return (
    <FormContainer>
      <FormInput value={text} onChange={e => setText(e.target.value)} placeholder="What do you need to get done?" />

      {/* Loop through all filtered categories and display them as buttons;
          Set the category for the todo item on button click
          If the current category button is clicked again, set the category to the default no_date
      */}
      {filteredCategories && filteredCategoryList.map(cat => <Button key={cat.id} id={cat.id} onClick={() => category !== cat.id ? setCategory(cat.id) : setCategory('no_date')}>{cat.title}</Button>)}
    </FormContainer>
  )
};

const FormContainer = styled.div`
  /* background: red; */
`;

const FormInput = styled.input`
  /* background: green; */
`;

const Button = styled.button`
  padding: 12px 16px;
  background: ${props => props.theme.givelifyTheme.colors.grayBackground};
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all .3s ease;

  &:hover, &:active, &:focus {
    color: ${props => props.theme.givelifyTheme.colors.categories[props.id]};
    background: ${props => props.theme.givelifyTheme.colors.categories[props.id]};
  }
`;

export default TodoForm;
