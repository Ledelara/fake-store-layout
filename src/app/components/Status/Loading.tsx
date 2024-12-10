interface LoadingProps {
    message: string;
    isLoading: boolean;
}

export default function Loading({ message, isLoading }: LoadingProps) {
    return isLoading ? <p>{message}</p> : null;
}