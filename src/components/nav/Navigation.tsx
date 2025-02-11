import "./Navigation.css"

const nav = () => {
    return (
        <div>
            <ul className="ul">
                <li className="li">
                    <button className="button"><p className="p">Experience</p></button>
                </li>
                <li className="li">
                    <button className="button"><p className="p">Education</p></button>
                </li>
                <li className="li">
                    <button className="button"><p className="p">Projects</p></button>
                </li>
            </ul>
        </div>
    )
}

export default nav;