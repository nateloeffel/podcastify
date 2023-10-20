export default function PagePage({
    params
}: {
    params: {
        id: string
    }
}) {

    return (
        <div>
            <p>{params.id}</p>
        </div>
    )

}