interface LoadingProps {
    message: string;
    isLoading: boolean;
}

export default function Loading({ message, isLoading }: LoadingProps) {
    return(
        <div className="isLoading">
            {isLoading ? <p>{message}</p> : null}
        </div>
    )
}