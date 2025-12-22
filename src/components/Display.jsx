export default function Display({ general, schools, experiences }) {
    return (
        <>
            <div key='general' className="general">
                <h2>general information</h2>
                <p>First Name: {general.firstName}</p>
                <p>Last Name: {general.lastName}</p>
                <p>Email: {general.email}</p>
                <p>Phone Number: {general.phoneNumber}</p>
            </div>

            <div key='schools' className="schools">
                <h2>schools</h2>
                {schools.map((school, index) => {
                    return (
                        <div key={index} className="school">
                            <p>School Name: {school.schoolName}</p>
                            <p>Title of Study: {school.titleOfStudy}</p>
                            <p>Graduation: {school.yearOfGraduation}</p>
                        </div>
                    )
                })
                }
            </div>

            <div key='experiences' className="experiences">
                <h2>experiences</h2>
                {experiences.map((experience, index) => {
                    return (
                        <div key={index} className="experience" >
                            <p>Company Name: {experience.companyName}</p>
                            <p>Title of Position: {experience.titleOfPosition}</p>
                            <p>Responsibilities: {experience.responsibilities}</p>
                            <p>From {experience.startDate} to {experience.endDate}</p>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}