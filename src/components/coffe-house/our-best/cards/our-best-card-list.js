import BestCardItem from "./our-best-card-item";

function BestCardList({data}) {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <BestCardItem
                key={id}
                {...itemProps}/>
        )
    })

    return (
        <div className="our-best__cards">
            {elements}
        </div>
    )
}

export default BestCardList;