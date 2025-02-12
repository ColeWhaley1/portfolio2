import { motion } from "framer-motion";

interface BouncingArrowProps {
    text?: string;
    color?: string;
    size?: number;
}

const BouncingArrow: React.FC<BouncingArrowProps> = ({
    text = "See More",
    color = "white",
    size = 50,
}) => {
    return (
        <div className="flex flex-col items-center">

            <span className="text-lg font-semibold" style={{ color }}>
                {text}
            </span>

            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
            >
                <path d="M12 18l-6-6h12l-6 6z" />
            </motion.svg>
        </div>
    );
};

export default BouncingArrow;
