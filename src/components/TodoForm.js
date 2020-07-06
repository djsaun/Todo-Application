import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

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
      <FormInput value={text} selectedCategory={category} onChange={e => setText(e.target.value)} placeholder="What do you need to get done?" />

      <div>
        {/* Loop through all filtered categories and display them as buttons;
          Set the category for the todo item on button click
          If the current category button is clicked again, set the category to the default no_date
        */}
        {filteredCategories && filteredCategoryList.map(cat => <Button key={cat.id} id={cat.id} className={category === cat.id ? 'active' : ''} onClick={() => category !== cat.id ? setCategory(cat.id) : setCategory('no_date')}>{cat.title}</Button>)}
      </div>

    </FormContainer>
  )
};

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 200px;
`;

const FormInput = styled.input`
  caret-color: ${ props => props.theme.givelifyTheme.colors.categories[props.selectedCategory]};`;

const Button = styled.button`
  padding: 12px 16px;
  color: ${props => props.theme.givelifyTheme.colors.gray700};
  background: ${props => props.theme.givelifyTheme.colors.grayBackground};
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all .3s ease;

  &.active, &:hover, &:active, &:focus {
    color: ${props => props.theme.givelifyTheme.colors.categories[props.id]};
    background: ${props => rgba(props.theme.givelifyTheme.colors.categories[props.id], .1)};
  }
`;

export default TodoForm;
