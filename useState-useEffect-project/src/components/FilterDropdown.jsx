

const FilterDropdown = ({ 
  id, 
  label, 
  value, 
  options, 
  onChange, 
  allOptionText 
}) => (
  <div className="control-group">
    <label htmlFor={id}>{label}</label>
    <select id={id} value={value} onChange={onChange}>
      <option value="all">{allOptionText}</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default FilterDropdown;
