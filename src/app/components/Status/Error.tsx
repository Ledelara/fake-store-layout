interface ErrorProps {
    message: string;
    isError: boolean;
}

export default function Error({ message, isError }: ErrorProps) {
    return (
        <div className="isError">
            {isError ? <p>{message}</p> : null}
        </div>
    )
}