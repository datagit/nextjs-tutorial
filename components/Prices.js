class Prices extends React.Component {
    state = {
        currency: 'USD'
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        Bitcion rate for {this.props.bpi[this.state.currency].description}:
                        <span>{this.props.bpi[this.state.currency].code}</span>
                        <strong>{this.props.bpi[this.state.currency].rate}</strong>
                    </li>
                </ul>
                <label for='type'>Choose a Currency Type:</label>
                <select id='type' onChange={e => this.setState({currency: e.target.value})} className="form-control" >
                    <option lable ="USD" value="USD">USD</option>
                    <option lable="GBP" value="GBP">GBP</option>
                    <option label="EUR" value="EUR">EUR</option>
                </select>
            </div>
        )
    }
}
export default Prices;