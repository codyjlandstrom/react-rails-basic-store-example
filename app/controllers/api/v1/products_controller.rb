class Api::V1::ProductsController < Api::V1::BaseController
	def index
		respond_with Product.all
	end

	private
	def product_params
		params.require(:product).permit(:id, :name, :description, :price, :image)
	end
end