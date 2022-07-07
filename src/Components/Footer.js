import react from "react";

const Footer = () => {
    return (
        <footer>
            <span className="list-length">2 items left</span>
            <ul className="filters">
            <li className="active">
                <span>All</span>
            </li>
            <li>
                <span>Active</span>
            </li>
            <li>
                <span>Completed</span>
            </li>
            </ul>
            <span className="clear-completed">Clear complited [2]</span>
      </footer>
    );
};

export default Footer;