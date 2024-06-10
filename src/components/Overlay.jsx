function Overlay({ children, onClick, className = null }) {
    return (
        <div
            className={`fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 w-full h-full z-[999] ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Overlay;
