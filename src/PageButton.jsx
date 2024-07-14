export default function PageButton(props){
    let label = props.label;
    let active = props.active;
    

    return(
        <>
            <button onClick={props.onClick} className={`w-[3rem] h-[3rem] ${active ? 'bg-dark-grey text-bold-green' : 'bg-ultra-faint-grey text-dark-green'} justify-center rounded-[1rem] text-[1.25rem] font-urbanist font-semibold`}>
                {label}
            </button>
        </>
    )
}