// Define the structure of a menu item
export interface MenuItem {
    id: string; // Unique identifier for the menu item
    name: string; // Name of the menu item
    description: string; // Description of the item
    price: number; // Price of the item
    imageUrl?: string; // Optional image URL for the item
    category: string; // Category the item belongs to (e.g., "Burgers", "Drinks")
    isAvailable: boolean; // Indicates if the item is currently available
  }
  
  // Define the structure of a cart item
  export interface CartItem {
    menuItemId: string; // ID of the menu item in the cart
    quantity: number; // Number of this item in the cart
  }
  
  // Define the structure of the cart
  export interface Cart {
    items: CartItem[]; // List of items in the cart
    total: number; // Total cost of all items in the cart
  }
  
  // Define the structure of a user
  export interface User {
    id: string; // Unique identifier for the user
    name: string; // Name of the user
    email: string; // Email address of the user
    phone?: string; // Optional phone number of the user
    address?: string; // Optional delivery address
    isAuthenticated: boolean; // Indicates if the user is logged in
  }
  
  // Example usage
  const sampleMenuItem: MenuItem = {
    id: "1",
    name: "Classic Cheeseburger",
    description: "A juicy beef patty with cheese, lettuce, tomato, and pickles.",
    price: 8.99,
    imageUrl: "https://example.com/images/cheeseburger.jpg",
    category: "Burgers",
    isAvailable: true,
  };
  
  const sampleCart: Cart = {
    items: [
      { menuItemId: "1", quantity: 2 },
      { menuItemId: "3", quantity: 1 },
    ],
    total: 27.97,
  };
  
  const sampleUser: User = {
    id: "u123",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Springfield, USA",
    isAuthenticated: true,
  };
  