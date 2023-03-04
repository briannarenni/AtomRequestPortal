import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '2px solid blue' : '1px solid gray',
    boxShadow: 'none'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'blue' : 'white',
    color: state.isSelected ? 'white' : 'black'
  })
};

function MySelect({ options }) {
  return (
    <Select
      options={options}
      styles={customStyles}
    />
  );
}
