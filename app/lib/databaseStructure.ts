import { z } from "zod";

const productSchema = z.object({
    storeId: z.string().uuid(),
    productId: z.string().uuid(),            
    type: z.string().default(''),
    categoryId: z.string(),
    description: z.string().default(''),    
    SKU: z.string().default(''),   
    price: z.number().default(0.0),
    purcharseDays: z.number().default(0),    
    isOffer: z.boolean().default(false),
    offerPercentage: z.number().default(0.0),
    offerText:z.string().default('') ,
    imageURL:  z.string().url().default(''),
    imageId: z.string().default(''),
    stars: z.number().default(0),
    

});

export type Product = z.infer<typeof productSchema>;

const categorySchema = z.object({    
    storeId: z.string().uuid(),
    type: z.string().default(''),
    categoryId: z.string(),        
    image: z.string().default(''),
   
});

export type Category = z.infer<typeof categorySchema>;

const storeSchema = z.object({
    storeId: z.string().uuid(),
    type: z.string().default(''),
    name: z.string().default(''),
    description: z.string().default(''),
   
});

export type Store = z.infer<typeof storeSchema>;

const orderDetailSchema = z.object({    
    productId: z.string().uuid(),    
    name: z.string(),
    quantity: z.number().default(0),
    price: z.number().default(0.0),    

});

interface OrderDetail extends z.infer<typeof orderDetailSchema> {}

export const orderSchema = z.object({
    orderId: z.string().uuid(),
    storeId: z.string().uuid(),
    type: z.string().default(''),
    userId: z.string(),
    status: z.string().default(''),
    total: z.number().default(0.0),
    purcharseDays: z.number().default(0),
    detail: z.array(orderDetailSchema).default([]),    

});

export type Order = z.infer<typeof orderSchema>;

const userSchema = z.object({
    userId: z.string().uuid(),
    type: z.string().default(''),
    name: z.string().default(''),
    email: z.string().email().default(''),
    password: z.string().default(''),
    address: z.string().default(''),
    phone: z.string().default(''),
    orders: z.array(orderSchema).default([]),    

});

export type User = z.infer<typeof userSchema>;

export const data = {
    orderId: crypto.randomUUID(),
    storeId: crypto.randomUUID(),
    userId: '1',
    status: 'pending',
    type: 'cart',
    total: 0.0,
    purcharseDays: 0,
    detail: [{        
        productId: crypto.randomUUID(),
        name: '',
        quantity: 0,
        price: 0.0,
    }],
}



