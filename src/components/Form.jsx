import { useState } from "react"
import General from "./General"
import Education from "./Education"
import Experiences from "./Experiences"
import Display from "./Display"

export default function Form() {
    const [editMode, setEditMode] = useState(true)

    const [general, setGeneral] = useState(
        { firstName: 'fake', lastName: 'name', email: 'fake@mail.com', phoneNumber: '0123456789' }
    )

    const [schools, setSchools] = useState(
        [
            { schoolName: 'school', titleOfStudy: 'learning', yearOfGraduation: '2025-12-18' },
            { schoolName: 'school', titleOfStudy: 'learning', yearOfGraduation: '2025-12-18' }

        ]
    )

    const [experiences, setExperiences] = useState(
        [
            { companyName: 'Work', titleOfPosition: 'employee', responsibilities: 'working', startDate: '2025-12-18', endDate: '2025-12-19' }
        ]
    )

    function handleGeneralChange(e) {
        const next = { ...general }
        const fieldName = e.target.name
        const newValue = e.target.value
        next[fieldName] = newValue
        setGeneral(next)
    }

    function handleSchoolChange(e, index) {
        const next = [...schools]
        const fieldName = e.target.name
        const newValue = e.target.value
        next[index][fieldName] = newValue
        setSchools(next)
    }

    function handleAddSchool() {
        setSchools([
            ...schools,
            { schoolName: '', titleOfStudy: '', yearOfGraduation: '' }
        ])
    }

    function handleRemoveSchool(index) {
        const next = [...schools]
        next.splice(index, 1)
        setSchools(next)
    }

    function handleExperienceChange(e, index) {
        const next = [...experiences]
        const fieldName = e.target.name
        const newValue = e.target.value
        next[index][fieldName] = newValue
        setExperiences(next)
    }

    function handleAddExperience() {
        setExperiences([
            ...experiences,
            { companyName: '', titleOfPosition: '', responsibilities: '', startDate: '', endDate: '' }
        ])
    }

    function handleRemoveExperience(index) {
        const next = [...experiences]
        next.splice(index, 1)
        setExperiences(next)
    }

    function handleSubmit(e) {
        e.preventDefault()

        setEditMode(false)

        // console.log(general, schools, experiences);
    }

    function handleEdit() {
        setEditMode(true)
    }

    function handleClearAll() {
        setGeneral(
            { firstName: '', lastName: '', email: '', phoneNumber: '' }
        )

        setSchools(
            [
                { schoolName: '', titleOfStudy: '', yearOfGraduation: '' }
            ]
        )

        setExperiences(
            [
                { companyName: '', titleOfPosition: '', responsibilities: '', startDate: '', endDate: '' }
            ]
        )
    }

    return (
        <>
            {editMode
                ? (
                    <form>
                        <fieldset>
                            <legend>General Information</legend>
                            <General
                                information={general}
                                onChange={handleGeneralChange}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Education</legend>
                            <Education
                                schools={schools}
                                onChange={handleSchoolChange}
                                onRemove={handleRemoveSchool}
                            />
                            <button type="button" onClick={handleAddSchool}>Add more</button>
                        </fieldset>

                        <fieldset>
                            <legend>Work Experience</legend>

                            <Experiences
                                experiences={experiences}
                                onChange={handleExperienceChange}
                                onRemove={handleRemoveExperience}
                            />
                            <button type="button" onClick={handleAddExperience}>Add more</button>

                        </fieldset>
                    </form>

                )
                :
                (
                    <Display general={general} schools={schools} experiences={experiences} />
                )}

            <div className="buttons">
                {editMode
                    ? (
                        <>
                            <button className="submitButton" onClick={handleSubmit} type="button">Generate CV</button>
                            <button className="deleteButton" onClick={handleClearAll} type="button">Clear all</button>
                        </>
                    )
                    : (
                        <button onClick={handleEdit} type="button">Edit</button>
                    )
                }
            </div>
        </>
    )
}