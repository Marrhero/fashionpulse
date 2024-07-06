
export default function Header(){

    return (
        <>
            <div class="flex flex-row">
                <h1>FASHIONPULSE</h1>
                <ul class="flex flex-row">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Collections</li>
                    <li>Sale</li>
                </ul>

                <input type="text" placeholder="Search" className="search-input" />

                <img src="./images/heart_icon.svg" alt="" />

                <img src="./images/lock_icon.svg" alt="" />
            </div>
        </>
    )
}