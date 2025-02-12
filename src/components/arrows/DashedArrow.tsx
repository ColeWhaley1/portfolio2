interface DashedArrowProps {
    width?: number;
    height?: number;
    color?: string;
    strokeWidth?: number;
    dashArray?: string;
    curveFactor?: number; // Controls curve strength
    direction?: "left" | "right" | "up" | "down";
}

const DashedArrow: React.FC<DashedArrowProps> = ({
    width = 200,
    height = 100,
    color = "white",
    strokeWidth = 2,
    dashArray = "5,5",
    curveFactor = 50,
    direction = "right",
}) => {
    const startX = 10;
    const startY = height / 2;
    const endX = width - 10;
    const endY = height / 2;
    const controlX = width / 2;
    const controlY = curveFactor; // Curve height

    // Path using quadratic Bezier curve
    const pathD = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;

    // Arrowhead positioned at the end of the path
    const arrowSize = 10;
    const arrowPoints = `
        ${endX - arrowSize},${endY - arrowSize} 
        ${endX},${endY} 
        ${endX - arrowSize},${endY + arrowSize}
    `;

    // Rotation based on direction
    const rotation = {
        right: "rotate(0)",
        left: "rotate(180deg)",
        up: "rotate(-90deg)",
        down: "rotate(90deg)",
    };

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            className="z-10"
            style={{ transform: rotation[direction], transformOrigin: "center" }}
        >
            <path
                d={pathD}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                fill="transparent"
            />
            <polygon points={arrowPoints} fill={color} />
        </svg>
    );
};

export default DashedArrow;
