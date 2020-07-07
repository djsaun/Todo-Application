import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import plus from '../icons/plus.svg';
import plusWhite from '../icons/plus_white.svg'

const TodoForm = props => {
  const [text, setText] = useState('');
  const [categoryList, setCategoryList] = useState([])
  const [filteredCategoryList, setFilteredCategoryList] = useState([]);
  const [formFocused, setFormFocused] = useState(false);

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
  const filteredCategories = categoryList && categoryList.filter(category => category.btn);

  return (
    <FormContainer focused={formFocused} selectedCategory={category}>
      <FormInput value={text} onFocus={() => setFormFocused(true)} onBlur={() => setFormFocused(false)} onChange={e => setText(e.target.value)} placeholder="What do you need to get done?" />

      <FormControls>
        {/* Loop through all filtered categories and display them as buttons;
          Set the category for the todo item on button click
          If the current category button is clicked again, set the category to the default no_date
        */}
        {filteredCategories && filteredCategoryList.map(cat => <Button key={cat.id} id={cat.id} className={category === cat.id ? 'active' : ''} onClick={() => category !== cat.id ? setCategory(cat.id) : setCategory('no_date')}>{cat.title}</Button>)}

        <AddButton selectedCategory={category}></AddButton>
      </FormControls>
    </FormContainer>
  )
};

const FormContainer = styled.div`
  margin-bottom: 55px;
  padding: 30px 35px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  background: ${props => props.theme.givelifyTheme.colors.white};
  border-radius: 12px;
  box-shadow: ${props => props.focused ? `0 4px 32px ${rgba(props.theme.givelifyTheme.colors.categories[props.selectedCategory], .12)}` : `0 4px 8px ${props => props.theme.givelifyTheme.colors.grayShadow}`};
  transition: all .3s ease;

  > input {
    caret-color: ${ props => props.selectedCategory !== 'no_date' ? props.theme.givelifyTheme.colors.categories[props.selectedCategory] : props.theme.givelifyTheme.colors.gray900};
  }
`;

const FormInput = styled.input`
  font-size: 24px;
  color: ${props => props.theme.givelifyTheme.colors.gray500};
  line-height: 1.2;
  letter-spacing: -.02em;
  border: none;
  outline: none;

  &::placeholder {
    color: ${props => props.theme.givelifyTheme.colors.gray900}
  }
`;

const FormControls = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 12px 16px;
  margin-right: 8px;
  color: ${props => props.theme.givelifyTheme.colors.gray700};
  background: ${props => props.theme.givelifyTheme.colors.grayBackground};
  border: 1px solid ${props => props.theme.givelifyTheme.colors.white};
  border-radius: 100px;
  outline: none;
  cursor: pointer;
  transition: all .3s ease;

  &.active, &:hover, &:active, &:focus {
    color: ${props => props.theme.givelifyTheme.colors.categories[props.id]};
    background: ${props => rgba(props.theme.givelifyTheme.colors.categories[props.id], .1)};
  }

  &::last-of-type {
    margin-right: 0;
  }
`;

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 24px;
  background-color: ${props => props.selectedCategory !== 'no_date' ? props.theme.givelifyTheme.colors.categories[props.selectedCategory] : props.theme.givelifyTheme.colors.grayBackground};
  background-image: ${props => props.selectedCategory !== 'no_date' ? `url(${plusWhite})` : `url(${plus})`};
  background-size: 18px 18px;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${props => props.theme.givelifyTheme.colors.white};
  border-radius: 100px;
  cursor: pointer;
  outline: none;
  transform: rotate(0);
  transition: all .3s ease;

  &:hover, &:active, &:focus {
    background-image: url(${plusWhite});
    background-color: ${props => props.theme.givelifyTheme.colors.categories[props.selectedCategory]};
    transform: rotate(90deg);
  }
`;

export default TodoForm;
