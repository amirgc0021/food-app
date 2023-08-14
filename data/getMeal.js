console.log(JSON.stringify(arr.slice(0,5).map(item => ({
  "name": item.name,
  "active": true,
  "meals": item.menu_item_list.slice(0,6).map(meal => ({
	"name": meal.name,
	"description": meal.description,
	"price": {
		"delivery": meal.price.amount / 100,
		"pickup": meal.price.amount / 100
	},
	"active": true,
	"img": "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/" + meal.media_image.public_id
})),
  "discounts": [],
  "description": item.diner_description || ""
}))));