function Item({name, isPacked}) {
    return (
    <li className="item">
        {isPacked ? name + '✅' : name}
    </li>
    )
} 

export default function PackingList() {
    return (
        <section>
            <h1>Marcs Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Shorts"
                />
                <Item
                    isPacked={false}
                    name="Shoes"
                />
                <Item
                    isPacked={true}
                    name="Passport"
                />
                <Item
                    isPacked={true}
                    name="Myself"
                />
            </ul>
        </section>
    )
}