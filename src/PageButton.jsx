export default function PageButton(props){
    let label = props.label

    return(
        <>
            <button onClick={props.onClick} className="w-[3rem] h-[3rem] bg-ultra-faint-grey justify-center text-dark-green rounded-[1rem] text-[1.25rem] font-urbanist font-semibold">
                {label}
            </button>
        </>
    )
}