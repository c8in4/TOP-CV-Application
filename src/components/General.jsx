import Input from "./Input";

export default function General({ information, onChange }) {
    const { firstName, lastName, email, phoneNumber } = information

    return (
        <div>
            <Input label='First Name' type='text' name='firstName' value={firstName} onChange={onChange} />
            <Input label='Last Name' type='text' name='lastName' value={lastName} onChange={onChange} />
            <Input label='Email' type='email' name='email' value={email} onChange={onChange} />
            <Input label='Phone Number' type='number' name='phoneNumber' value={phoneNumber} onChange={onChange} />
        </div>
    )
}