

const ResultsTable = ({yearlyData}) => {
    console.log(yearlyData);
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {yearlyData.map(data => (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{data.savingsEndOfYear}</td>
                        <td>{data.yearlyInterest}</td>
                        <td>{data.totalInterest}</td>
                        <td>{data.investedCapital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default ResultsTable;