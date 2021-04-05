import './styles.css'

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      type="search"
      className="text-input"
      placeholder="typer your search"
      onChange={handleChange}
      value={searchValue}
    />
  )
}