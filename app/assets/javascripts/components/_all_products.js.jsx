var AllProducts = React.createClass({
	render() {
		var products = this.props.products.map((product) => {
			return (
				<div key={product.id}>
					<h2>{product.name}</h2>
					<img src={product.image} />
					<div class="product-price">${product.price}</div>
					<p>{product.description}</p>
				</div>
			)
		});

		return(
			<div>
				{products}
			</div>
		)
	}
})