import Profile from "../profile/profile";

const Header = () => {
    return (
        <div className="h-screen">
            <div className="flex items-center justify-center h-full">
                <div className="flex-col space-y-4 text-center">
                    <Profile/>
                </div>
            </div>
        </div>
    )
}

export default Header;