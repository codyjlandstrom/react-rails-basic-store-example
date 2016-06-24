var Container = React.createClass({
	getInitialState() {
		return {products: []}  
	},
	componentDidMount() {
		$.getJSON('/api/v1/products.json', (response) => { this.setState({ products: response }) });  
	},

	render() {
		return (
			<div>
				<AllProducts products={this.state.products} />
			</div>
		)
	}
});