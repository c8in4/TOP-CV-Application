import Input from "./Input";

export default function Experiences({ experiences, onChange, onRemove }) {
    return (
        experiences.map((experience, index) => {
            const { companyName, titleOfPosition, responsibilities, startDate, endDate } = experience
            return (
                <div key={index} className="experienceContainer">
                    <Input label='Company Name' type='text' name='companyName' value={companyName} onChange={(e) => onChange(e, index)} />
                    <Input label='Title of Position' type='text' name='titleOfPosition' value={titleOfPosition} onChange={(e) => onChange(e, index)} />

                    <label>
                        <p>Responsibilities</p>
                        <textarea name="responsibilities"
                            value={responsibilities}
                            onChange={(e) => onChange(e, index)}></textarea>
                    </label>

                    <div className="fromToDate">
                        <Input label='From' type='date' name='startDate' value={startDate} onChange={(e) => onChange(e, index)} />
                        <Input label='To' type='date' name='endDate' value={endDate} onChange={(e) => onChange(e, index)} />
                    </div>
                    <button type="button" className="deleteButton" onClick={() => onRemove(index)}>Delete</button>
                </div>
            )
        })
    )
}