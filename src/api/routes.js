import { rest } from 'msw';
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
  rest.get('/dishes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        [
          {
          id:1,
          title :"butterMilk panckes",
          category: "breakfast",
          price : 15.99,
          img:"./images/burg.jpg",
          desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta sint sapiente
        temporibus debitis? Labore unde vitae qui ipsa non voluptatibus quia ex quis
        harum deserunt maxime, aliquam odio dolorum.
        `,
        },
        {
          id:2,
          title :"Dosa",
          category: "breakfast",
          price : 20.01,
          img:"./images/dosa.jpg",
          desc:`Dosa is a thin, crispy South Indian pancake made from fermented rice and lentil batter, often served with chutney and sambar. It's a popular dish known for its savory flavor and versatility, enjoyed as a breakfast or snack..
        `,
          
        },
        
        {
          id: 3,
          title :"idle vada",
          category: "breakfast",
          price : 24.99,
          img:"./images/idle.png",
          desc:`Idli Vada is a classic South Indian breakfast combo featuring soft, steamed rice cakes (idlis) paired with crispy, savory lentil doughnuts (vadas). Often served with coconut chutney and sambar, it's a flavorful and comforting meal enjoyed across India..
        `,
        },
        
        {
          id: 4,
          title :"Veg pulao",
          category: "lunch",
          price : 35.69,
          img:"./images/pulao.jpg",
          desc:`Veg Pulao is a fragrant and flavorful one-pot rice dish made with aromatic basmati rice, mixed vegetables, and a blend of spices. It's a popular and wholesome meal, often garnished with fresh coriander and served with raita or pickle..
        `,
        },
        {
          id: 5,
          title :"veg Rice",
          category: "lunch",
          price : 40.35,
          img:"./images/veg.jpeg",
          desc:`Veg Pulao is a fragrant and flavorful one-pot rice dish made with aromatic basmati rice, mixed vegetables, and a blend of spices. It's a popular and wholesome meal, often garnished with fresh coriander and served with raita or pickle..
        `,
        },
        {
          id: 6,
          title :"Pizza",
          category: "lunch",
          price : 100.6,
          img:"./images/pizza.jpg",
          desc:`Pizza is a beloved Italian dish consisting of a flatbread base topped with tomato sauce, cheese, and various toppings like vegetables, meats, and herbs. Baked until the crust is crispy and the cheese is melted, it's a universally popular meal known for its endless variations and delicious flavors.
        `,
        },
        {
          id: 7,
          title :"Biryani",
          category: "dinner",
          price : 120.69,
          img:"./images/biryani.jpeg",
          desc:`Chicken Biryani is a flavorful and aromatic rice dish made by layering marinated chicken with basmati rice, spices, and herbs. Cooked slowly to perfection, it's a rich and hearty meal often garnished with fried onions, boiled eggs, and fresh coriander, and served with raita or salad.
        `,
        },
        {
          id: 8,
          title :"Burger",
          category: "dinner",
          price : 90.31,
          img:"./images/burg.jpg",
          desc:`A burger is a popular sandwich typically consisting of a cooked patty, usually made of beef, chicken, or plant-based alternatives, placed inside a sliced bun. It's often garnished with toppings like lettuce, tomato, cheese, pickles, and condiments, making it a satisfying and versatile meal enjoyed worldwide.
        `,
        },
        {
          id: 9,
          title :"Pancakes",
          category: "dinner",
          price : 80.3,
          img:"./images/pans.jpeg",
          desc:`A pancake is a soft, fluffy, and round breakfast dish made from a batter of flour, eggs, milk, and baking powder, cooked on a griddle or frying pan. Often served with syrup, butter, fruit, or other toppings, pancakes are a comforting and versatile treat enjoyed in various forms around the world.
        `,
        },
        ]
       )
    );
  }),
];
