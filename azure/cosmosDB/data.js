import crypto from "crypto";
const OwnerId = crypto.randomUUID();
export const owners = (OwnerId) => {
  return [
    {
      ownerId: OwnerId,
      type: "OWNER",
      name: "Tadeo Aguilar",
      email: "tadeo.am@gmail.com",
    },
  ];
};

const storeId = crypto.randomUUID();

export const stores = (StoreId, OwnerId) => {
  return [
    {
      storeid: StoreId,
      ownerId: OwnerId,
      type: "STORE",
      name: "ecobazar",
    },
  ];
};
export const categories = (storeId) => {
  return [
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Oil",
      image: "next_categories/Oil_surmku",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Dish Detergents",
      image: "next_categories/Dish_e9huac",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Diabetic Food",
      image: "next_categories/Diabetic_rrlbaj",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Cooking",
      image: "next_categories/cooking_gay3cg",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Baking Needs",
      image: "next_categories/Baking_vmvs6u",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Bread & Bakery",
      image: "next_categories/Bread_ykepn4",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Beauty & Health",
      image: "next_categories/Beauty_j48n4h",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Beverages",
      image: "next_categories/Beverages_jqg2pp",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Snacks",
      image: "next_categories/snacks_ewfynj",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Meat & Fish",
      image: "next_categories/meatfish_jdmmyo",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Fresh Vegetables",
      image: "next_categories/Vegetables_fcqokr",
    },
    {
      storeId: storeId,
      type: "PRODUCTCATEGORY",
      categoryId: "Fresh Fruit",
      image: "next_categories/fruits_iebba3",
    },
  ];
};

export const products = (storeId) => {
  return [
    {
      storeId: storeId,
      productId: crypto.randomUUID(),
      type: "PRODUCT",
      categoryId: "Fresh Vegetables",
      description: "Green Capsicum",
      SKU: "123456",
      price: 20.99,
      purchaseDays: 10,
      isOffer: true,
      offerPercentage: 0.51,
      offerText: "Sale 50%",
      imageURL:
        "https://res.cloudinary.com/do7uf4vlt/image/upload/f_auto/q_auto/v1696260105/greenPeppers_j7yowq.jpg",
      imageId: "greenPeppers_j7yowq",
      stars: 4,
    },
    {
      storeId: storeId,
      productId: crypto.randomUUID(),
      type: "PRODUCT",
      categoryId: "Fresh Vegetables",
      description: "Green Chilli",
      SKU: "123454",
      price: 34,
      purchaseDays: 10,
      isOffer: false,
      offerPercentage: 0,
      offerText: "",
      imageURL:
        "http://res.cloudinary.com/do7uf4vlt/image/upload/f_auto/q_auto/v1696260105/GreenChilli_rwjant.jpg",
      imageId: "GreenChilli_rwjant",
      stars: 4,
    },
    {
      storeId: storeId,
      productId: crypto.randomUUID(),
      type: "PRODUCT",
      categoryId: "Fresh Vegetables",
      description: "Cauliflower",
      SKU: "123458",
      price: 12,
      purchaseDays: 7,
      isOffer: false,
      offerPercentage: 0,
      offerText: "",
      imageURL:
        "http://res.cloudinary.com/do7uf4vlt/image/upload/f_auto/q_auto/v1696260105/cabbage_liapkf.jpg",
      imageId: "cabbage_liapkf",
      stars: 3,
    },
    {
      storeId: storeId,
      productId: crypto.randomUUID(),
      type: "PRODUCT",
      categoryId: "Fresh Vegetables",
      description: "Corn",
      SKU: "123439",
      price: 20,
      purchaseDays: 15,
      isOffer: false,
      offerPercentage: 0,
      offerText: "",
      imageURL:
        "https://res.cloudinary.com/do7uf4vlt/image/upload/f_auto/q_auto/v1696260105/corn_spr2bl.jpg",
      imageId: "corn_spr2bl",
      stars: 3,
    },
    {
      storeId: storeId,
      productId: crypto.randomUUID(),
      type: "PRODUCT",
      categoryId: "Fresh Vegetables",
      description: "Big Potatoes",
      SKU: "123239",
      price: 20,
      purchaseDays: 15,
      isOffer: false,
      offerPercentage: 0,
      offerText: "",
      imageURL:
        "http://res.cloudinary.com/do7uf4vlt/image/upload/f_auto/q_auto/v1696260105/potato_ucu75l.jpg",
      imageId: "potato_ucu75l",
      stars: 3,
    },
    {
      storeId: storeId,
      productId: crypto.randomUUID(),
      type: "PRODUCT",
      categoryId: "Fresh Vegetables",
      description: "Green Lettuce",
      SKU: "1232539",
      price: 9,
      purchaseDays: 10,
      isOffer: false,
      offerPercentage: 0,
      offerText: "",
      imageURL:
        "http://res.cloudinary.com/do7uf4vlt/image/upload/f_auto/q_auto/v1696260105/lettuce-2_mf48us.jpg",
      imageId: "lettuce-2_mf48us",
      stars: 3,
    },
    {
      storeId: storeId,
      productId: crypto.randomUUID(),
      type: "PRODUCT",
      categoryId: "Fresh Vegetables",
      description: "Eggplant",
      SKU: "123253v9",
      price: 40,
      purchaseDays: 12,
      isOffer: false,
      offerPercentage: 0,
      offerText: "",
      imageURL:
        "http://res.cloudinary.com/do7uf4vlt/image/upload/f_auto/q_auto/v1696260105/eggPlant_wfcq4c.jpg",
      imageId: "eggPlant_wfcq4c",
      stars: 4,
    },
    {
      storeId: storeId,
      productId: crypto.randomUUID(),
      type: "PRODUCT",
      categoryId: "Fresh Vegetables",
      description: "Chinese Cabbage",
      SKU: "1232d53v9",
      price: 40,
      purchaseDays: 12,
      isOffer: false,
      offerPercentage: 0,
      offerText: "",
      imageURL:
        "http://res.cloudinary.com/do7uf4vlt/image/upload/f_auto/q_auto/v1696259480/lettuce_abudn1.jpg",
      imageId: "lettuce_abudn1",
      stars: 4,
    },
    {
      storeId: storeId,
      productId: crypto.randomUUID(),
      type: "PRODUCT",
      categoryId: "Fresh Fruit",
      description: "Orange",
      SKU: "123232d53v9",
      price: 20,
      purchaseDays: 12,
      isOffer: false,
      offerPercentage: 0,
      offerText: "",
      imageURL:
        "http://res.cloudinary.com/do7uf4vlt/image/upload/f_auto/q_auto/v1695834920/Orange_vpqdud.jpg",
      imageId: "Orange_vpqdud",
      stars: 4,
    },
    {
      storeId: storeId,
      productId: crypto.randomUUID(),
      type: "PRODUCT",
      categoryId: "Fresh Fruit",
      description: "Green Apple",
      SKU: "534543543",
      price: 29.8,
      purchaseDays: 12,
      isOffer: true,
      offerPercentage: 0.5,
      offerText: "Sale 50%",
      imageURL:
        "http://res.cloudinary.com/do7uf4vlt/image/upload/f_auto/q_auto/v1695325384/gapple_zmxsvy.jpg",
      imageId: "gapple_zmxsvy",
      stars: 4,
    },
  ];
};
