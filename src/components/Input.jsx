export default function Input({ label, type, name, value, onChange }) {
    return (
        <label>
            <p>{label}</p>
            <input type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    )
}