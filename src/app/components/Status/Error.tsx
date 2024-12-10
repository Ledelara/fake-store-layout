interface ErrorProps {
    message: string;
    isError: boolean;
}

export default function Error({ message, isError }: ErrorProps) {
    return isError ? <p>{message}</p> : null;
}