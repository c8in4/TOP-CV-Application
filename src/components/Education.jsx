import Input from "./Input";

export default function Education({ schools, onChange, onRemove }) {
    return (
        schools.map((school, index) => {
            const { schoolName, titleOfStudy, yearOfGraduation } = school
            return (
                <div key={index} className="schoolContainer">
                    <Input label='School Name' type='text' name='schoolName' value={schoolName} onChange={(e) => onChange(e, index)} />
                    <Input label='Title of Study' type='text' name='titleOfStudy' value={titleOfStudy} onChange={(e) => onChange(e, index)} />
                    <Input label='Year of Graduation' type='date' name='yearOfGraduation' value={yearOfGraduation} onChange={(e) => onChange(e, index)} />
                    <button type="button" className="deleteButton" onClick={() => onRemove(index)}>Delete</button>
                </div>
            )
        })
    )
}