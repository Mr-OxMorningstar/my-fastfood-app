// utils/api.ts
export const fetchMenuData = async () => {
    try {
      const response = await fetch('https://api.fastfoodshop.com/menu');
      if (!response.ok) {
        throw new Error(`Failed to fetch menu data: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching menu data:', error);
      throw error;
    }
  };
  