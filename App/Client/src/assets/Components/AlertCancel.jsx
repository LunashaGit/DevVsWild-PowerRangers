function AlertCancel(props) {
    return (
        <>
            <div className="fixed flex items-center justify-center w-screen bottom-5">
                <button
                    className="bg-orangeFox text-white p-2 rounded-full shadow-2xl"
                    onClick={props.onClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default AlertCancel
