import "./Navigation.css"

const nav = () => {
    return (
        <div>
            <ul className="ul">
                <li className="li">
                    <button className="button"><p>My Info</p></button>
                </li>
                <li className="li">
                    <button className="button"><p>Experience</p></button>
                </li>
                <li className="li">
                    <button className="button"><p>Education</p></button>
                </li>
                <li className="li">
                    <button className="button"><p>Projects</p></button>
                </li>
            </ul>
        </div>
    )
}

export default nav;