import './AmountComponent.css'

export const Tip = ({name, value}) => {
    return (
        <div className="Tip">
            <div className="For">
                {name}
                <span>/ person</span>
            </div>
            <h2>${value.toFixed(2)}</h2>
        </div>
    )
}