import { FaGithub, FaGoodreads, FaLinkedin } from "react-icons/fa";

function SocialIcons() {
    return (
        <div className="flex items-center">
            <a href="">
                <FaGithub className="text-5xl p-1 hover:text-blue-500" />
            </a>
            <a href="">
                <FaLinkedin className="text-5xl p-1 hover:text-blue-500" />
            </a>
            <a href="">
                <FaGoodreads className="text-5xl p-1 hover:text-blue-500" />
            </a>
        </div>
    )
}

export default SocialIcons;