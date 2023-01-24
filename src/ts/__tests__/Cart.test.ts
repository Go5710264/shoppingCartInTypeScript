import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('there must be three items in the cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie('the Avengers', 2012, 'США', 'Avengers Assemble!', 'фантастика', 137, 370, 1010))

  expect(cart.items.length).toBe(3);
});

test('get purchase amount', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie('the Avengers', 2012, 'США', 'Avengers Assemble!', 'фантастика', 137, 370, 1010))

  expect(cart.withoutDiscounts()).toBe(3270)
})

test('receive discounted purchase amount', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie('the Avengers', 2012, 'США', 'Avengers Assemble!', 'фантастика', 137, 370, 1010))

  expect(cart.withDiscount(20)).toBe(2616)
})

test('removing an item from the cart', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie('the Avengers', 2012, 'США', 'Avengers Assemble!', 'фантастика', 137, 370, 1010))
  cart.delElement(1008)

  expect(cart.items.length).toBe(3)
})