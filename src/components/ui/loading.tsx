interface LoadingProps {
    className?: string
    borderColor?: string
    size?: string
    duration?: string
}

const Loading: React.FC<LoadingProps> = ({ className, borderColor, size = 'w-70 h-70', duration = '3s' }) => {
    return (
        <span
            className={`loader ${className || ''} ${size}`}
            style={
                {
                    '--border-color': borderColor,
                    '--duration': duration,
                } as React.CSSProperties
            }
        ></span>
    )
}

export { Loading }
