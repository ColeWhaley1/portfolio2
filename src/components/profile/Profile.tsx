import "./Profile.css"
import { IoLocationSharp } from "react-icons/io5";

const Profile = () => {
    return (
        <div className="card-client">
            <div className="user-picture">
                <img src="/profilePic.JPG" alt="" />
            </div>
            <p className="py-4 space-y-2">

                <div className="font-bold text-3xl">
                    Cole Whaley
                </div>

                <div className="opacity-85 text-lg">
                    <div>
                        Full-Stack Software Engineer
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                        <div className="max-w-8">
                            <IoLocationSharp />
                        </div>
                        <div>
                            Raleigh-Durham, NC
                        </div>
                    </div>

                    <div className="text-sm flex space-x-2 items-center justify-center py-2">
                        <div>
                            colewhaley1@gmail.com
                        </div>
                        <hr className="w-2" />
                        <div>
                            +1(252)-571-6524
                        </div>
                    </div>
                </div>
            </p>

            <hr className="opacity-80 bg-accent" />

            <div className="social-media flex items-center justify-center pt-4">

                <a href="https://github.com/ColeWhaley1" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.523 2 12.052c0 4.446 2.865 8.214 6.839 9.538.5.093.682-.217.682-.482 0-.237-.008-.867-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.162-1.11-1.472-1.11-1.472-.907-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.554 2.341 1.104 2.91.844.091-.647.35-1.105.636-1.359-2.22-.252-4.555-1.113-4.555-4.956 0-1.094.39-1.988 1.029-2.687-.103-.253-.446-1.268.098-2.64 0 0 .84-.269 2.75 1.026a9.543 9.543 0 0 1 2.5-.336c.849.004 1.705.115 2.5.336 1.91-1.295 2.75-1.026 2.75-1.026.545 1.372.202 2.387.099 2.64.64.699 1.028 1.593 1.028 2.687 0 3.854-2.337 4.702-4.564 4.948.36.31.678.92.678 1.854 0 1.338-.013 2.419-.013 2.746 0 .268.18.579.688.482C19.138 20.264 22 16.496 22 12.052 22 6.523 17.523 2 12 2Z"></path>
                    </svg>
                    <span className="tooltip-social">GitHub</span>
                </a>

                <a href="https://www.linkedin.com/in/cole-whaley-93b2b01b1/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                        <path d="M20.452 20.452h-3.801v-5.59c0-1.334-.027-3.051-1.859-3.051-1.86 0-2.144 1.455-2.144 2.956v5.685H8.847V9.5h3.644v1.493h.051c.509-.963 1.754-1.975 3.613-1.975 3.862 0 4.569 2.541 4.569 5.847v5.587h-.001zM5.337 8.006a2.217 2.217 0 1 1 0-4.435 2.217 2.217 0 0 1 0 4.435zM7.237 20.452H3.437V9.5h3.8v10.952zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.547C0 23.225.792 24 1.771 24h20.452c.98 0 1.771-.774 1.771-1.727V1.727C24 .774 23.205 0 22.225 0z"></path>
                    </svg>
                    <span className="tooltip-social">LinkedIn</span>
                </a>

                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path>
                    </svg>
                    <span className="tooltip-social">Resume</span>
                </a>


            </div>
        </div>
    )
}

export default Profile;