import BouncingArrow from "../arrows/BouncingArrow";
import Profile from "../profile/Profile";
import Skills from "../skills/Skills";

const MyInfo = () => {
    return (
        <div className="h-screen">
            <div className="flex items-center justify-center h-full space-x-4">
                <div>
                    <Profile/>
                </div>
                <div className="w-1/3 flex-col space-y-24">
                    <div>
                        <Skills/>
                    </div>
                    
                    <BouncingArrow text="Keep Scrolling!"/>
                </div>
            </div>
        </div>
    )
}

export default MyInfo;