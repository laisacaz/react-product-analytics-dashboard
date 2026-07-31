export function GoogleLoginButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            style={{ fontFamily: "'Google Sans', Roboto, Arial, sans-serif" }}
            className="
        flex items-center justify-center gap-3
        w-full h-10 px-4
        bg-white hover:bg-gray-50
        border border-[#dadce0] hover:border-gray-400
        rounded
        text-sm font-medium text-[#3c4043]
        shadow-none hover:shadow-sm
        transition-all duration-150
        focus:outline-none
      "
        >
            <img
                src="/google-icon.svg"
                alt="Google"
                width={18}
                height={18}
            />
            Sign in with Google
        </button>
    )
}
