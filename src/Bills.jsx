import React from 'react';

function Bills (props) {
    const billItems = Object.keys(props.bills).map((key, index) => {
        const bill = props.bills[key][props.bills[key].length-1];
        return (
            <li key={index} >
                { "Company: " +  bill.name + ", Amount owing: $" + bill.owing + ", Due on:" + bill.dueDate }
            </li>
        );
    });

    return (
        <div className='bills'>
            <ul>
                { billItems }
            </ul>

        </div>
    );
}
export default Bills;