import Profile from "../profile/Profile";
import Skills from "../skills/Skills";

const MyInfo = () => {
    return (
        <div className="h-screen">
            <div className="flex items-center justify-center h-full space-x-4">
                <div className="flex-col space-y-4 text-center">
                    <Profile/>
                </div>
                <div className="w-1/3">
                    <div>
                        <Skills/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MyInfo;